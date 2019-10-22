//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBSwitch,
  MDBIcon,
} from 'mdbreact';

//> CSS
import './apilist.scss';

//> Images
// https://breezometer.com
import breezometerIcon from '../../../../assets/apis/breezometer.jpg';

//> Dummy data
const data = [
  {
    name: "Air Quality",
    company: "Breezometer",
    logo: breezometerIcon,
    categories: [
      "Environmental",
      "Air Quality"
    ],
    price: undefined,
    rating: 4.6,
    supported: true,
    featured: false,
    activateAble: true,
    documentation: "https://docs.breezometer.com/api-documentation/air-quality-api/v2/",
  }
]

class APIList extends React.Component {

  state = {

  }

  getRating = (points) => {
    let p = 0;
    // Normalize points to only have certain values
    if(points < 0.5){
      p = 0;
    } else if(points < 1){
      p = 0.5;
    } else if(points < 1.5){
      p = 1;
    } else if(points < 2){
      p = 1.5;
    } else if(points < 2.5){
      p = 2;
    } else if(points < 3){
      p = 2.5;
    } else if(points < 3.5){
      p = 3;
    } else if(points < 4){
      p = 3.5;
    } else if(points < 4.5){
      p = 4;
    } else if(points < 5){
      p = 4.5;
    } else if(points === 5){
      p = 5;
    }

    // Get result
    switch (p) {
      case 0:
        return(
          <>
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          </>
        );
      case 0.5:
        return(
          <>
          <MDBIcon icon="star-half-alt" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          </>
        );
      case 1:
        return(
          <>
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          </>
        );
      case 1.5:
        return(
          <>
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star-half-alt" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          </>
        );
      case 2:
        return(
          <>
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          </>
        );
      case 2.5:
        return(
          <>
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star-half-alt" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          </>
        );
      case 3:
        return(
          <>
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          </>
        );
      case 3.5:
        return(
          <>
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star-half-alt" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          </>
        );
      case 4:
        return(
          <>
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon far icon="star" className="pr-1" />
          </>
        );
      case 4.5:
        return(
          <>
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star-half-alt" className="pr-1" />
          </>
        );
      case 5:
        return(
          <>
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          <MDBIcon icon="star" className="pr-1" />
          </>
        );
      default:
        return(
          <span>No ratings yet</span>
        );
    }
  }
  
  handleSwitchChange = (api) => {
    console.log(api);

    this.setState({
      ["use_"+api.company.toLowerCase()+"_"+api.name.replace(" ","_").toLowerCase()]: 
      !this.state["use_"+api.company.toLowerCase()+"_"+api.name.replace(" ","_").toLowerCase()]
    });
  }

  render() {
    return (
      <div className="p-md-5" id="apilist">
      <h4>Welcome to the API Explorer</h4>
      <p>The API Explorer contains all APIs you will be able to use over our service.</p>
      <hr/>
      <MDBRow>
      {data.map((api, key) => {
        return(
          <MDBCol md="2" key={key}>
            <MDBCard>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol className="flex-center">
                    <div className="p-2">
                      <p className="lead mb-0">{api.name}</p>
                      <small className="text-muted d-block">
                      {api.company}
                      </small>
                      <small className="orange-text">
                        {this.getRating(api.rating)}
                      </small>
                    </div>
                    <div className="ml-auto p-2 mb-auto mt-auto">
                      <img 
                      src={api.logo}
                      width="50px"
                      alt={api.name}
                      className="img-fluid align-self-center mr-0"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <div>
                <small>
                  BreezoMeter is an award-winning, world leader in location-specific 
                  real-time air quality data, already helping more than 5.5 billion 
                  people improve their health with actionable data. 
                </small>
                </div>
                <MDBRow>
                  <MDBCol className="flex-center">
                    <div className="p-2">
                      <small>
                      <a
                      href={api.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      Documentation
                      </a>
                      </small>
                    </div>
                    <div className="ml-auto p-2 mb-auto mt-auto">
                      <MDBSwitch 
                      disabled={api.activateAble ? false : true}
                      checked={this.state.use_breezometer_air_quality ? true : false}
                      onChange={() => this.handleSwitchChange(api)}
                      labelLeft=""
                      labelRight=""
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        );
      })}
      </MDBRow>
      </div>
    );
  }
}

export default APIList;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
