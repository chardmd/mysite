import React from 'react'
import './Contact.css'

class Contact extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    window.location.href = `mailto:richard.dimalanta@gmail.com`
  }
  render() {
    return (
      <div className="Contact">
        <div className="content">
          <h1 className="animated fadeIn">
            Let's build software that solves business problems, increase
            revenue, and reduce costs.
          </h1>
          <br />
          <button className="button animated tada" onClick={this.handleClick}>
            Drop me a message
          </button>
        </div>
      </div>
    )
  }
}
export default Contact
