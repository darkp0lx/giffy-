import React from 'react'
import styled from 'styled-components'
export const ItemCategory = ({ id, image, title }) => {
  return (
    <ContainerItem>
      <h3>{title ? title : ''}</h3>
      <img src={image} alt={id} />
    </ContainerItem>
  )
}
const ContainerItem = styled.div`
  width: 300px;
  height: auto;
  border: 1px solid #ccc;
  h3 {
    height: 50px;
  }
  img {
    width: 100%;
    height: 350px;
  }
`
