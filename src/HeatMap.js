import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Circle } from 'google-maps-react';

  export class HeatMap extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          stores: [{ lat: 23.188551, lng: 72.628742}]
        }
    }


    render() {

        const weight = this.props.weights;
        return (
            <div className="heatmap">
                <h2 id="header"> Heat Map </h2>
                <Map
                    google={this.props.google}
                    zoom={16.8}
                    style={{width: 600, height: 450, position: 'relative'}}
                    initialCenter={{ lat: 23.188551, lng: 72.628742}}
                >
                    <Circle
                        id="hostel"
                        radius={weight[0].hostel}
                        center={{ lat: 23.18753365013745, lng: 72.62686972662205}}
                        strokeColor='transparent'
                        strokeOpacity={0}
                        strokeWeight={5}
                        fillColor='#FF0000'
                        fillOpacity={0.2}
                    />

                    <Circle
                        id="lt"
                        radius={weight[1].event}
                        center={{ lat: 23.186538833263683, lng: 72.62861455444254}}
                        strokeColor='transparent'
                        strokeOpacity={0}
                        strokeWeight={5}
                        fillColor='#FF0000'
                        fillOpacity={0.2}
                    />

                    <Circle
                        id="canteen"
                        radius={weight[2].canteen}
                        center={{ lat: 23.188680725721532, lng: 72.62691389948398}}
                        strokeColor='transparent'
                        strokeOpacity={0}
                        strokeWeight={5}
                        fillColor='#FF0000'
                        fillOpacity={0.2}
                    />

                    <Circle
                        id="rc"
                        radius={weight[3].RC}
                        center={{ lat: 23.189020786060095, lng: 72.62860903281863}}
                        strokeColor='transparent'
                        strokeOpacity={0}
                        strokeWeight={5}
                        fillColor='#FF0000'
                        fillOpacity={0.2}
                    />

                    <Circle
                        id="CEP"
                        radius={weight[4].CEP}
                        center={{ lat: 23.188401571071783, lng: 72.62788018070302}}
                        strokeColor='transparent'
                        strokeOpacity={0}
                        strokeWeight={5}
                        fillColor='#FF0000'
                        fillOpacity={0.2}
                    />

                    <Circle
                        id="faculty"
                        radius={weight[5].Faculty}
                        center={{ lat: 23.189416676107697, lng: 72.6280734369458}}
                        strokeColor='transparent'
                        strokeOpacity={0}
                        strokeWeight={5}
                        fillColor='#FF0000'
                        fillOpacity={0.2}
                    />

                    <Circle
                        id="lab"
                        radius={weight[6].Lab}
                        center={{ lat: 23.187020296902837, lng: 72.62801704773881}}
                        strokeColor='transparent'
                        strokeOpacity={0}
                        strokeWeight={5}
                        fillColor='#FF0000'
                        fillOpacity={0.2}
                    />          
                </Map>
            </div>
        );  
    }
}
 
export default GoogleApiWrapper({
    apiKey: '' // Enter your API key
  })(HeatMap);