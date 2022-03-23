import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import { AddCategory } from './components/AddCategory'
import { Category } from './components/Category'

function App () {
  const [categories, setCategories] = useState([])
  return (
    <div className='App'>
      <h1 className='titulo'>Bienvenido a Giffy</h1>
      <hr />
      <AddCategory setCategories={setCategories} />
      <div className='container'>
        <h2>Categorias</h2>
        <ContainerItems className='list-of-categories'>
          {categories.map(item => (
            <Category key={item} {...item} />
          ))}
        </ContainerItems>
      </div>
    </div>
  )
}

export default App
const ContainerItems = styled.ol`
  padding: 0;
  margin: 0;
`
