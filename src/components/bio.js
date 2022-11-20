import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        src="../assets/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by{" "}
          <a
            href="https://herisetiawan.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>{author.name}</strong>
          </a>{" "}
          {author?.summary || null}
          {` `}
          You should follow them on {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>Twitter</a>
        </p>
      )}
    </div>
  )
}

export default Bio
