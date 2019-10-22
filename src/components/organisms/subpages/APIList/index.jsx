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
} from 'mdbreact';

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
    rating: 4,
    supported: true,
  }
]

class APIList extends React.Component {

  render() {
    return (
      <div className="p-md-5">
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
                    </div>
                    <div className="ml-auto p-2 mb-auto">
                      <img 
                      src={api.logo}
                      width="50px"
                      alt={api.name}
                      className="img-fluid align-self-center mr-0"
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
