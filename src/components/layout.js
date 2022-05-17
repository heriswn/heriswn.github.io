import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Footer from "./footer"

import "../styles/style.css"
import "../styles/light-theme.css"
import "../styles/third-theme.css"

function setDarkTheme(setTheme) {
  localStorage.setItem("theme", "dark")
  setTheme("dark")
  document.body.style.backgroundColor = "#252525"
}

function setLightTheme(setTheme) {
  localStorage.setItem("theme", "light")
  setTheme("light")
  document.body.style.backgroundColor = "white"
}

function setThirdTheme(setTheme) {
  localStorage.setItem("theme", "third")
  setTheme("third")
  document.body.style.backgroundColor = "#f1e2c0"
}

function getMainClass(theme) {
  let classString = theme
  return classString
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [theme, setTheme] = useState("dark")
  let header

  const onUpdateTheme = theme => {
    if (theme === "dark") {
      setThirdTheme(setTheme)
    } else if (theme === "light") {
      setDarkTheme(setTheme)
    } else if (theme === "third") {
      setLightTheme(setTheme)
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "dark") setDarkTheme(setTheme)
    if (savedTheme === "third") setThirdTheme(setTheme)
    if (savedTheme === "light") setLightTheme(setTheme)
  }, [])

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
    <div className={`${getMainClass(theme)} global-wrapper`} data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Footer onUpdateTheme={() => onUpdateTheme(theme)} theme={theme} />
    </div>
  )
}

export default Layout