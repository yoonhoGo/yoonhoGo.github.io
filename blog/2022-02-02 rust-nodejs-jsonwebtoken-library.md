---
title: 'Rust로 만든 node.js용 jsonwebtoken 라이브러리'
date: 2022-02-02T08:17:48+09:00
slug: /2022-02-02/rust-nodejs-jsonwebtoken-library
image: https://github.com/neon-bindings/neon/raw/main/neon.png
tags:
  - rust
  - nodejs
  - jsonwebtoken
  - jwt
  - npm package
  - neon
description: rust로 node.js 라이브러리 만든 이야기
author: yoonhoGo
author_url: https://github.com/yoonhoGo
author_image_url: https://avatars3.githubusercontent.com/u/6959851
author_title: Rust 재밌다!
---

정확히 기억은 안나지만 Mozilla Servo가 릴리즈 되었으니 아마도 2016이 맞을거 같다. 그때는 한창 대한민국의 자랑스러운 공군 병장으로서 당당히 전날 야간 근무를 마치고 취침 후 사지방에 있었을 때였다(~~혹은 주말이어서 비번이었건?~~). 계기는 모르겠지만 어떤 이유로 Mozilla에서 Servo라는 웹 브라우저 엔진을 새로 개발하였고 이는 Rust라는 Mozilla에서 만든 새로운 언어로 개발 됐다는 것을 알게되었다. 어째서였을까? 이건 마치 운명같은 만남이었을까? 나는 Rust 컨셉을 보고는 그대로 이 언어에 매료되었다.

<!--truncate-->

그 뒤로 Rust 언어에 대해서 튜토리얼과 문서를 보면서 학습은 했지만 우리나라에서 할만한 프로젝트도 없었고 그 이후로 Node.js를 접하면서 이쪽으로 개발만 진행하다 보니 Rust는 내 마음 속 한켠에 있는 짝사랑 같은 존재였달까?

그렇게 오랜 시간이 지나고 최근 Rust로 개발된 라이브러리들이 여럿 소개 되면서 나도 다시 Rust로 개발 해보고 마음이 솟구쳤다.

그래서 이번에 설연휴를 맞아 간단한 프로젝트를 좀 진행해보면 좋겠다는 생각에 “[neon](https://neon-bindings.com/)”을 이용해서 rust에서 사용하는 jsonwebtoken을 “[node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)” API 호환을 맞춰 node.js용으로 만들어보기로 했다.

...

그리고 만들었다! 두-둥!

## [neon-jsonwebtoken](https://github.com/yoonhoGo/neon-jsonwebtoken)

### Install

```bash
$npm i neon-jsonwebtoken
```

### Feature

- Sign jsonwebtoken
- Decode jsonwebtoken
- Verify Jsonwebtoken

### Dependencies and Environments  Support

- Neon
- Node.js version 12 and higher LTS
- Rust stable 1.18 and higher

### Usage

아직 Document를 만들 시간이 충분하지 않았다. 그렇지만 `node-jsonwebtoken` 과 동일한 API를 유지하려고 했다. 구현되지 않은 부분만 확인한다면 사용하는데는 어렵지 않을 것으로 생각한다. 문서는 조만간 작성하는 것으로 하겠다.

```tsx
import * as jwt from 'neon-jsonwebtoken';

const token = jwt.sign(payload, key, signOptions);
const decodedPaylaod = jwt.decode(token, decodeOptions);
const paylaod = jwt.verify(token, key, verifyOptions);
```

### To-Do

- [ ]  Asynchronous
- [ ]  `mutatePayload` option in sign function
- [ ]  `clockTolerance`, `maxAge`, `clockTimestamp`, `nonce` options in veirfy function
- [ ]  Synchronize Error messages with `node-jsonwebtoken`

### Benchmark

가장 인상적인 부분은 Rust 생태계를 이용하여 neon으로 node.js에서 사용할 수 있게 포팅 했을 뿐인데 일반 노드 라이브러리에 비해 성능에서 더 앞서는 수치가 나왔다는 것이다.

테스트는 각 파일마다 5만번의 iterator를 가지고 진행하였고 테스트마다 10회 씩 반복하여 표준 시간과 최장, 최단 시간을 구하였다.

테스트 라이브러리는 [hyperfine](https://github.com/sharkdp/hyperfine)을 사용하였다.

#### Sign token

node-jsonwebtoken은 jws에 의존성을 가지고 있고 callback을 제공한다면 event stream으로 비동기 응답을 제공한다.

neon-jsonwebtoken은 아직 비동기 응답을 만들지 않았기 때문에 테스트 코드에서 `new Promise` 로 래핑해서 테스트 해보았는데 동기코드를 Promise로 쌌을 뿐인데 항상 더 빠른 성능이 나온 점에서 이해할 수 없었다. 이에 대하여 자료가 충분하지 않았기 때문에 아래 제공한 데이터에서는 표기하지 않았다.

```bash
❯ hyperfine "node ./node-jsonwebtoken.js" "node ./node-jsonwebtoken-async.js" "node ./neon-jsonwebtoken.js"
Benchmark 1: node ./node-jsonwebtoken.js
  Time (mean ± σ):      1.069 s ±  0.042 s    [User: 1.106 s, System: 0.074 s]
  Range (min … max):    1.019 s …  1.135 s    10 runs
 
Benchmark 2: node ./node-jsonwebtoken-async.js
  Time (mean ± σ):      1.405 s ±  0.032 s    [User: 1.892 s, System: 0.203 s]
  Range (min … max):    1.367 s …  1.476 s    10 runs
 
Benchmark 3: node ./neon-jsonwebtoken.js
  Time (mean ± σ):     661.7 ms ±  22.4 ms    [User: 629.1 ms, System: 52.1 ms]
  Range (min … max):   644.0 ms … 705.9 ms    10 runs
 
Summary
  'node ./neon-jsonwebtoken.js' ran
    1.62 ± 0.08 times faster than 'node ./node-jsonwebtoken.js'
    2.12 ± 0.09 times faster than 'node ./node-jsonwebtoken-async.js'
```

#### Decode token

decode에서는 특이하게도 `node-jsonwebtoken`이 더 좋은 성능을 보여줬다. 여러 이유를 생각해봤지만 이거다 하는 이유는 찾지 못했다. 짐작가는게 있다면 제보해주시면 좋겠다.

```bash
❯ hyperfine "node ./node-jsonwebtoken-decode.js" "node ./neon-jsonwebtoken-decode.js"                      
Benchmark 1: node ./node-jsonwebtoken-decode.js
  Time (mean ± σ):      1.464 s ±  0.045 s    [User: 1.520 s, System: 0.088 s]
  Range (min … max):    1.414 s …  1.556 s    10 runs
 
Benchmark 2: node ./neon-jsonwebtoken-decode.js
  Time (mean ± σ):      1.630 s ±  0.041 s    [User: 1.701 s, System: 0.088 s]
  Range (min … max):    1.584 s …  1.698 s    10 runs
 
Summary
  'node ./node-jsonwebtoken-decode.js' ran
    1.11 ± 0.04 times faster than 'node ./neon-jsonwebtoken-decode.js'
```

#### Verify token

토큰 검증에서는 오히려 더 좋은 성능이 나타났다. 테스트 코드는 HMAC 알고리즘에 대해서만 표기했는데 차후 알고리즘 별로 벤치마크 성능을 표기해야겠다.

참고로 테스트 코드에서는 동일하게 `node-jsonwebtoken`이 토큰을 발행한 로직이 포함 되어있으므로 sign token에서 `node-jsonwebtoken`이 걸린 시간만큼 빼줘야 실질적인 시간이 될 것 같다.

```bash
❯ hyperfine "node ./node-jsonwebtoken-verify.js" "node ./neon-jsonwebtoken-verify.js"
Benchmark 1: node ./node-jsonwebtoken-verify.js
  Time (mean ± σ):      2.104 s ±  0.080 s    [User: 2.129 s, System: 0.111 s]
  Range (min … max):    2.003 s …  2.295 s    10 runs
 
Benchmark 2: node ./neon-jsonwebtoken-verify.js
  Time (mean ± σ):      1.864 s ±  0.118 s    [User: 1.875 s, System: 0.104 s]
  Range (min … max):    1.751 s …  2.120 s    10 runs
 
Summary
  'node ./neon-jsonwebtoken-verify.js' ran
    1.13 ± 0.08 times faster than 'node ./node-jsonwebtoken-verify.js'
```

## 후기

약 이틀에 걸쳐서 작성했는데 Rust에서 사용되는 jsonwebtoken과 serde serializer, neon에 대해서 파악하는데 시간이 많이 걸렸다.

평소에는 회사 일로 바쁘니 설 연휴 중에 마무리 지으려고 코드를 짜다보니 정리가 안된 부분도 많이 있다. 아직 러스트 환경에서 코드 아키텍쳐를 어떻게 가져가는지도 확실하게 모르겠고 코드는 차차 리팩토링 해보는 것으로!

neon이 생각보다 홈페이지가 부실한 부분이 있다. 홈페이지에서는 초기 사용법 정도만 참고하고 나머지는 crate api 문서를 확인하는 편이 좋다.

`npm publish`를 생각없이 했다가 rust src까지 같이 올라가서 취소하고...<br />
생각없이 `.npmignore`에 src만 추가해서 publish 했다가 cargo target 디렉토리가 딸려가서 강제 취소했더니 이미 배포가 되어버렸고...<br />
생각없이 `npm unpublish`를 했다가 하루간 배포할 수 없게 되었다... 아마 2월 3일 중으로 배포될 듯하다...

첫 러스트 프로젝트인데 생각보다 재밌었다. 그리고 trait이라는 개념이 굉장히 매력적이다.