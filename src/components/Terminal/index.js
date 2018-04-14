import React from 'react'
import Typist from 'react-typist'
import 'babel-polyfill'
import './Terminal.css'
import jsonLogs from './logs.json'
import jsonOutput from './output.json'
import jsonCompanies from './companies.json'

class Terminal extends React.Component {
  constructor(props) {
    super(props)
    this.displayRunTask = this.displayRunTask.bind(this)
    this.createRunTask = this.createRunTask.bind(this)
    this.runTaskSelection = this.runTaskSelection.bind(this)
    this.createLogs = this.createLogs.bind(this)
    this.addLogItems = this.addLogItems.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.createFinalOutput = this.createFinalOutput.bind(this)

    this.state = {
      runTaskHidden: true,
      selectOptionClass: '',
      logs: [],
      finalOutput: false,
    }
  }

  createRunTask() {
    const template = jsonCompanies.map((company, index) => {
      return <div key={`${index}-company`}>&gt;&nbsp;{company}</div>
    })

    return template
  }

  displayRunTask() {
    setTimeout(() => {
      this.setState(
        {
          runTaskHidden: false,
        },
        () => {
          this.runTaskSelection()
        }
      )
    }, 500)
  }

  runTaskSelection() {
    setTimeout(() => {
      this.setState(
        {
          selectOptionClass: 'green',
        },
        () => {
          this.addLogItems()
        }
      )
    }, 500)
  }

  addLogItems() {
    for (let i = 0; i < jsonLogs.length; i++) {
      setTimeout(() => {
        this.setState({
          logs: this.state.logs.concat(jsonLogs[i]),
        })

        //call final output
        if (i === jsonLogs.length - 1) {
          this.setState({
            finalOutput: true,
          })
        }
        this.scrollToBottom()
      }, i * 140)
    }
  }

  createFinalOutput() {
    const template = jsonOutput.map((item, index) => {
      return (
        <div key={`${index}-company-output`}>
          <div>
            <span className="tortoise">Company&nbsp;</span>
            <span>{item.company}</span>
          </div>
          <div>
            <span className="tortoise">Position&nbsp;</span>
            <span>{item.position}</span>
          </div>
          <div>
            <span className="tortoise">Duration&nbsp;</span>
            <span>{item.duration}</span>
          </div>
          <div>=======================================</div>
        </div>
      )
    })

    return (
      <div>
        <div className="yellow">[All data downloaded] info --print && exit</div>
        {template}
      </div>
    )
  }

  createLogs() {
    const template = this.state.logs.map((log, index) => {
      return (
        <div key={`${index}-company`}>
          <span className={log.class}>{log.label}&nbsp;</span>
          {log.desc}
        </div>
      )
    })
    return template
  }

  scrollToBottom() {
    this.logRef.scrollIntoView({ block: 'end' })
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
                <Typist.Delay ms={1200} avgTypingSpeed={40} />
                <span className="typeLine">
                  npm install work-experience --global
                </span>
                <br />
              </Typist>
              {!this.state.runTaskHidden ? (
                <div>
                  <div className="task">
                    {this.createRunTask()}
                    <div className={this.state.selectOptionClass}>
                      &gt;&nbsp;All (Install all options)
                    </div>
                  </div>
                  <div
                    className="logs"
                    ref={el => {
                      this.logRef = el
                    }}
                  >
                    {this.createLogs()}
                    {this.state.finalOutput && this.createFinalOutput()}
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
