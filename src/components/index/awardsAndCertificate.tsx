import React from "react"
import Max960 from "../styled/Max960"
import SmallIconLabel from "./components/SmallIconLabel"

export default function AwardsAndCertificate(props: { id?: string }) {
  return (
    <article id="awardsAndCertificate" className="section">
      <Max960 className="container is-margin-center">
        <h1 className="title has-text-primary">
          Skills Awards and Certificate
        </h1>
        <TypeDescription />
        <IconDescription />
        <div className="columns is-multiline">
          <One
            title="AWS Cloud Partitioner(trying)"
            issuer="aws certified"
            type="certificate"
          />
          <One title="CISA(yet)" issuer="ISACA" type="certificate" />
          <One
            title="실전형 사이버 훈련장(Security-Gym)[4차] / 수료증"
            issuer="한국인터넷진흥원"
            date={new Date("2017-08-11")}
            type="certificateOfACourse"
          />
          <One
            title="안드로이드 앱 취약점 진단 및 분석 2차 / 수료증"
            issuer="한국인터넷진흥원"
            date={new Date("2017-08-04")}
            type="certificateOfACourse"
          />
          <One
            title="프로그래밍 경진대회 / 은상"
            issuer="백석대학교 정보통신학부"
            date={new Date("2017-05-31")}
            type="award"
          />
          <One
            title="태권도 / 4단"
            issuer="국기원"
            date={new Date("2016-07-19")}
            type="certificate"
          />
          <One
            title="대학생 STARTUP / App 부문 대상"
            issuer="마이스타일 트렌드페어 2016"
            date={new Date("2016-11-10")}
            type="award"
          />
          <One
            title="우수논문상"
            issuer="(사)한국인터넷방송통신학회"
            date={new Date("2016-11-10")}
            type="award"
          />
          <One
            title="찾아가는 특허정보검색교육 / 수료증"
            issuer="백석대학교 창업보육센터"
            date={new Date("2014-04-18")}
            type="certificateOfACourse"
          />
          <One
            title="리눅스마스터 / 2급"
            issuer="KAIT(한국정보통신진흥협회)"
            date={new Date("2013-06-28")}
            type="certificate"
          />
          <One
            title="2013 동계 창업캠프 SNU Start-up / 우수팀상"
            issuer="서울대 경력개발센터&기술지주회사"
            date={new Date("2013-12-28")}
            type="award"
          />
          <One
            title="인성개발지도사 / 2급"
            issuer="인성개발원"
            date={new Date("2013-12-28")}
            type="certificate"
          />
          <One
            title="해킹보안전문가 / 3급"
            issuer="(사)한국해킹보안협회"
            date={new Date("2012-12-22")}
            type="certificate"
          />
          <One
            title="우수상"
            issuer="백석쿰인성개발원"
            date={new Date("2012-09-20")}
            type="award"
          />
        </div>
      </Max960>
    </article>
  )
}

function TypeDescription() {
  return (
    <div className="buttons">
      <span className="button is-warning">
        <span className="icon">
          <i className="fas fa-trophy"></i>
        </span>
        <span className="has-text-weight-bold">Awards</span>
      </span>
      <span className="button is-success">
        <span className="icon">
          <i className="fas fa-id-card"></i>
        </span>
        <span className="has-text-weight-bold">Certificate</span>
      </span>
      <span className="button is-info">
        <span className="icon">
          <i className="fas fa-certificate"></i>
        </span>
        <span className="has-text-weight-bold">A certificate of courses</span>
      </span>
      <span className="button has-text-grey-light has-text-weight-bold">
        Trying or Not yet
      </span>
    </div>
  )
}

function IconDescription() {
  return (
    <div className="buttons are-small">
      <span className="button">
        <span className="icon">
          <i className="fas fa-university"></i>
        </span>
        <span>인증기관</span>
      </span>
      <span className="button">
        <span className="icon">
          <i className="fas fa-calendar"></i>
        </span>
        <span>발급일</span>
      </span>
    </div>
  )
}

type CertificateType = "award" | "certificate" | "certificateOfACourse"
interface IOne {
  type: CertificateType
  title: string
  issuer: string
  date?: Date
  children?: JSX.Element
}

function One({ title, issuer, date, type, children }: IOne) {
  return (
    <div className="column is-4">
      <div className="card">
        <CardHeader type={type} yet={!Boolean(date)}>
          {title}
        </CardHeader>
        <div className="card-content">
          <SmallIconLabel iconName="fas fa-university" isFull>
            {issuer}
          </SmallIconLabel>
          {date && (
            <SmallIconLabel iconName="fas fa-calendar" isFull>
              {date.toDateString()}
            </SmallIconLabel>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

function CardHeader({
  type,
  yet,
  children,
}: {
  type: CertificateType
  yet?: boolean
  children: string
}) {
  let cardHeaderTitle = "card-header-title"
  cardHeaderTitle += yet
    ? " has-text-grey-light"
    : type === "award"
    ? " has-background-warning"
    : type === "certificateOfACourse"
    ? " has-background-info"
    : type === "certificate"
    ? " has-background-success"
    : ""
  const icon =
    type === "award"
      ? "fas fa-trophy"
      : type === "certificateOfACourse"
      ? "fas fa-certificate"
      : type === "certificate"
      ? "fas fa-id-card"
      : ""
  return (
    <div className="card-header">
      <div className={cardHeaderTitle}>
        <span className="icon" style={{ margin: "0 0.5em" }}>
          <i className={icon}></i>
        </span>
        <span>{children}</span>
      </div>
    </div>
  )
}
