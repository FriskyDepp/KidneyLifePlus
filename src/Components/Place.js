import React from 'react';
import './Place.css'

class GoogleMapsButton extends React.Component {
  openGoogleMapsLink = () => {
    const link = "https://www.google.com/maps/search/%E0%B8%AB%E0%B8%B2%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%89%E0%B8%B1%E0%B8%99/@18.7920958,99.0018532,15z/data=!3m1!4b1?entry=ttu";
    window.open(link, '_blank');
  };

  render() {
    return (
      <div>
        <button className='find-hos-button-place' onClick={this.openGoogleMapsLink}>Open Google Maps</button>
      </div>
    );
  }
}

function Place() {
  return (
    <div className="find-hos-topic">
      <h1>ค้นหาโรงพยาบาลใกล้เคียง</h1>
      <GoogleMapsButton />
    </div>
  );
}

export default Place;