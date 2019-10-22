//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// React Router
import { Link } from 'react-router-dom';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBFooter,
    MDBRow,
    MDBCol,
    MDBContainer,
} from 'mdbreact';

class Footer extends React.Component{
    render(){
        return(
            <MDBFooter color="api-light" className="font-small py-4 mt-4">
                <MDBContainer className="text-center">
                  <Link
                  to="/support"
                  >
                  Support
                  </Link>
                  <span className="pl-2 pr-2">·</span>
                  <Link
                  to="/terms"
                  >
                  Terms
                  </Link>
                  <span className="pl-2 pr-2">·</span>
                  <Link
                  to="/privacy"
                  >
                  Privacy Policy
                  </Link>
                  <span className="pl-2 pr-2">·</span>
                  <Link
                  to="/pricing"
                  >
                  Pricing
                  </Link>
                </MDBContainer>
            </MDBFooter>
        );
    }
}

export default Footer;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
