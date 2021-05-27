import React from 'react'
import "./SearchContainer.css"

function SearchContainer(props) {
    return (
        <div className="search__contaniner">
            <img src={props.image}/>
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
        </div>
    )
}

export default SearchContainer
