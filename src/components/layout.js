import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
      </div>
    )
  } else {
    header = (
      <div className="header-home">
        <div>
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        </div>
        <div className="header-home-category">
          <li>
            <Link to="/category/articles">Article</Link>
          </li>
          <li>
            <Link to="/category/trivia">Trivia</Link>
          </li>
        </div>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <hr className="break-line"/>
      <footer>
        <div className="footer">
          <div>
            <p>
              Powered by <a href="https://www.gatsbyjs.com">Gatsby</a>, Hosted
              by <a href="https://www.vercel.com">Vercel</a>.
            </p>
          </div>
          <div>
            <p>
              <a href="https://www.github.com/heriswn">© Heriswn</a>,{` `}
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout