import React from 'react';
// Components

export default class Map extends React.Component {
  render() {
    return (
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe width="100%" height="450" id="gmap_canvas"
                  src="https://maps.google.com/maps?q=FloriCamelia,%20Drochia%20Moldova&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          <a href="https://123movies-to.org">123movies</a><br/>
          <a href="https://www.embedgooglemap.net">google map html generator</a>
        </div>
      </div>
    )
  }
}
