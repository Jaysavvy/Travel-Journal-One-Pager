import React from "react"


export default function Trips (props){
  console.log(props)
  return(
   <section className="trip">
      <div className="trip__img" >
        <img src={props.trip.imageUrl}/>
      </div>
      <div className="trip__details">
        <div className="trip__location">
          <p>{props.trip.location}</p>
          <img className="image-pin" src="src/images/pin.svg"/>
          <a href={props.trip.googleMapsUrl} className="trip__location-map"> View on Google Maps</a>
        <h2 className="trip__header">{props.trip.title}</h2>
        <p className="trip__date"> {props.trip.startDate} - {
        props.trip.endDate}</p>
        <p className="trip__summary">{props.trip.description}</p>
        </div>
      </div>
    </section>
  )
}