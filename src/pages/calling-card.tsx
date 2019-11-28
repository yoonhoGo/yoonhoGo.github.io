import { Link, graphql, StaticQuery } from "gatsby"
import QRCode from "qrcode.react"
import React, { useState } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Profile from "../components/profile"
import {
  SiteSiteMetadataSocialUsernames,
  SiteSiteMetadata,
} from "../graphqlTypes"
import vCard from "../components/calling-card/vCard"
import { useModal } from "../components/modal"

const CallingCardPage = () => {
  const siteMetadata = useSiteMetadata()
  const { siteUrl, defaultImage: avatarUrl, socialUsernames } = siteMetadata
    .site.siteMetadata as SiteSiteMetadata & {
    siteUrl: string
    defaultImage: string
    socialUsernames: SiteSiteMetadataSocialUsernames
  }

  const [openPageQRCodeModal, PageQRCodeModal] = useModal()
  const [openVCardQRCodeModal, VCardQRCodeModal] = useModal()

  const sns = [
    {
      iconName: "fab fa-github",
      label: "@" + socialUsernames.github,
      href: "https://github.com/" + socialUsernames.github,
    },
    {
      iconName: "fab fa-instagram",
      label: "@" + socialUsernames.instagram,
      href: "https://www.instagram.com/" + socialUsernames.instagram,
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
  ]

  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/6fbc6fe058.js"
          crossOrigin="anonymous"
        ></script>
        <style>
          {`
          html {
            background-color: hsl(48, 100%, 67%);
          }
          `}
        </style>
      </Helmet>
      <main
        style={{
          backgroundColor: "hsl(48, 100%, 67%)",
          overflow: "scroll",
        }}
      >
        <FullHeight>
          <HeadSection className="animated fadeInDown">
            <h1 className="title">Hello,</h1>
            <h2 className="subtitle">I'm "Yoonho Ko"</h2>
          </HeadSection>

          <BodySection
            className="animated fadeInDown delay-1s"
            style={{ margin: "0 auto" }}
          >
            <ProfileFigure className="image is-256x256">
              <img
                src={avatarUrl}
                style={{
                  borderRadius: "1rem",
                }}
              />
            </ProfileFigure>
            <div>
              {sns.map(({ iconName, label, href }, index) => (
                <a key={index} href={href}>
                  <h1 className="is-size-5 has-text-grey-dark">
                    <span className="icon is-small">
                      <li className={iconName}></li>
                    </span>
                    <span> {label}</span>
                  </h1>
                </a>
              ))}
            </div>
          </BodySection>

          <FootSection>
            <div className="field has-addons" style={{ margin: "0.25em" }}>
              <p className="control is-expanded">
                <Link to="/">
                  <button className="button is-warning is-light is-fullwidth">
                    <span className="icon is-small">
                      <i className="fas fa-home"></i>
                    </span>
                    <span>Visit Homepage</span>
                  </button>
                </Link>
              </p>
              <p className="control">
                <button
                  className="button is-success is-light"
                  onClick={openPageQRCodeModal}
                >
                  <span className="icon is-small">
                    <i className="fas fa-qrcode"></i>
                  </span>
                </button>
              </p>
            </div>

            <div className="field has-addons" style={{ margin: "0.25em" }}>
              <p className="control is-expanded">
                <a href="/yoonhoGo.vcf">
                  <button className="button is-warning is-light is-fullwidth">
                    <span className="icon is-small">
                      <i className="far fa-address-book"></i>
                    </span>
                    <span>Add your contacts</span>
                  </button>
                </a>
              </p>
              <p className="control">
                <button
                  className="button is-success is-light"
                  onClick={openVCardQRCodeModal}
                >
                  <span className="icon is-small">
                    <i className="fas fa-qrcode"></i>
                  </span>
                </button>
              </p>
            </div>
          </FootSection>

          <PageQRCodeModal>
            <FlexBox>
              <h1 className="title has-text-warning">This page</h1>
              <QRCodeBox>
                <QRCode
                  value={siteUrl + "/calling-card"}
                  includeMargin
                  bgColor="hsl(48, 100%, 67%)"
                />
              </QRCodeBox>
            </FlexBox>
          </PageQRCodeModal>

          <VCardQRCodeModal>
            <FlexBox>
              <h1 className="title has-text-warning">Contact</h1>
              <QRCodeBox>
                <QRCode
                  value={vCard}
                  includeMargin
                  bgColor="hsl(48, 100%, 67%)"
                />
              </QRCodeBox>
            </FlexBox>
          </VCardQRCodeModal>
        </FullHeight>
      </main>
    </>
  )
}

export default CallingCardPage

const FullHeight = styled.article`
  height: 100vh;
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

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const QRCodeBox = styled.div`
  padding: 1em;
  border: 1em solid hsl(48, 100%, 67%);
  display: inline-block;
`

const ProfileFigure = styled.figure`
  padding: 1em;
`