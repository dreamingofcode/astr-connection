import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import githubLogo from '../icons/git.svg';
import linkedInLogo from '../icons/longlinked.svg';
import emailLogo from '../icons/emailLogo.png';

import styles from '../components/otherUsers/styles.module.css';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <strong>
            <div className="col-12 align-self-center">
              {/* <img src={logo} width="80" height="80" alt="contactlogo" /> */}
              <h1>A s t r o - C o n n e c t i on</h1>
            </div>

            <div className="col-12 ">
              <h6>
                Produced by{' '}
                <a
                  href="https://www.linkedin.com/in/cesar-mota365/"
                  target="_blank"
                >
                  Cesar Mota
                </a>
              </h6>
            </div>
            <div className="footer-logos">
              <div className=""></div>
              <a
                style={{
                  border: '0px',
                  margin: '10px',
                  float: 'center',
                  width: '10px',
                }}
                align="left"
                href="https://github.com/dreamingofcode"
                target="_blank"
              >
                <img src={githubLogo} alt="Github me" height="30px" />
              </a>

              <a
                style={{
                  border: '0px',
                  margin: '10px',
                  float: 'center',
                  width: '50px',
                }}
                align="center"
                href="https://www.linkedin.com/in/cesar-mota365/"
                target="_blank"
              >
                <img
                  src={linkedInLogo}
                  alt="Add me on LinkedIn"
                  height="30px"
                />
              </a>

              <a href="mailto:cesarmota922@gmail.com" target="_blank">
                <img
                  style={{
                    border: '0px',
                    margin: '10px',
                    float: 'center',
                    width: '30px',
                  }}
                  align="center"
                  src={emailLogo}
                  alt="Send Email"
                  height="30px"
                />
              </a>
            </div>
          </strong>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
