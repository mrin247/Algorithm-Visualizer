import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                

                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://github.com/mrin247" style={{color: "#65b6f0"}}>Mrinmoy Mondal</a>
                </div>

            </footer>
        );
    }
}

export default Footer;