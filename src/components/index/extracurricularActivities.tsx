import React from "react"
import Max960 from "../styled/Max960"
import MediaBox from "./components/mediaBox"
import IconLabel from "./components/IconLabel"

export default function ExtracurricularActivities() {
  return (
    <article id="extracurricularActivities" className="section">
      <Max960 className="container is-margin-center">
        <h1 className="title has-text-dark">Extracurricular Activities</h1>
        <MediaBox imageSrc="https://avatars3.githubusercontent.com/u/40321838?s=200&v=4">
          <h4>AUSG</h4>
          <IconLabel iconName="far fa-calendar-alt" isFull>2018.09 ~</IconLabel>
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
          <div className="tags">
            <span className="tag">AWS</span>
            <span className="tag">EC2</span>
            <span className="tag">ECS</span>
            <span className="tag">Route53</span>
            <span className="tag">Lambda</span>
            <span className="tag">API Gateway</span>
          </div>
        </MediaBox>
      </Max960>
    </article>
  )
}
