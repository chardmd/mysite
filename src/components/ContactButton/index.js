import React from 'react'
import './ContactButton.css'

class ContactButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ContactButton">
        <div className="button-wrapper">
          <button>
            <a href="#">
              <i className="icon fa fa-envelope" />
              <span className="name">Get In Touch</span>
            </a>
          </button>
        </div>
      </div>
    )
  }
}

export default ContactButton
