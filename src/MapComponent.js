// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import './Categories';
// const MapComponent = ({ location }) => {
//   const mapStyles = {
//     height: '400px',
//     width: '100%',
//   };

//   const defaultCenter = {
//     lat: location.lat,
//     lng: location.lng,
//   };

//   return (
//     <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={15}
//         center={defaultCenter}
//       >
//         <Marker position={defaultCenter} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapComponent;

import React, { useEffect } from 'react';

const MapComponent = ({ location }) => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 15,
    });

    new window.google.maps.Marker({
      position: location,
      map: map,
    });
  }, [location]);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;

