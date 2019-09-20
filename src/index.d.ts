declare module "react-body-classname" {
  export default function(props: { className: string }): JSX.Element
}

declare module "*.jpg"
declare module "*.png"

declare module "gatsby-plugin-disqus" {
  export interface DisqusConfig {
    url: string
    identifier: string
    title: string
  }
  export function Disqus(props: { config: DisqusConfig }): any
  export function CommentCount(props: {
    config: DisqusConfig
    placeholder: string
  }): any
}

declare type Children = string | number | JSX.Element | JSX.Element[]
