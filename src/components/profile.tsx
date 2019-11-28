import React from "react"
import styled from "styled-components"
import IconLabel from "./IconLabel"
import InnerItemsCenter from "./styled/InnerItemsCenter"

const ProfilePhotho = styled.img`
  /* margin: 0.5em; */
  border-radius: 0.75rem;
`

export interface IProfile {
  profilePhotoSrc: string
  smallIconLabels?: Array<{
    iconName: string
    label: string
    href?: string
  }>
}

export function Profile({ profilePhotoSrc, smallIconLabels }: IProfile) {
  return (
    <>
      <InnerItemsCenter>
        <figure className="image">
          <ProfilePhotho src={profilePhotoSrc} />
        </figure>
      </InnerItemsCenter>
      {smallIconLabels && (
        <span>
          {smallIconLabels.map(({ iconName, label, href }, index) => (
            <React.Fragment key={index}>
              <IconLabel iconName={iconName} href={href} isFull>
                {label}
              </IconLabel>
            </React.Fragment>
          ))}
        </span>
      )}
    </>
  )
}

export default Profile
