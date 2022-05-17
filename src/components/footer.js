import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ onUpdateTheme, theme }) => (
  <footer>
    <hr className="break-line" />
    <div className="footer">
      <div>
        <span>
          Powered by <a href="https://www.gatsbyjs.com">Gatsby</a>, Hosted by{" "}
          <a href="https://www.vercel.com">Vercel</a>.
        </span>
      </div>
      <div>
        <span>
          <a href="https://www.github.com/heriswn">© Heriswn</a>,{` `}
          All rights reserved.
        </span>
      </div>
      <div>
        <button onClick={onUpdateTheme} className="theme-switcher">
          <StaticImage
            layout="fixed"
            src="../assets/moon.png"
            width={20}
            height={20}
            alt="moon"
          />
        </button>
      </div>
    </div>
  </footer>
)

export default Footer