import React from 'react'
import Typist from 'react-typist'
import 'babel-polyfill'
import './Terminal.css'

class Terminal extends React.Component {
  constructor(props) {
    super(props)
    this.displayRunTask = this.displayRunTask.bind(this)
    this.state = {
      runTaskHidden: true,
    }
  }

  displayRunTask() {
    setTimeout(() => {
      this.setState({
        runTaskHidden: false,
      })
    }, 500)
  }

  render() {
    return (
      <div className="Terminal">
        <div className="content">
          <ul className="bar">
            <li>
              <div className="redBg" />
            </li>
            <li>
              <div className="yellowBg" />
            </li>
            <li>
              <div className="greenBg" />
            </li>
          </ul>
          <div className="screen">
            <div className="font">
              <span className="yellow">chardmd.com</span>@192.168.8.5:~$
              <Typist className="type" onTypingDone={this.displayRunTask}>
                <Typist.Delay ms={1500} />
                <span className="typeLine">
                  npm install work-experience --global
                </span>
                <br />
              </Typist>
              {!this.state.runTaskHidden ? (
                <div className="task">
                  <div>Run a task:</div>
                  <div>>&nbsp;Cabcharge Australia Limited - Sydney</div>
                  <div>
                    &gt;&nbsp;Simulation Software and Technology Pte Ltd -
                    Singapore
                  </div>
                  <div>&gt;&nbsp;SK Planet Global Pte Ltd - Singapore</div>
                  <div>&gt;&nbsp;Twist Resources Inc. - Clark, PH</div>
                  <div className="green">
                    &gt;&nbsp;All (Install all options)
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Terminal
