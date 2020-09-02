---
title: Anaconda Uninstall on macOS
author: yoonhoGo
author_url: https://github.com/yoonhoGo
author_image_url: https://avatars3.githubusercontent.com/u/6959851
author_title: Information Security, Python, Node.js, Typescript, AWS, Serverless, Container(Docker, Kubernetes), GraphQL, OAuth2.0. @witherion
date: 2018-08-19
slug: /2018-08-19/Anaconda-Uninstall-macOS
tags: ["macOS", "Anaconda", "Python"]
image: https://cdn-images-1.medium.com/max/1600/1*vTb29refTamA8FHbBc-Teg.png
---

제가 학교에 재학 중일 때는 개인적으로 파이썬을 자주 쓰기도 하고 프로젝트에서도 머신러닝이나 데이터 분석때 파이썬을 자주 쓰다보니 패키지 관리를 위해서나 호환성을 위해서나 아나콘다를 설치해서 쓰는 일이 잦았습니다.

그런데 회사에서 일을 할때는 주로 Node.js를 쓰고 있어서 최근 파이썬을 사용하는 일이 전무했습니다. 언젠간 쓰겠거니 싶어서 여태 신경 안쓰고 놔두고 있었는데 요즘 용량에 허덕이면서(128GB… 하핫) 과감히 삭제를 결심했습니다.

몇가지 글을 찾아보면서 삭제 방법을 찾아봤는데요. 앱을 이용하여 삭제하는 것과 수동으로 삭제 하는 방법 두가지를 소개합니다. 제일 정확한 방법은 아닐지 모르겠습니다만 찾아본 방법 중에 제일 단순하더군요.(사실 맥 사용 기간이 얼마 안된 것도 있습니다…)

<!--truncate-->

#### App Cleaner

앱스토어에서 “[App Cleaner](https://itunes.apple.com/kr/app/app-cleaner-uninstaller/id1013897218?mt=12)”라는 앱을 받으면 Anaconda Navigator.app을 삭제할 수 있습니다. 이때 관련된 아나콘다 패키지들도 다 찾아주더라구요. 총 4.5GB의 결과물을 찾을 수 있었습니다. 개인적으로는 AppDelete보다 좋았습니다.(무료기도 하구요 ㅎ)

![App Cleaner 실행 화면](https://cdn-images-1.medium.com/max/1600/1*vTb29refTamA8FHbBc-Teg.png)

#### 직접 삭제

두번째 방법은 일일이 해당 경로를 삭제하는 것입니다. 위에 나타난 경로 그대로 삭제하면 될 것 같네요. 불안하시면 앱을 이용해주세요 ㅎㅎㅎ

```bash
$ rm -rf ~/anaconda3 ~/.conda ~/.anaconda ~/.condarc
$ rm ~/Library/Application Support/binstar/*anaconda*
$ rm ~/Library/Receipts/io.continuum.pkg.anaconda*
```

잘못된 내용이 있으면 댓글↓↓↓ 달아주세요😃

---

참고 링크입니다.

1. [Uninstall Anaconda on a Mac - Full Removal Guide](https://nektony.com/how-to/uninstall-anaconda-on-a-mac)
2. [‎Mac App Store에서 제공하는 Cleaner-App](https://itunes.apple.com/kr/app/app-cleaner-uninstaller/id1013897218?mt=12)
