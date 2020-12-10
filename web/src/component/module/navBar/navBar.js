import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './navBar.css'

import { WidgetBar, Widget, WHeader } from '../../layout/widgetBar/widgetBar'

const navBar = ({ navigations = [] }) => {
  return (
    <Fragment>
      {navigations.map(({ isLabel, link, name, icon }) => {
        if (isLabel) return <div>{name}</div>
        else
          return (
            <div key={link} as={NavLink} to={link}>
              <i className='material-icons'>{icon}</i>
              {name}
            </div>
          )
      })}
    </Fragment>
  )
}

export default navBar
