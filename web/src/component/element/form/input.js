import React, { Fragment, useState, useEffect } from 'react'

const Input = ({ label, type: initialType = 'text', peek = true, icon, onChange, value = '' }) => {
  const [ type, setType ] = useState(initialType)
  const isPeek = initialType == 'password' && peek

  // useEffect(() => setIsEmpty(value === ''), [ value ])
  const togglePeek = () => (type === 'password' ? setType('text') : setType('password'))

  const optClass = []

  if (icon) optClass.push('input-icon')
  if (isPeek) optClass.push('input-peek')

  return (
    <Fragment>
      <label className='lebel-input'>
        <div className='txt'>Name</div>
        {icon && <i className='material-icons icon'>{icon}</i>}
        <input type={type} className={`input ${optClass.join(' ')}`} placeholder='i.e. Whatever' />
      </label>
    </Fragment>
  )
}

export default Input
