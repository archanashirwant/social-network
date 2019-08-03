import React from 'react';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";


const Slides = () => {

    return (
        <div className="container-fluid">
            <RBCarousel
              animation={true}
              indicators={false}
              autoplay={true}
              slideshowSpeed={2000}
              version={4}
            >
              <div style={{ height:500 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="images/bg_1.jpg"
                />
                <div className="carousel-caption">Image</div>
              </div>
              <div style={{ height:500 }}>
                <img
                  style={{ width: "100%", height: "100%" }}               
                  src="images/bg_2.jpg"
                />
                <div className="carousel-caption">Video</div>
              </div>
              <div style={{ height:500 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="images/bg_3.jpg"
                />
              </div>
            </RBCarousel>
        </div>
    )    
}        

export default Slides;