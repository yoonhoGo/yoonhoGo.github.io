import React from "react"
import IconLabel from "../IconLabel"
import MediaBox from "../mediaBox"
import SimpleTags from "../simpleTags"

export default function Experiences(props: { id?: string }) {
  return (
    <section id="experience" className="section">
      <div className="container is-desktop is-margin-center">
        <h1 className="title">Work Experience</h1>
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
          <SimpleTags
            tags={[
              "AWS",
              "Typescript",
              "Serverless",
              "GraphQL",
              "OAuth 2.0",
              "Apollo",
              "Node.js",
              "Prisma",
            ]}
          />
        </MediaBox>
        <MediaBox>
          <h4>대한민국 공군</h4>
          <IconLabel iconName="far fa-calendar-alt" isFull>
            2014.06.23 ~ 2016.06.22(만기 전역)
          </IconLabel>
          <IconLabel iconName="far fas fa-user-tie" isFull>
            정보보호병
          </IconLabel>
          <p>
            대한민국 공군에 정보보호병 지정 특기를 받아 복무를 마쳤습니다.
            부대에서 다양한 정보보호시스템과 서버실과 서버 운영 등을
            담당했습니다. 2년동안 공군에서 개최하는 정보보호대회에 참여하였으며,
            정보보호 프로그래밍 공모전에서 패스워드 관리 프로그램을 제작하여
            수상하였습니다.
          </p>
          <SimpleTags tags={["Information Security", "Security", "Server"]} />
        </MediaBox>
      </div>
    </section>
  )
}
