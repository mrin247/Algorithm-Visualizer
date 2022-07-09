import React, {Component} from 'react';
import SimpleSelect from "./simpleSelect";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#000000", color:"rgb(229 9 20)"}}>
                <span className="navbar-brand" style={{paddingLeft:"30px"}}>Pathfinder</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                        <span style={{color:"rgb(229 9 20)"}}>
                            Home
                        </span>
                    </Link>
                </div>

            </nav>
        );
    }
}

export default Navbar;