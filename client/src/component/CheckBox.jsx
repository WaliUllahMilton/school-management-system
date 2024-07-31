import React from 'react'
import NavLink from './NavLink'
import PropTypes from 'prop-types'
export const CheckBox = ({name,value,onChange}) => {
  return (
    <NavLink className="justify-stretch gap-2 items-center font-roboto text-gray-600">
        <input
        name={name}
        value={value}
        onChange={onChange}
        id='checkbox'
        type="checkbox" />
        <label htmlFor='checkbox'>Remember me </label>
    </NavLink>
  )
}
CheckBox.propTypes = {
    name : PropTypes.string,
    value : PropTypes.bool,
    onChange : PropTypes.func
}
 