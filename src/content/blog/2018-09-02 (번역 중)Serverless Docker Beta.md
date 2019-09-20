---
title: (번역 중)Serverless Docker Beta
date: 2018-09-02
path: /blog/(번역 중)Serverless Docker Beta
tags: ["Docker", "Serverless", "Now", "Zeit"]
---

시간이 좀처럼 안나서 뜸뜸이 번역하고 있어서 나온지 꽤 됬는데도 아직 포스팅을 못했습니다😂 그래서 좀 부족하더라도 미리 올려 놓고 조금씩
수정하려구요. 양해를 부탁드립니다.

---

얼마전에 메일로 Now를 만드는 회사인 Zeit에서 새소식이 왔습니다. 바로! [Serverless docker
beta](https://zeit.co/blog/serverless-docker)!!!!(띠용🤔) 서버리스면 서버리스고 도커면 도커지 두개가
같이 있을 수 있나…??!!!!!! 도커가 서버리스로?! 아무튼 그래서 번역을 해보았습니다. 실제 사용 후기는 이후에 올려드리겠습니다. 오역이나
어설픈 부분은 알려주시기 바랍니다😄(도와줘서 고마워요 구글 번역기)

---

올해 [ZEIT Day Keynote](https://www.youtube.com/watch?v=yqACl3tRHNI)의 초점은 Now 클라우드
플랫폼의 새로운 가능성입니다. 특히, 우리는 Serverless Docker 개발에서 우리의 초점을 강조했습니다.

오늘, 우리는 공개 베타 버전으로써 발표할 것입니다. 다음 기능을 제공합니다:

- 1.5백만개의 배포 데이터를 기반으로한 콜드 부팅 성능가 10~20배 개선<br> - 대부분의 작업부하에서 1초 미만의 콜드 부팅(전체
  왕복)으로 변환됩니다.<br> - A new `slot` configuration property which defines the
  resource allocation in terms of CPU and Memory, defaulting to `c.125-m512` (.125
  of a vCPU and 512MB of memory)
- 이를 통해 응용 프로그램을 가장 적합한 제약 조건에 맞추고 특수 CPU 기능, GPU 코어 등에 길을 열어두었습니다.(paving the
  road가 관용어인거 같은데 길을 열어두다, 가능성을 열다라는 뜻인거 같아요)
- 엄격하게 지정된 가변 제한<br> - 최대 실행 시간 (기본값은 5 분, 최대 30 분)<br> - 마지막 요청 후 종료 시간 초과 (기본값은
  1 분, 최대 5)<br> - 자동 스케일링 전에 최대 요청 동시성(기본값 10)
- 배포에 대한 HTTP/2.0과 WebSocket의 연결을 지원<br> - 당신의 어플리케이션을 다시 function으로 작성할 필요가 없습니다.
  다만, [계속 그것을 사용할 수 있습니다.](https://zeit.co/blog/serverless-docker#walkthrough)
- Automatic port discovery. We no longer rely on the `EXPOSE` instruction. We
  automatically forward traffic to the port of the process started by `CMD`

Read on to learn how it works or head directly to our
[examples](https://github.com/zeit/now-examples).

### [실습 방법](https://zeit.co/blog/serverless-docker#walkthrough)

#### [Serverless Node.js Functions](https://zeit.co/blog/serverless-docker#serverless-node.js-functions)

`micro`를 이용해 간단한 HTTP 서비스 함수를 배포 해봅시다:

![](https://cdn-images-1.medium.com/max/1600/0*PBNCCGfFVAn1_Cec.gif)

> `npm ci`로 빌드된 [node-function.now.sh](https://node-function.now.sh)을 통해 액세스 할 수
> 있는 간단한 function입니다.

여기서 일어나는 일들입니다:

- 클라우드와는 다른 우리의 로컬 파일 시스템 배포가 만들어집니다.
- A simple `Dockerfile` is used to hold the instructions to build the project
- 간단한 `Dockerfile`은 프로젝트 빌드 지침을 보관하기 위해 사용됩니다.
- Node.js version(`10`)과 package manager(`npm ci`)의 자체 설정으로 빌드합니다.
- `index.js` 파일은 메인 함수가 들어가있습니다.
- 이 serverless container는 125CPUs와 512MB 메모리로 제한됩니다.
- DNS 조회+ TLS handshake + Cold Boot + 전체왕복까지 일어나는데 600ms~입니다.
- Once the deployment instance is warm, subsequent requests take 100ms~
- 일단 배포 인스턴스가 가동되었다면, 이후 요청은 100ms~입니다.

이 작업을 수행하기 위한 요구사항은 오직 당신의 now.json에서 기능 플래그를 통해 베타를 활성화 하는 것입니다:

#### [Serverless Go + Websockets](https://zeit.co/blog/serverless-docker#serverless-go-+-websockets)

이 기술의 능력을 조금 더 깊숙히 알아봅시다. 다음 예제는 Docker registry에서 Go로 작성된 이미지를 가져옵니다.

![](https://cdn-images-1.medium.com/max/1600/0*xp5_bWGbCwEHsNj2.gif)

> HTTP/2.0과 웹소켓을 사용하는 Serverless shell은
> [terminal.now.sh](https://terminal.now.sh/)에서 사용가능합니다.

이 데모의 주요사항:

- 공개 Docker registry에서 변경되지 않은 `Dockerfile` 사용
- 다른 프로그래밍 언어와 런타임: Go
- 파일 시스템을 검사할 수 있는 우리의 능력으로 입증된 일시적인 상태 유지 - 5분(기본시간) 이후, 상태는 재활용됩니다.
- 500ms 미만의 Cold 왕복. Go는 거대한 어플리케이션이지만 더 나은 시작 성능을 보여줍니다.(이 예제에서는 일반적으로 400~500ms)
- 이 서비스는 초기화된 HTML를 제공하는 HTTP 요청에 응답합니다. 그리고 WebSocket 연결을 통해 PTY 데이터를 교환합니다.

#### [Serverless Rust(Global)](<https://zeit.co/blog/serverless-docker#serverless-rust-(global)>)

이 인프라는 [Global Now](https://zeit.co/blog/multi-dc)와 합쳐져 매우 잘 작동합니다. 다시 말해, 모든
Global locations에 serverless하게 배포하는데 하나의 플래그만 있으면 됩니다.

여기 Rust + Hyper 배포 예제가 있습니다:

![](https://cdn-images-1.medium.com/max/1600/0*wbO50Isx0jTJfIqV.gif)

> [rust-http-microservice-v2.now.sh](https://rust-http-microservice-v2.now.sh), 모든
> 지역에서 즉시 사용할 수 있는 Rust 마이크로서비스

이것은 나머지 예제들과 비슷하지만, 우리는 `now --regions all`을 실행하는 것으로 처음부터 모든 지역에 바로 확장되었습니다.

이것은 또한 다음을 실행하여 이미 배포된 후에도 확장할 수 있습니다:

#### [Automatic Horizontal Scalability(자동 수평 확장성)](https://zeit.co/blog/serverless-docker#automatic-horizontal-scalability)

(정의하는 경계 안에서)당신이 정의한 파라매터로 자동 확장하는 이 시스템의 능력을 강조하기 위해서, 여기 `wrk`(load-testing
tool)로 [stress test](https://ko.wikipedia.org/wiki/ì¤í¸ë ì¤_íì¤í¸)를 위한
예제가 있습니다.

![](https://cdn-images-1.medium.com/max/1600/0*mZOfNFEEqPGYaDRT.gif)

> 즉각적이고 예측 가능한 수평적 확장성

이 것은(우리 생각에) Serverless 배포의 가장 중요한 특징을 정의합니다. 하지만, 우리가 다음을 보게 되는 것만은 아닙니다.(>
무슨말이죠..?)

### [Serverless 컴퓨팅의 원리](https://zeit.co/blog/serverless-docker#principles-of-serverless-computing)

We selected these demos in particular to underline a very important point. We
think Serverless can be a very general computing model. One that does not
require new protocols, new APIs and can support every programming language and
framework without large rewrites.

우리는

Here are three of the underlying ideas behind this new architecture.

#### [1. Focus on Code, Not Infrastructure](https://zeit.co/blog/serverless-docker#1.-focus-on-code,-not-infrastructure)

Serverless enables engineers to focus on code rather than managing servers, VMs,
registries, clusters, load balancers, availability zones, and so on.

This, in turn, allows you to define your engineering workflow solely around
source control and its associated tools (like pull requests). [Our recent GitHub
integration](https://zeit.co/github), therefore, makes it possible to deploy a
Docker container in the cloud solely by creating a `Dockerfile`.

It is not sufficient to _ignore that the infrastructure is there_, or forget
about it. The execution model must make it so that manual intervention,
inspection, replication, and monitoring or alert-based uptime assurance is
completely unnecessary, which takes us to our next two points.

[What Are the Benefits?](https://zeit.co/blog/serverless-docker#what-are-the-benefits)

When we deployed the examples above, we didn’t have to deal with:

- Clusters or federations of clusters
- Build nodes or build farms
- Container registries and authentication
- Container image storage, garbage collection and distributed caching

#### [2. Deployments Should Self-Heal](https://zeit.co/blog/serverless-docker#2.-deployments-should-self-heal)

A very common category of failure of software applications is associated with
failures that occur after programs get into states that the developers didn’t
anticipate, usually arising after many _cycles_.

In other words, programs can fail unexpectedly from accumulating state over a
long lifespan of operation. Perhaps the most common example of this is a memory
leak: the unanticipated growth of irreclaimable memory that ultimately concludes
in a faulty application.

Serverless means never having to “try turning it off and back on again”

Serverless models completely remove this category of issues, ensuring that no
request goes unserviced during the recycling, upgrading or scaling of an
application, even when it encounters runtime errors.

[How Does Now Ensure This?](https://zeit.co/blog/serverless-docker#how-does-now-ensure-this)

Your deployment instances are constantly recycling and rotating. Because of the
request-driven nature of scheduling execution, combined with limits such as
maximum execution length, you avoid many common operational errors completely.

#### [3. Deployments Should Automatically and Predictably Scale](https://zeit.co/blog/serverless-docker#3.-deployments-should-automatically-and-predictably-scale)

Perhaps the most important or appealing aspect of the serverless paradigm is the
promise of _automatic scalability_.

In its most basic form, a function automatically scales with a 1:1 mapping of
requests to resource allocations. A request comes in, a new function is
provisioned or an existing one is re-used.

We have taken this a step further, by allowing you to customize the concurrency
your process can handle.

### [Technical Details](https://zeit.co/blog/serverless-docker#technical-details)

This new infrastructure is already available to Docker deployments made in the
free tier, or for paying subscriptions that opt-into the feature via `now.json`:

Please ensure that your [Now CLI](https://zeit.co/download#now-cli) is up to
date, or deploy directly via our [GitHub integration](https://zeit.co/github) or
[API](https://zeit.co/api).

#### [Limits](https://zeit.co/blog/serverless-docker#limits)

[Hard Limits](https://zeit.co/blog/serverless-docker#hard-limits)

These limits are fixed. They are subject to change once the feature goes into
General Availability.

- A maximum of `3` concurrent deployment instances for OSS
- A maximum of `10` concurrent deployment instances per subscription
- A maximum of `500` concurrent requests/connections across deployments per
  subscription

[Soft Limits](https://zeit.co/blog/serverless-docker#soft-limits)

These limits are configurable in `now.json` as part of a `limits` object.

- `maxConcurrentReqs` max concurrency of each process (min `1`, max `256`, default
  `10`)
- `duration` max amount of time in ms your process can run (min/default 5 minutes,
  max 30 minutes)
- `timeout` how long in _ms_ to wait after the last request to downscale
  (min/default 1 minute, max 30 minutes)

#### [Pricing](https://zeit.co/blog/serverless-docker#pricing)

While in beta, we require a paid subscription to be able to go over the maximum
of `3` concurrent deployment instances. Current rates apply and are subject to
change.

### [Next up: Faster, More Capable, Smaller](https://zeit.co/blog/serverless-docker#next-up:-faster,-more-capable,-smaller)

#### [Faster Cold Start](https://zeit.co/blog/serverless-docker#faster-cold-start)

Despite having so dramatically sped up instantiation times, we still have very
significant room for improvement.

We are excited about unveiling some of these over the coming weeks before the
new infrastructure goes into General Availability.

#### [Additional](https://zeit.co/blog/serverless-docker#additionalslotconfigurations)`slot`[Configurations](https://zeit.co/blog/serverless-docker#additionalslotconfigurations)

We will introduce new `slot` identifiers so that you can fit your applications
into other CPU/memory combinations.

This is important for resource-intensive applications.

#### [Smaller Images](https://zeit.co/blog/serverless-docker#smaller-images)

When your code is built, we post-process the resulting snapshot and let you know
what the total size is.

We are confident that in its present form, our system can fit the vast majority
of our customers’ workloads without any issues.

However, we are currently developing improvements to optimize this dimension
further, without you having to make any changes.

### [결론](https://zeit.co/blog/serverless-docker#conclusions)

이 베타 버전은 지난 2년동안 수백만 건의 배포를 완료한 대규모 배포와 다양한 사용자 기반의 교훈과 경험이 포함되어 있습니다.

시작하기 위해서, 이 릴리즈에서 함께 제공한 종합 예제 목록을 참고하시는 것을 제안합니다.

이후 몇 주 동안, 우리는 새로운 제품에 대한 더 자세한 기사와 문서를 공유 할 것입니다.

이 기간 동안 당신의 의견은 중요합니다. 제발 저희에게 얼마나 잘 작동하는지 [알려주세요.](https://zeit.co/chat)
