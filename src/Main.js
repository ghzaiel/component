import React from 'react'

import Nav from "./profile/Nav"
import Adresse from "./profile/Address"
import Photo from "./profile/ProfilPhoto"
import Name from "./profile/FullName"
import Footer from "./profile/footer"

export default function Maiin() {
    return (
        <div>
             <Nav/>
      <Photo/>

      <Name/>
      <Adresse/>
      <Footer/>
        </div>
    )
}
