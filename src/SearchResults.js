import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import apihandling from './apihandling'
import SearchContainer from './SearchContainer'
import "./SearchResults.css"
import {Row} from "react-bootstrap"

function SearchResults() {
    let {searchanime}=useParams()
    let data="";
    const [media, setMedia] = useState([])
    useEffect(async() => {
        data=await apihandling(searchanime)
        console.log(data.data.Page.media);
        const reqmedia=data.data.Page.media
        setMedia(reqmedia)
        //console.log(media.map((x)=>x.title.english))
        return () => {
            
        }
    }, [])
    return (
        <div className="search__results"> 
            <h1 style={{margin:"0"}}>{searchanime+"..."}</h1>
            <Row className="results">
            {media.map((x)=>(x.title.english && 
                <SearchContainer image={x.coverImage.large} title={x.title.english}
                    desc={String(x.description)}
                />
                ))}
            </Row>
        </div>
    )
}

export default SearchResults
