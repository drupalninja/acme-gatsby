import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./style.scss"

const Button = button => {
  const href = button.uri ? button.uri.replace(/^internal:/, "") : ""
  const info = button.info || button.title
  const Element = href ? "a" : "button"
  const buttonClasses = classNames(
    { button: Element === "button" },
    { [`${button.classes}`]: button.classes }
  )
  const onClickCallback = e => {
    if (typeof button.onClick === "function") {
      e.preventDefault()
      button.onClick(e)
    }
  }

  return (
    <Element
      className={buttonClasses}
      href={href}
      title={info}
      aria-label={info}
      onClick={onClickCallback}
    >
      <span className="button-text">{button.title}</span>
    </Element>
  )
}

Button.propTypes = {
  /** Custom click handler function. */
  onClick: PropTypes.func,
  /** When populated with a url, this component renders a <a> vs a <button> */
  uri: PropTypes.string,
  /** The text which renders in the standard browser tooltip on hover */
  info: PropTypes.string,
  /** Button or link text */
  title: PropTypes.string,
  /** Extra classes. Note: the prefix of `button--` will be appended. */
  classes: PropTypes.string,
}

export default Button
