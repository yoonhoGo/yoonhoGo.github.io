import React from "react"
import SmallIconLabel from "./components/SmallIconLabel"
import Max960 from "../styled/Max960"

export default function Experiences(props: { id?: string }) {
  return (
    <article id="experience" className="section">
      <Max960 className="container is-margin-center">
        <h1 className="title has-text-dark">Work Experience</h1>
        <Experience imageSrc="https://avatars3.githubusercontent.com/u/39777767?s=200&v=4">
          <p>
            <strong>Erion Co., Ltd. (Seoul)</strong>
            <br />
            <SmallIconLabel iconName="far fa-calendar-alt">
              2017.11 ~ 2018.08
            </SmallIconLabel>
            <br />
            <SmallIconLabel iconName="far fas fa-user-tie">
              CISO & Lead Backend Engineer
            </SmallIconLabel>
            <br />
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
        </Experience>
        <Experience imageSrc="https://avatars3.githubusercontent.com/u/40321838?s=200&v=4">
          <p>
            <strong>AUSG</strong>
            <br />
            <SmallIconLabel iconName="far fa-calendar-alt">
              2018.09 ~
            </SmallIconLabel>
            <br />
            <SmallIconLabel iconName="far fas fa-user-tie">
              The 2nd batch of Members
            </SmallIconLabel>
            <br />
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
        </Experience>
      </Max960>
    </article>
  )
}

interface IExperienceBox {
  imageSrc: string
  children: JSX.Element | JSX.Element[]
}

function Experience({ imageSrc, children }: IExperienceBox) {
  return (
    <div className="box animated zoomIn slow delay-2s">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={imageSrc} alt="Erion Co., Ltd. (Seoul)" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">{children}</div>
        </div>
      </article>
    </div>
  )
}
