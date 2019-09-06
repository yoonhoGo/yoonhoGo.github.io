import React from "react"
import IconLabel from "./components/IconLabel"
import MediaBox from "./components/mediaBox"
import Max960 from "../styled/Max960"

export default function Experiences(props: { id?: string }) {
  return (
    <article id="experience" className="section">
      <Max960 className="container is-margin-center">
        <h1 className="title has-text-dark">Work Experience</h1>
        <MediaBox imageSrc="https://avatars3.githubusercontent.com/u/39777767?s=200&v=4">
          <h4>Erion Co., Ltd. (Seoul)</h4>
          <IconLabel iconName="far fa-calendar-alt" isFull>
            2017.11.01 ~ 2018.07.31
          </IconLabel>
          <IconLabel iconName="far fas fa-user-tie" isFull>
            CISO & Lead Backend Engineer
          </IconLabel>
          <p>
            스타트업 이리온컴퍼니에서 CISO 및 Lead Backend Engineer로 약 1년
            10개월 근무했습니다.
            <br />
            첫 영입 멤버로서 적은 지분이지만 스톡옵션을 받아 이사로 회사 경영에
            일부 참여했으며, 개발팀 PM으로서 개발팀의 스케줄과 제품 퀄리티를
            조율했습니다.
            <br />
            AWS를 이용하여 Serverless GraphQL API와 OAuth 2.0을 구현한 인증
            서버를 운용하였고, 그 외에도 사내 소규모 프로젝트에서도 최신
            트렌드에 발맞춰 개발 효율을 중점으로 작업했습니다.
          </p>
          <div className="tags">
            <span className="tag">AWS</span>
            <span className="tag">Typescript</span>
            <span className="tag">Serverless</span>
            <span className="tag">GraphQL</span>
            <span className="tag">OAuth 2.0</span>
            <span className="tag">Apollo</span>
            <span className="tag">Node.js</span>
            <span className="tag">Prisma</span>
          </div>
        </MediaBox>
      </Max960>
    </article>
  )
}
