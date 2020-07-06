import React from "react"

export function Link(data, children, type) {
  {
    type = "hyperlink" && (
      <a
        href={data}
        className={`${className} `}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
}

export function LinkResolver(data, children) {
  const referencedEntry = getEntryWithId(node.data.target.sys.id)

  return <a href={`/pages/${referencedEntry.fields.slug}`}>{children}</a>
}
