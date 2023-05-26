import React from "react";
import locationimg from '../img/location.svg';

export default function Entry(props) {
    return (    
        <div className="entry">
            <div className="entry--wrap">
                <img src={props.imageUrl} alt="view" className="entry--photo"/>
                <div className="entry--detail">
                    <div className="entry--location">
                        <img src={locationimg} alt="location sign" />
                        <span className="entry--country">{props.location && props.location.toLowerCase()}</span>
                        <a className="text-xs" href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <div>
                        <h2 className="entry--name">{props.title}</h2>
                        <p className="entry--date">{ props.startDate} - {props.endDate}</p>
                        <p className="entry--desc">{ props.description === null ? 'Please put some description here' : props.description }</p>
                    </div>
                </div>
            </div>
            <div className="entry--line"></div>
        </div>     
    )
}


