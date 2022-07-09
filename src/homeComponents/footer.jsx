import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div style={{display:"flex", justifyContent:"center"}}>
                <div class="footer-copyright text-center py-3" style={{paddingRight:"5px", color:"rgb(229 9 20)"}}>Github:
                    <a href="https://github.com/mrin247" style={{color: "#65b6f0",textDecoration:"none",paddingLeft:"5px"}}>Mrinmoy Mondal</a>
                </div>
                <div class="footer-copyright text-center py-3" style={{paddingRight:"5px", color:"rgb(229 9 20)"}}>Linkedin:
                    <a href="https://www.linkedin.com/in/mrinmoymondal/" style={{color: "#65b6f0",textDecoration:"none",paddingLeft:"5px"}}>Mrinmoy Mondal</a>
                </div>
                </div>

                
            </footer>
        );
    }
}

export default Footer;