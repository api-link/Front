//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
} from 'mdbreact';

//> Components
import {
  SideNavbar,
} from '../../molecules';

//> Images
// Too be added

class HomePage extends React.Component {

  state = {
    containerPaddingLeft: "60px",
  }

  navToggle = (exp) => {
    let width = "60px";

    // Check if expanded
    if(exp){
      width = "240px";
    }

    this.setState({
      containerPaddingLeft: width
    });
  }

  render() {

    console.log(this.state);

    return (
      <div>
        <SideNavbar 
        handleToggle={this.navToggle}
        />
        <div 
        className="main-container"
        style={{paddingLeft: this.state.containerPaddingLeft}}
        >
          <MDBContainer fluid>
            <p>Test</p>
          </MDBContainer>
          
        </div>
      </div>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
