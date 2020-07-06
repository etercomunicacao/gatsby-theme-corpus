import React from "react"

export const Paragraph = ({
  as, children
  }) => {
  switch (as) {
    case "strong":
      return <strong>{children}</strong>
    case "em":
      return <em>{children}</em>
    case "u":
      return <u>{children}</u>
    case "ul":
      return <ul>{children}</ul>
    case "ol":
      return <ol>{children}</ol>
    case "li":
      return <li>{children}</li>
    case "quote":
      return <blockquote>{children}</blockquote>
    case "hr":
      return <hr />
    default:
      return <p>{children}</p>
  }
}

export const H1 = ({ children }) => (
  <h1>{children}</h1>
)
export const H2 = ({ children }) => (
  <h2>{children}</h2>
)
export const H3 = ({ children }) => (
  <h3>{children}</h3>
)
export const H4 = ({ children }) => (
  <h4>{children}</h4>
)
export const H5 = ({ children }) => (
  <h5>{children}</h5>
)
export const H6 = ({ children }) => (
  <h6>{children}</h6>
)
