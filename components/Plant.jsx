import React from 'react'


export default function(props) {
    return(
        <>
        <div className ="hero">
            <section className="sectionOne">
                <img className ="hero-img" src={props.imageUrl} alt="" />
            </section>
            
            <section className="sectionTwo">
            
                <img className = "" src="./images/location-pin.svg" alt="" />
                <span className ="location"> {props.location}</span>
                {/*<a className = "googleMaps" href={props.googleMapsUrl}>View on Google Maps</a> */}
                <h3>{props.title}</h3>
                <p className = "date">Date Acquired : {props.startDate}</p>
                <h6>Facts</h6>
                <p>{props.description}</p>
                <h6>Care</h6>
                <p>{props.care}</p>

            </section>
        </div>
        <hr/>
          </>     
       
    )
}