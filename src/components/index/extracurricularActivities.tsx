import React from "react"
import MediaBox from "../mediaBox"
import IconLabel from "../IconLabel"
import SimpleTags from "../simpleTags"
import HUBLogo from "../../images/hub logo.jpg"

export default function ExtracurricularActivities() {
  return (
    <section id="extracurricularActivities" className="section">
      <div className="container is-desktop is-margin-center">
        <h1 className="title">Extracurricular Activities</h1>
        <MediaBox imageSrc="https://avatars3.githubusercontent.com/u/40321838?s=200&v=4">
          <h4>AUSG</h4>
          <IconLabel iconName="far fa-calendar-alt" isFull>
            2018.09 ~
          </IconLabel>
          <IconLabel iconName="far fas fa-user-tie" isFull>
            The 2nd batch of Members
          </IconLabel>
          <p>
            AWSKRUG의 소속의 AUSG라는 그룹에서 활동하고 있습니다.
            <br />
            AWSKRUG(한국사용자모임)는 국내 최대 규모 개발자 커뮤니티 풀로써
            다양한 직군의 개발자들이 모여 서로의 기술과 경험을 나누는
            모임입니다.
            <br />
            AUSG는 대학생들이 함께 모여 AWS와 개발 경험을 함께 공유하고 배우며
            전파하는 역할을 하고 있습니다.
            <br />
            올해 2월에는 일본 도쿄에서 열리는 JAWSDays에 참가했습니다. AWS의
            클라우드 컴퓨팅을 이용하여 다양한 세션을 발표했으며 적극적인 참여와
            기여를 인정받아 오는 12월에 미국 라스베가스에서 열리는 re:Invent
            행사에 참석하게 되었습니다.
          </p>
          <SimpleTags
            tags={["AWS", "EC2", "ECS", "Route53", "Lambda", "API Gateway"]}
          />
        </MediaBox>
        <MediaBox imageSrc={HUBLogo}>
          <h4>HUB</h4>
          <IconLabel iconName="far fa-calendar-alt" isFull>
            2012.03 ~ 2017
          </IconLabel>
          <p>
            HUB는 KUCIS에 속한 백석대학교 정보보호 동아리입니다.
            KUCIS(대학정보보호동아리연합회)는 KISA 소속의 전국 대학 정보보호
            동아리의 연합회입니다. HUB는 백석대에서 유일한 정보보호 동아리며
            활발한 활동으로 KUCIS에서 여러번 우수 동아리로 선정 되었습니다.
            <br />
            저는 2012년 신입생때부터 활동하여 다양한 스터디를 진행하였고, 여러번
            해킹대회에 참여했습니다. 또한 동아리 활동을 기반으로 공군에
            정보보호병으로 지정특기를 받아 입대하였습니다.
          </p>
          <SimpleTags
            tags={["Security", "Programming", "KUCIS", "KISA", "Hacking"]}
          />
        </MediaBox>
        <MediaBox>
          <h4>M++</h4>
          <IconLabel iconName="far fa-calendar-alt" isFull>
            2015.08 ~ 2016.06.22
          </IconLabel>
          <IconLabel iconName="far fas fa-user-tie" isFull>
            부회장(창립 멤버)
          </IconLabel>
          <p>
            M++은 대한민국 공군 00부대에서 창립한 프로그래밍 동아리입니다.
            프로그래밍에 관심 있는 병사들을 모아 만들었으며 전역하기까지 약 10개월의 기간동안
            다양한 스터디 그룹과 프로젝트를 개설하여 진행하였습니다.
            <br />
            대표 프로젝트: "Python 기초 프로그래밍" / "버끝업(버튼 하나로 끝나는 업무)" / "키위 위키(위키백과)" / "알파오(오목 AI)"...
          </p>
          <SimpleTags
            tags={["Programming", "Python", "Excel", "Visual Basic", "C/C++", "macro"]}
          />
        </MediaBox>
      </div>
    </section>
  )
}
