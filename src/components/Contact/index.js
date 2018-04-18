import React from 'react'
import { Spring } from 'react-spring'

import './Contact.css'

const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
const styles = {
  shape: { width: 400, height: 400, willChange: 'transform' },
}

const Content = ({
  toggle,
  color,
  scale,
  shape,
  start,
  end,
  stop,
  rotation,
}) => (
  <div>
    <svg
      style={{
        ...styles.shape,
        transform: `scale3d(${scale}, ${scale}, ${scale}) rotate(${rotation})`,
      }}
      version="1.1"
      viewBox="0 0 400 400"
    >
      <g
        style={{ cursor: 'pointer' }}
        fill={color}
        fillRule="evenodd"
        onClick={toggle}
      >
        <path id="path-1" d={shape} />
      </g>
    </svg>
  </div>
)

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { toggle: true }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        toggle: !this.state.toggle,
      })
    }, 100)
  }

  handleClick = () => {
    window.location.href = `mailto:test@email.com`
  }
  render() {
    const toggle = this.state.toggle
    return (
      <div className="Contact">
        <div className="content">
          <h1>
            Let's build software that solves business problems, increase
            revenue, and reduce costs.
          </h1>
          <br />
          <button className="button" onClick={this.handleClick}>
            Get In Touch
          </button>
        </div>
        <Spring
          from={{ color: '#247BA0' }}
          to={{
            color: toggle ? '#247BA0' : '#70C1B3',
            start: toggle ? '#B2DBBF' : '#B2DBBF',
            end: toggle ? '#247BA0' : '#F3FFBD',
            scale: toggle ? 0.6 : 4.5,
            shape: toggle ? RECTANGLE : RECTANGLE,
            stop: toggle ? '0%' : '50%',
            rotation: toggle ? '0deg' : '45deg',
          }}
          toggle={this.toggle} // Additional props will be spread over the child
          children={Content} // Render prop
        />
      </div>
    )
  }
}
export default Contact
