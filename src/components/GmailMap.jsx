import React, { useEffect, useState } from 'react'
import GoogleMapReact from "google-map-react";
const GmailMap = (props) => {

    const [state, setState] = useState({
        center:{
            lat:'',
            lng:''
        },
        zoom:''
    })
    
useEffect(() => {
    setState({
        center:{
            lat:props.lat,
            lng:props.lng
        },
        zoom:props.zoom
    })
}, [])



    return (
        <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={state.center}
          defaultZoom={state.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}

export default GmailMap


// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const SimpleMap = (props) => {
//   var defaultProps = {
//     center: {
//       lat: props.data,
//       lng: props.data2,
//     },
//     zoom: 16,
//   };

//   // console.log(props.data);
//   // console.log(props.data2);

//   console.log(defaultProps.center);
//   console.log(defaultProps.zoom);

//   //render() {

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: "60vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyDvkUWlipNFPjtnd19C4Q2T3JJN4ZgRuGQ" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//         // defaultCenter={(props.data, props.data2)}
//         // defaultZoom={16}
//       >
//         <AnyReactComponent
//           lat={props.data}
//           lng={props.data2}
//           text="Propiedad"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default SimpleMap;