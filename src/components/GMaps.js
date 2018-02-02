import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import geocoder from 'google-geocoder';

let geo = geocoder({
  key: 'AIzaSyAQsN9jwtLoKPu6f8Xj_Jq43da2_PC13m0'
});

const key = 'AIzaSyCnRAb7hVbiucr75pNC1xHPIeukFLFV7cs'

const AnyReactComponent = ({ text }) => <div>{text}</div>;



const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat:  props.lat, lng: props.lng }} />}
  </GoogleMap>
))

class GMapsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 19.1154908,
      lng: 72.8726952
    }
  }
  componentDidMount() {
    console.log('dataList', this.props.dataList);
  }

  handleEvent = (e) => {
    console.log(e)
    geo.find(e, ( err, data ) => {
      console.log(data[0].googleResponse.geometry.location);
      this.setState({
        lat: data[0].googleResponse.geometry.location.lat,
        lng: data[0].googleResponse.geometry.location.lng
      })
    });
  }
  render() {
    const { dataList } = this.props
    const { lat, lng } = this.state
    return(
      <div className="GMapsRootClass">
        <div className="GMapsListView">
          <ul className="LocationList">
          {dataList.results.map((d, i) => {
            return(
              <li key={i} onClick={this.handleEvent.bind(null, d.current_location_name)}> {d.current_location_name} </li>
            )
          })}
          </ul>
        </div>
        <div className="GMapsView">
          <MyMapComponent
            isMarkerShown
            lat = {lat}
            lng = {lng}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
      </div>
    );
  }
}

export default GMapsView;
