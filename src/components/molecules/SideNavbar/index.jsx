//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional modules
// Side Navigation
import SideNav, { 
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';
// Side Navigation CSS
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBIcon,
} from 'mdbreact';

//> CSS
import './nav.scss';

class SideNavbar extends React.Component{

  constructor(props){
    super(props);
  }

  toggle = (exp) => {
    this.props.handleToggle(exp);
  }

  render(){
      return(
        <SideNav
          onSelect={(selected) => {
              // Add your code here
          }}
          onToggle={(exp) => this.toggle(exp)}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <div className="w-100" />
            <NavItem eventKey="home">
              <NavIcon className="flex-center d-flex">
                <MDBIcon icon="home" size="lg"/>
              </NavIcon>
              <NavText>
                Dashboard
              </NavText>
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                  <MDBIcon icon="chart-line" size="lg"/>
                </NavIcon>
                <NavText>
                  Charts
                </NavText>
                <NavItem eventKey="charts/linechart">
                  <NavText>
                    Line Chart
                  </NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                  <NavText>
                    Bar Chart
                  </NavText>
                </NavItem>
            </NavItem>
            <NavItem eventKey="settings" className="item-bottom">
              <NavIcon className="flex-center d-flex">
                <MDBIcon icon="cogs" size="lg"/>
              </NavIcon>
              <NavText>
                Settings
              </NavText>
            </NavItem>
        </SideNav.Nav>
      </SideNav>
    )
  }
}

export default SideNavbar;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
