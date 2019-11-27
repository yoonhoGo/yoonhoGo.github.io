import React, { useState } from "react"
import Helmet from "react-helmet"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Profile from "../components/profile"
import { SiteSiteMetadataSocialUsernames } from "../graphqlTypes"
import styled from "styled-components"
import { Link } from "gatsby"

const CallingCardPage = () => {
  const siteMetadata = useSiteMetadata()
  const { defaultImage: avatarUrl, socialUsernames } = siteMetadata.site
    .siteMetadata as {
    defaultImage: string
    socialUsernames: SiteSiteMetadataSocialUsernames
  }

  const [vCardQRCodeModal, setVCardQRCodeModal] = useState(false)

  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/6fbc6fe058.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <main>
        <FullHeight>
          <HeadSection className="animated fadeInDown">
            <h1 className="title">Hello,</h1>
            <h2 className="subtitle">I'm "Yoonho Ko"</h2>
          </HeadSection>

          <BodySection
            className="animated fadeInDown delay-1s"
            style={{ margin: "0 auto" }}
          >
            <Profile
              profilePhotoSrc={avatarUrl as string}
              smallIconLabels={[
                {
                  iconName: "fab fa-github",
                  label: "@" + socialUsernames.github,
                  href: "https://github.com/" + socialUsernames.github,
                },
                {
                  iconName: "fab fa-instagram",
                  label: "@" + socialUsernames.instagram,
                  href:
                    "https://www.instagram.com/" + socialUsernames.instagram,
                },
                {
                  iconName: "fab fa-twitter",
                  label: "@" + socialUsernames.twitter,
                  href: "https://www.twitter.com/" + socialUsernames.twitter,
                },
                {
                  iconName: "fas fa-at",
                  label: socialUsernames.email || "",
                  href: "mailto:" + socialUsernames.email,
                },
              ]}
            />
          </BodySection>

          <FootSection>
            <Link to="/">
              <button className="button is-warning is-light is-fullwidth">
                Go to Homepage
              </button>
            </Link>

            <div className="field has-addons">
              <p className="control is-fullwidth">
                {/* <a href="/yoonhoGo.vcf">
                </a> */}

                <button className="button is-warning is-light">
                  Add your contacts
                </button>
              </p>
              <p className="control">
                <button
                  className="button is-success is-light"
                  onClick={() => setVCardQRCodeModal(true)}
                >
                  <span className="icon is-small">
                    <i className="fas fa-qrcode"></i>
                  </span>
                </button>
              </p>
            </div>
          </FootSection>

          <div className={"modal" + (vCardQRCodeModal ? " is-active" : "")}>
            <div
              className="modal-background"
              onClick={() => setVCardQRCodeModal(false)}
            ></div>
            <div className="modal-content">hi</div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={() => setVCardQRCodeModal(false)}
            ></button>
          </div>
        </FullHeight>
      </main>
    </>
  )
}

export default CallingCardPage

const FullHeight = styled.article`
  height: 100vh;
  background-color: hsl(48, 100%, 67%);
  display: flex;
  flex-wrap: wrap;
`

const HeadSection = styled.section`
  padding: 1em 1.5rem;
  width: 100%;
`

const BodySection = styled.section`
  padding: 1em 1.5rem;
`

const FootSection = styled.section`
  width: 100%;
  padding: 1em 1.5rem;
  align-self: flex-end;
`
