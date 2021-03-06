import React from "react"
import "./CardProfil.css"

const CardProfil = ({ link, nameProfil, onClick }) => {
  return (
    <div className=" col-3 card-profil align-middle " onClick={onClick}>
      <div className="select-img">
        <img src={link} height="120" alt="" />
      </div>
      <div className="name text-center ">
        <p>{nameProfil}</p>
      </div>
    </div>
  )
}

export default CardProfil
