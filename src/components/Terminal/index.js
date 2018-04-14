import React from 'react'
import Typist from 'react-typist'
import 'babel-polyfill'
import './Terminal.css'

class Terminal extends React.Component {
  constructor(props) {
    super(props)
    this.displayRunTask = this.displayRunTask.bind(this)
    this.createRunTask = this.createRunTask.bind(this)
    this.runTaskSelection = this.runTaskSelection.bind(this)
    this.createLogs = this.createLogs.bind(this)
    this.addLogItems = this.addLogItems.bind(this)

    this.state = {
      runTaskHidden: true,
      selectOptionClass: '',
      logs: [],
    }
  }

  createRunTask() {
    const companies = [
      'Cabcharge Australia Limited - Sydney',
      'Simulation Software and Technology Pte Ltd - Singapore',
      'SK Planet Global Pte Ltd - Singapore',
      'Twist Resources Inc. - Clark, PH',
    ]

    const template = companies.map((company, index) => {
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
    const logs = [
      {
        label: '[All]',
        desc: 'option selected. Please wait..',
        class: 'yellow',
      },
      {
        label: '[connect]',
        desc: '192.168.1.231:8080',
        class: 'green',
      },
      {
        label: '[connect]',
        desc: '192.100.23.45:3000',
        class: 'green',
      },
      {
        label: '[connect]',
        desc: '11.123.99.45:555',
        class: 'green',
      },
      {
        label: '[connect]',
        desc: 'ultimate-data-compilation.tor.proxy.server',
        class: 'green',
      },
      {
        label: '[connect]',
        desc: 'spacex.outerspace.mars',
        class: 'green',
      },
      {
        label: '[connect]',
        desc: 'area51.alien.co',
        class: 'green',
      },
      {
        label: '[install]',
        desc: '::date of work::',
        class: 'purple',
      },
      {
        label: '[install]',
        desc: '::company position::',
        class: 'purple',
      },
      {
        label: '[install]',
        desc: '::roles and responsibilities::',
        class: 'purple',
      },
      {
        label: '[validate]',
        desc: 'https://www.cabcharge.com.au',
        class: 'green',
      },
      {
        label: '[validate]',
        desc: 'http://www.simulation.com.sg',
        class: 'green',
      },
      {
        label: '[validate]',
        desc: 'http://www.skplanet.com/eng/aboutus/skplanet_is.aspx',
        class: 'green',
      },
      {
        label: '[validate]',
        desc: 'http://www.twistresources.com',
        class: 'green',
      },
    ]

    for (let i = 0; i < logs.length; i++) {
      setTimeout(() => {
        this.setState({
          logs: this.state.logs.concat(logs[i]),
        })
      }, i * 200)
    }
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

  render() {
    const taskList = this.createRunTask()
    const logs = this.createLogs()

    console.log(logs)

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
                <div>
                  <div className="task">
                    {taskList}
                    <div className={this.state.selectOptionClass}>
                      &gt;&nbsp;All (Install all options)
                    </div>
                  </div>
                  <div>{logs}</div>
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
