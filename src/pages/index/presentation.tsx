import React from "react"
import styled from "styled-components"

import Max960 from "../../components/styled/Max960"
import presentationImage from "./images/IMG_0133.jpg"

export default function Presentation(props: { id?: string }) {
  return (
    <StyledArticle id="presentations" className="section">
      <Max960 className="container is-margin-center">
        <div
          className="box"
          style={{
            opacity: 0.9,
          }}
        >
          <h1 className="title has-text-primary">Presentations</h1>
          <div className="timeline">
            <header className="timeline-header">
              <span className="tag is-medium is-primary">Today</span>
            </header>
            <div className="timeline-item">
              {/* <div className="timeline-marker"></div> */}
              <div className="timeline-marker is-image is-32x32">
                <img src="https://avatars3.githubusercontent.com/u/40321838?s=200&v=4" />
              </div>
              <div className="timeline-content">
                <TimeLineHead
                  when={"29, August 2019"}
                  where={"Amathon 사전 세션"}
                />
                <div className="content">
                  <h3>
                    <a href="https://github.com/yoonhoGo/2019-amathon-session">
                      클라우드 컨테이너 환경에서 Back-end API 구성하기 AtoZ
                    </a>
                  </h3>
                  <p>
                    AWS ECS를 통해 Container 환경에서 Back-end API(REST API와
                    GraphQL API)를 구성 배포하는 방법을 알아봅시다.
                    <br />
                    ECS에 EC2 기반의 컨테이너를 배치합니다. ECR을 이용해 커스텀
                    컨테이너를 배포합니다.
                  </p>
                </div>
                photos, links
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-image is-32x32">
                <img src="https://avatars3.githubusercontent.com/u/40321838?s=200&v=4" />
              </div>
              <div className="timeline-content">
                <TimeLineHead
                  when={"19, September 2018"}
                  where={"AUSG Hand-on 부스, AWS Univ. Expo"}
                />
                <div className="content">
                  <h3>
                    <a href="https://github.com/yoonhoGo/serverless-spa-portfolio/blob/master/README.md">
                      Node.js 서버리스 프레임웍을 사용하여 싱글페이지 포트폴리오
                      제작하기
                    </a>
                  </h3>
                  <p>
                    Serverless Framework를 이용하여 AWS Lambda와 API Gateway에
                    SPA(Single Page Portfolio) 포트폴리오를 배포해봅니다.
                    <br />
                    Express.js를 이용하여 HTML 파일을 서빙하고 API를 구성하여
                    DynamoDB에 연결합니다.
                  </p>
                </div>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2018</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-image is-32x32">
                <img src="https://avatars3.githubusercontent.com/u/40321838?s=200&v=4" />
              </div>
              <div className="timeline-content">
                <TimeLineHead
                  when={"19, September 2018"}
                  where={"AUSG, 2018 F/W 초보자를 위한 AWS 뿌시기 1회차"}
                />
                <div className="content">
                  <h3>
                    <a href="https://github.com/yoonhoGo/serverless-spa-portfolio/blob/master/README.md">
                      Node.js 서버리스 프레임웍을 사용하여 싱글페이지 포트폴리오
                      제작하기
                    </a>
                  </h3>
                  <p>
                    Serverless Framework를 이용하여 AWS Lambda와 API Gateway에
                    SPA(Single Page Portfolio) 포트폴리오를 배포해봅니다.
                    <br />
                    Express.js를 이용하여 HTML 파일을 서빙하고 API를 구성하여
                    DynamoDB에 연결합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <TimeLineHead
                  when={"12, July 2018"}
                  where={"AWSKRUG 서버리스 소모임"}
                />
                <div className="content">
                  <h3>
                    <a href="https://www.meetup.com/ko-KR/awskrug/events/252147208">
                      AWS Lambda 병렬 처리를 통한 PDF to Image 사용기
                    </a>
                  </h3>
                </div>
                <p>
                  회사에서 PDF로 나온 교재를 이미지로 변환해야하는 일이
                  있었는데요. 시중에 있는 툴은 모두 한 페이지씩 변환하기 때문에
                  오래걸리더라구요. 한 페이지에 대략 10~15초 정도가 걸렸기
                  때문에 100 페이지 이상 이루어지는 교재의 경우 권당 15분 이상씩
                  걸리는 경우가 허다했습니다.
                  <pre>
                    (10+@)초 + N페이지 = 파일당 변환
                    <br />
                    시간 파일당 변환시간 + 변환 요청 파일 수
                  </pre>
                  특히 나중에 도입될 변환 서비스에서 너무 과한 시간이 걸릴
                  것으로 판단해서 병렬처리를 도입하려고 하였습니다. 그런데
                  PC에서 병렬처리는 한계가 있기 때문에 AWS Lambda를 이용하기로
                  결정하였습니다...
                </p>
              </div>
            </div>
            <div className="timeline-header">
              <span className="tag is-medium is-primary">Start</span>
            </div>
          </div>
        </div>
      </Max960>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  background-image: url("${presentationImage}");
  background-size: cover;
  background-attachment: fixed;
`

function TimeLineHead({ when, where }: { when: string; where?: string }) {
  return (
    <p className="heading">
      <span className="icon">
        <i className="fas fa-calendar"></i>
      </span>
      {when}
      {where ? (
        <>
          {" / "}
          <span className="icon">
            <i className="fas fa-building"></i>
          </span>
          {where}
        </>
      ) : null}
    </p>
  )
}
