/* eslint-disable react-hooks/exhaustive-deps */
import 'animate.css'
import React from 'react'
import styled from 'styled-components'
import { useFetchGif } from '../hooks/useFetchGif'
import { ItemCategory } from './ItemCategory'

export const Category = ({ name }) => {
  const [items, loading] = useFetchGif(name)
  console.log(loading)
  return (
    <ContainerCategories className='container-categories'>
      <h2 className='animate__animated animate__swing'>{name}</h2>
      {loading ? (
        'loading...'
      ) : (
        <ContainerItemsCategories className='animate__animated animate__backInUp'>
          {items.map(item => (
            <ItemCategory key={item.name} {...item} />
          ))}
        </ContainerItemsCategories>
      )}
    </ContainerCategories>
  )
}

const ContainerCategories = styled.div`
  margin: 2em 0;
`
const ContainerItemsCategories = styled.div`
  display: flex;
  height: 450px;
  justify-content: space-between;
  gap: 5px;
  flex-wrap: wrap;
`
