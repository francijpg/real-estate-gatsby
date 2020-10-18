import React from "react"
import usePropiedades from "../hooks/usePropiedades"
import { css } from '@emotion/core';

const ListadoPropiedades = () => {
  const resultado = usePropiedades()
  console.log(resultado)
  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h2>
    </>
  )
}

export default ListadoPropiedades
