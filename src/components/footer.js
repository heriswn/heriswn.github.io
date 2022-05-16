import React from "react"

const Footer = ({ onUpdateTheme, theme }) => (
  <footer>
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
        <button onClick={onUpdateTheme}>
          <span>
            {theme === "dark" && "Dark"}
            {theme === "light" && "Light"}
            {theme === "third" && "Third"}
          </span>
        </button>
      </div>
    </div>
  </footer>
)

export default Footer