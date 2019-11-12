import React from "react"

import "./style.css"

export default ({ name, image, ability }) => (
    <div className="Pokemon__card" >
        <h2 className="Pokemon__name">{name}</h2>
        <img className="Pokemon__image" src={image} alt='' width="96" height="96" />
        <div className="Pokemon__ability">
            <div className="Pokemon__ability-title">
                Ability:
                 </div>
            <p className="Pokemon__ability-name"> {ability} </p>
        </div>
    </div>
)