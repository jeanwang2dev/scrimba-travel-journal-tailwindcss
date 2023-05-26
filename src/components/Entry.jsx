import React from "react";
import locationimg from '../img/location.svg';

export default function Entry(props) {
    return (    
        <div className="entry">
            <div className="entry--wrap">
                <img src={props.node.recordMeta.imageurl} alt="view" className="entry--photo"/>
                <div className="entry--detail">
                    <div className="entry--location">
                        <img src={locationimg} alt="location sign" />
                        <span className="entry--country">{props.node.recordMeta.location.toLowerCase()}</span>
                        <a className="text-xs" href={props.node.recordMeta.googlemapsurl}>View on Google Maps</a>
                    </div>
                    <div>
                        <h2 className="entry--name">{props.node.title}</h2>
                        <p className="entry--date">{props.node.recordMeta.startdate} - {props.node.recordMeta.enddate}</p>
                        <p className="entry--desc">{props.node.recordMeta.description}</p>
                    </div>
                </div>
            </div>
            <div className="entry--line"></div>
        </div>     
    )
}


