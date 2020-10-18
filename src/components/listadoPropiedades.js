import React, { useState, useEffect } from "react"
import usePropiedades from "../hooks/usePropiedades"
import { css } from "@emotion/core"
import PropiedadPreview from "./propiedadPreview"

const ListadoPropiedades = () => {
  const resultado = usePropiedades()
  const [propiedades, guardarPropiedades] = useState([])

  console.log(resultado)
  useEffect( () => {
    guardarPropiedades(resultado);
  },[])


  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h2>
      <ul>
        {propiedades.map (propiedad => (
          <PropiedadPreview 
            key={propiedad.id}
            propiedad={propiedad}
          />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
