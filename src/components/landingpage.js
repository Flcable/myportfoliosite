import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from "../img/avatar_.png";


class Landing extends Component {
    render() {
        return(
           <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="landing-grid">
                   <Cell col={12}>
                      <img alt="avatar" className="avatar-img" src={avatar} />

                      <div className="banner-text">
                        <h1>Cloud Computer Professional</h1>   

                        <hr/>
                        <p>Azure | Azure Devops | System Administration | Ansible | Cloud Native | SRE | Linux</p>

                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank ">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* Guithub */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank ">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Freecodecamp */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank ">
                                <i className="fa fa-free-code-camp" aria-hidden="true" />
                            </a>


                        </div>                      
                      </div>
                   </Cell>
               </Grid>

           </div>
        )
    }
}


export default Landing;