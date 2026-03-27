import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <button onCLick={props.onClick}>
      {props.children}
    </button>
  )
}

Button.propTypes = {}

export default Button