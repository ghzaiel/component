import React from 'react'
import IMG from "../profile/profil.jpg"
import './Adress.css';

export default function ProfilPhoto() {
    return (
        <div className="name">
            <img src={IMG} alt="profile" />
        </div>
    )
}
