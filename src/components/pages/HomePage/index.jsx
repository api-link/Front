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
// Molecules
import {
  SideNavbar,
} from '../../molecules';
// Organisms
import {
  APIList,
} from '../../organisms/subpages';

//> Images
// Too be added

class HomePage extends React.Component {

  state = {
    containerPaddingLeft: "60px",
    page: "home",
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
  
  navSelect = (selected) => {
    this.setState({
      page: selected
    });
  }

  renderPage = () => {
    switch(this.state.page){
      case "home":
        return(
          <p>Home</p>
        );
      case "settings":
        return(
          <p>Settings</p>
        )
      case "api-list":
        return(
          <APIList />
        )
      default:
        return(
          <p>Home</p>
        );
    }
  }

  render() {

    console.log(this.state);

    return (
      <div>
        <SideNavbar 
        handleToggle={this.navToggle}
        handleSelect={this.navSelect}
        />
        <div 
        className="main-container"
        style={{paddingLeft: this.state.containerPaddingLeft}}
        >
          <MDBContainer fluid>
            {this.renderPage()}
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
