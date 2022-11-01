import React from 'react'
import SectionsLanding from "../Components/Landings/SectionsLanding/SectionsLanding"
import ResiduosTexto from '../Components/Residuos/ResiduosTexto'

const serviciosResiduos = () => {
  return (
    <>
      <SectionsLanding title="Gestión de residuos" bgImage={"/assets/serviceResiduos.webp"}/>
      <ResiduosTexto />
    </>
  )
}

export default serviciosResiduos