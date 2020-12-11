import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { WidgetBar, Widget, WHeader } from '../../layout/widgetBar/widgetBar'

const navBar = ({ navigations = [] }) => {
  return (
    <Fragment>
      <div className='nav'>
        {navigations.map(({ link, name, icon }) => (
          <NavLink key={link} className='nav__btn' to={link} activeClassName='active'>
            <i className='material-icons'>{icon}</i>
            <div className='nav__btn__text'>{name}</div>
          </NavLink>
        ))}
      </div>
    </Fragment>
  )
}

export default navBar
