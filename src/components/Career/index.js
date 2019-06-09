import React from 'react'
import jsonLogs from './logs.json'
import jsonOutput from './output.json'
import jsonCompanies from './companies.json'

import {
  Container,
  Content,
  Bar,
  BarItem,
  Circle,
  Screen,
  Font,
  TypeLine,
  COLORS,
  WrapTypist,
} from './styles'

class Career extends React.Component {
  constructor(props) {
    super(props)
    this.displayRunTask = this.displayRunTask.bind(this)
    this.createRunTask = this.createRunTask.bind(this)
    this.runTaskSelection = this.runTaskSelection.bind(this)
    this.createLogs = this.createLogs.bind(this)
    this.addLogItems = this.addLogItems.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.createFinalOutput = this.createFinalOutput.bind(this)
    this.clearTimeouts = this.clearTimeouts.bind(this)
    this.getLogColor = this.getLogColor.bind(this)

    this.state = {
      runTaskHidden: true,
      selectOptionClass: '',
      logs: [],
      finalOutput: false,
    }
    this.timeouts = []
  }

  clearTimeouts() {
    this.timeouts.forEach(clearTimeout)
  }

  componentWillUnmount() {
    this.clearTimeouts()
  }

  createRunTask() {
    const template = jsonCompanies.map((company, index) => {
      return <div key={`${index}-company`}>&gt;&nbsp;{company}</div>
    })

    return template
  }

  displayRunTask() {
    const timeout = setTimeout(() => {
      this.setState(
        {
          runTaskHidden: false,
        },
        () => {
          this.runTaskSelection()
        }
      )
    }, 500)

    this.timeouts = this.timeouts.concat(timeout)
  }

  runTaskSelection() {
    const timeout = setTimeout(() => {
      this.setState(
        {
          selectOptionClass: COLORS.green,
        },
        () => {
          this.addLogItems()
        }
      )
    }, 500)
    this.timeouts = this.timeouts.concat(timeout)
  }

  addLogItems() {
    let timeout = null
    for (let i = 0; i < jsonLogs.length; i++) {
      timeout = setTimeout(() => {
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
      }, i * 160)
      this.timeouts = this.timeouts.concat(timeout)
    }
  }

  createFinalOutput() {
    const template = jsonOutput.map((item, index) => {
      return (
        <div key={`${index}-company-output`}>
          <div>
            <span style={{ color: COLORS.tortoise }}>Company&nbsp;</span>
            <span>{item.company}</span>
          </div>
          <div>
            <span style={{ color: COLORS.tortoise }}>Position&nbsp;</span>
            <span>{item.position}</span>
          </div>
          <div>
            <span style={{ color: COLORS.tortoise }}>Duration&nbsp;</span>
            <span>{item.duration}</span>
          </div>
          <div>=======================================</div>
        </div>
      )
    })

    return (
      <div>
        <div style={{ color: COLORS.yellow }}>
          [All data downloaded] info --print && exit
        </div>
        {template}
      </div>
    )
  }

  getLogColor(logColor) {
    switch (logColor) {
      case 'green':
        return COLORS.green
      case 'yellow':
        return COLORS.yellow
      case 'purple':
        return COLORS.purple
      default:
        return COLORS.green
    }
  }

  createLogs() {
    const template = this.state.logs.map((log, index) => {
      const color = this.getLogColor(log.class)
      return (
        <div key={`${index}-company`}>
          <span style={{ color }}>{log.label}&nbsp;</span>
          {log.desc}
        </div>
      )
    })
    return template
  }

  scrollToBottom() {
    if (this.screenRef) {
      this.screenRef.scrollTop = this.screenRef.scrollHeight
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Bar>
            <BarItem>
              <Circle bgColor={COLORS.red} />
            </BarItem>
            <BarItem>
              <Circle bgColor={COLORS.yellow} />
            </BarItem>
            <BarItem>
              <Circle bgColor={COLORS.green} />
            </BarItem>
          </Bar>
          <Screen
            ref={el => {
              this.screenRef = el
            }}
          >
            <Font>
              <span style={{ color: COLORS.yellow }}>chardmd.com</span>
              @192.168.8.5:~$
              <WrapTypist onTypingDone={this.displayRunTask}>
                <WrapTypist.Delay ms={700} avgTypingSpeed={40} />
                <TypeLine>npm install work --global</TypeLine>
                <br />
              </WrapTypist>
              {!this.state.runTaskHidden ? (
                <div>
                  <div className="task">
                    {this.createRunTask()}
                    <div style={{ color: this.state.selectOptionClass }}>
                      &gt;&nbsp;All (Install all options)
                    </div>
                  </div>
                  {this.createLogs()}
                  {this.state.finalOutput && this.createFinalOutput()}
                </div>
              ) : null}
            </Font>
          </Screen>
        </Content>
      </Container>
    )
  }
}
export default Career
