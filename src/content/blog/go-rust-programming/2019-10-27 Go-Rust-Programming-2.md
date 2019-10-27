---
title: "변수와 상수 - 고랭? 러스트가 그렇게 좋다며?(2)"
date: 2019-10-27T10:35:07.306Z
slug: /go-rust-programming/basic-variables-constants
featuredImage: ../../../images/blog/go-rust-programming/go-rust-image.png
tags:
  - Golang
  - Rust
  - programming language
  - go-rust-programming
---

![Golang과 Rust](../../../images/blog/go-rust-programming/go-rust-image.png)

## 변수와 상수

이번엔 프로그래밍의 가장 기본이 되는 변수와 상수 선언을 살펴볼까요?

### Go

Go는 **변수** 선언시 `var` 예약어를 사용합니다. 형태는 `var 변수명 타입`을 이루고 있습니다. Javascript에서 사용하는 `var`와 이름이 같네요 ㅎㅎㅎ

```go
var x, y, z int // 0 0 0
var c, python, java bool // false false false
```

변수를 초기화할 수도 있습니다. 변수를 초기화하는 경우 타입을 생략할 수 있습니다.

```go
var x, y, z int = 1, 2, 3 // 1 2 3
var c, python, java = true, false, "no!" // true false no!
```

**함수 안에서** 지역변수를 선언할 경우 단축 예약어를 사용할 수 있습니다.

```go
func a() {
    var c, python, java = true, false, "no!" // true false no!
}
/* OR */
func b() {
    c, python, java := true, false, "no!" /// true false no!
}
```

그럼 **상수**는 어떻게 선언할까요? 상수는 `const` 예약어를 사용합니다. 상수는 타입의 제약이 있습니다. 다음의 타입만 상수로 정의할 수 있습니다.

- 문자(character)
- 문자열(string)
- 부울(boolean)
- 숫자

```go
const Pi = 3.14

func main() {
    const World = "안녕"
    const Truth = true
}
```

그런데 **숫자형 상수**는 좀더 정말한 값을 사용할 수 있습니다. 타입을 지정하지 않은 상수는 문맥(context)에 따라 타입을 가지게 됩니다.

```go
package main

import "fmt"

const (
    Big   = 1 << 100 // 비트 연산 2^100 = 1.2676506E30
    Small = Big >> 99 // 비트 연산 Big/2^99 = 2^1 = 2
)

func needInt(x int) int { return x * 10 + 1 }
func needFloat(x float64) float64 {
    return x * 0.1
}

func main() {
    fmt.Println(needInt(Small)) // 21 = 2 * 10 + 1
    fmt.Println(needFloat(Small)) // 0.2 = 2 * 0.1
    fmt.Println(needFloat(Big)) // 1.2676506002282295e+29
}
```

### Rust

이번엔 Rust를 살펴보겠습니다. Rust는 안전한 메모리 관리를 위해서 특별한 개념을 사용합니다. 이 개념은 조금 뒤에 살펴보고 일단 변수와 상수를 먼저 알아볼까요?

Rust는 다른 언어들과 달리 변수를 **기본적으로 상수**처럼 사용합니다. 정확히 말하면 변할 수 없는(immutable) 변수(variable)을 사용합니다. 예약어는 `let`을 사용합니다. 다음의 예제는 4번째 줄에서 컴파일러단 에러가 나옵니다. immutable variable은 변경할 수 없습니다.

```rust
fn main() {
    let x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);
}
```

Rust는 특이하게도 이런 문제를 일으킬수 있을만한 변수는 원천적으로 불편성을 가지게 합니다. mutable variable을 선언하기 위해서는 `mut`를 같이 적어줍니다.

```rust
fn main() {
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);
}
```

Rust는 Shadowing이라는 기법을 통해 변수를 mutable하지 않게 안정적으로 사용할 수 있습니다. 다음을 볼까요?

```rust
fn main() {
    let x = 5;
    let x = x + 1;
    let x = x * 2;

    println!("The value of x is: {}", x);
}
```

위 코드의 결과로 최종 `x`는 `12`의 결과를 가집니다. 이 방식과 mutable variables의 차이점은 Shadowing을 사용하면 마지막으로 `let`으로 선언한 변수 이후로는 더이상 변경 할 수 없다는 것입니다.

조금은 어려워 보이는 이러한 Rust만의 방식은 가비지 콜렉터 없이 안전한 메모리 사용을 할 수 있도록 합니다.

그런데 무려 **상수는** 따로 있습니다!! Rust에서 상수는 `const` 예약어를 사용합니다. Rust의 상수 명명 규칙은 대문자 구성의 문자열과 \_의 사용합니다. 또한 가독성을 위해 숫자 사이에 \_를 넣을 수 있습니다. 다음은 `100,000` 값을 가진 `MAX_POINST` 라는 상수입니다.

```rust
const MAX_POINTS: u32 = 100_000;
```

불변 변수(?)와 다른점이 궁금하실텐데요. 정리해드리겠습니다.

1. `mut`와 `const`는 함께 사용할 수 없습니다. 상수는 항상 불변성을 가지고 있습니다.
1. 모든 범위에서 `const` 상수를 선언하고 읽을 수 있습니다.
1. 상수는 오직 상수 표현식으로만 선언할 수 있으며, 함수의 결과나 런타임시에 계산할 수 있는 다른 값은 안됩니다.

## 요약

| 예약어 | Go | Rust |
| --- | --- | --- |
| 변수 | `var` | `let`(immutable) or `let mut`(mutable) |
| 상수 | `const` | `const` |

## Reference

- [변수 (Variables) - A Tour of Go](https://go-tour-kr.appspot.com/#11)
- [Variables and Mutability - The Rust Programming](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)
