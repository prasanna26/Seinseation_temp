import React, { Component,useState, useEffect } from 'react';
// import seinesationDesktopImage from 'images/Seinesation_resized.jpeg';

const Introduction = ()=>{
  
    const imagestyle ={
      backgroundImage : 'url(images/Seinesation_resized.jpeg)',
      // color : "white",
    };
    const fontColorStyel ={
      color:"white"
    };
    let seinesationDesktopImageUrl = 'url(images/Seinesation_resized.jpeg)';
    let seinesationMobileImageUrl = 'url(images/Seinesation_mob.jpeg)';
    let cleoDesktopImageUrl = 'url(images/cleo_desktop.jpg)';
    let uncertaintyDesktopImageUrl = 'url(images/Uncertainty_desktop.jpg)';
    let cleoMobileImageUrl = 'url(images/cleo_mob.jpeg)';
    let uncertaintyMobileImageUrl = 'url(images/Uncertainty_mob.jpeg)';
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const seinesationImageUrl = windowWidth >=650 ? seinesationDesktopImageUrl : seinesationMobileImageUrl ;

    const cleoImageUrl = windowWidth >=650 ? cleoDesktopImageUrl : cleoMobileImageUrl ;
    const uncertaintyImageUrl = windowWidth >=650 ? uncertaintyDesktopImageUrl : uncertaintyMobileImageUrl ;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage : seinesationImageUrl}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={fontColorStyel}>Hi! <br />I'm Seinesation</h1>
                          <p style={fontColorStyel}><a className="btn btn-primary btn-learn" href="#about" target="_blank" rel="noopener noreferrer" style ={{color:"white",border:"white",borderColor:"white"}}>Groove to My Music<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: cleoImageUrl}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={fontColorStyel}><br />  </h1>
                          {/* <p><a className="btn btn-primary btn-learn" href="https://github.com/dbarochiya" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: uncertaintyImageUrl}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          {/* <h1>I often <br/>Write ... </h1> */}
                          {/* <p><a className="btn btn-primary btn-learn" href="https://dhruvbarochiya.me/" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  
};

export default Introduction;
