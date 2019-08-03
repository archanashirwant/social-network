import React from 'react';

export const Info = (prop) => {
    return(
        <div className="col-md-3 align-self-stretch pb-4 px-4 ftco-animate bg-warning rounded-circle">
            <div className="media block-6 d-block text-center">
              <div className="media-body p-2 mt-3">
                <h3 className="heading">{prop.title}</h3>
                <p>{prop.caption}}</p>
              </div>
            </div>      
        </div>
    )
}

export const InfoGroup = (prop) => {
    return (
        <div className="container-wrapper">
            { 
                prop.title && <h2>{prop.title}</h2>
            }
            <div className="d-flex justify-content-around">
                {prop.children}
            </div>
        </div>
    )
}

export default InfoGroup;