---
title: "고랭? 러스트가 그렇게 좋다며?(0)"
date: 2019-10-24T12:17:19.770Z
slug: /go-rust-programming/go-rust-programming-0
featuredImage: ../../../images/blog/go-rust-programming/go-rust-image.png
tags:
  - Golang
  - Rust
  - programming language
  - go-rust-programming
---

그렇습니다. 제목은 어그로를 끌려는 저의 작전이었던 것입니다.

![Golang과 Rust](../../../images/blog/go-rust-programming/go-rust-image.png)

스크립트 언어 덕후인 제가 오랜만에 컴파일 언어를 보게 될 일이 있었습니다. 바로 Go언어와 Rust인데요.
사실 둘다 나온지는 좀 됐죠? 옛날에도 배우고 싶어서 검색하고 알아본적은 있었지만, 당시에는 너무 초기여서 비교하거나 배울 필요성을 못느끼고 있었습니다.
그런데 오랜만에 들고나온 이유는 Google이 Go언어를 엄청 밀어주면서 Docker, k8s 등에 엄청 쓰이고 있고, Rust는 웹친화적인 언어 성향과 뛰어난 최적화와 메모리 관리로 Golang 이상의 성능을 보여주고 있죠.

> Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.
>
> Go는 소프트웨어를 쉽고, 안정적이며, 효율적으로 빌드하도록 만들어주는 오픈소스 프로그래밍 언어입니다.
>
> - Go 홈페이지 첫 화면 문구

> A language empowering everyone to build reliable and efficient software.
>
> (Rust는) 모든 사람이 소프트웨어를 안정적이며 효율적으로 빌드하게 해주는 언어입니다.
>
> - Rust 홈페이지 첫 화면 문구

*그럼 둘 다 안정적이고 효율적이면, simple이 들어간 Golang이 승리?* ~~[그리고 그것은 사실이 되었다.](https://blog.stibee.com/golang-vs-rust-%ED%8D%BC%ED%8F%AC%EB%A8%BC%EC%8A%A4-%EB%B2%A4%EC%B9%98%EB%A7%88%ED%82%B9-%EC%8D%B0-bac94bc26e2e)~~

아무튼 그래서 기본적인 프로그래밍 문법이나 용법들을 살펴보면서 Golang과 Rust에 대해 배워보는 시간을 가져보고자 합니다.
각 언어의 문법을 배우시고 싶으신 분들은 더 좋은 레퍼런스, 도큐먼트가 있을테니 그곳을 참고하시구요. 또한 홈페이지에 들어가시면 도큐먼트가 상세하게 나와있습니다.

이 시리즈는 그저 두 언어를 비교하면서 배워보고자 하는게 컨셉이니 너무 타이트하게 생각하지 마시고 여유있게 따라오시면 두 언어를 동시에 재밌게 배울 수 있을 것 같습니다.

그럼 "고랭? 러스트가 그렇게 좋다며?" 시리즈 시작합니다.

## Reference
- [The Go Programming Language](https://golang.org/)
- [Rust Programming language](https://www.rust-lang.org/)
- [Golang vs Rust 퍼포먼스 벤치마킹 썰 - 이학진](https://blog.stibee.com/golang-vs-rust-%ED%8D%BC%ED%8F%AC%EB%A8%BC%EC%8A%A4-%EB%B2%A4%EC%B9%98%EB%A7%88%ED%82%B9-%EC%8D%B0-bac94bc26e2e)
