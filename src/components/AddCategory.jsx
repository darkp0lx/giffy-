import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  const [name, setName] = useState('')

  const handleSaveOnHeros = e => {
    e.preventDefault()
    setCategories(categories => [...categories, { name }])
    setName('')
    alert('Heroe agregado')
  }

  const changeInputHero = e => {
    setName(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSaveOnHeros}>
        <input
          placeholder='nombre'
          value={name}
          onChange={changeInputHero}
          type='text'
          className='input-hero'
        />
      </form>
    </div>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
