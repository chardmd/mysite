import React, { useState, useEffect, useRef } from 'react'
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

const Career = () => {
  const [runTaskHidden, setRunTaskHidden] = useState(true)
  const [selectOptionClass, setSelectedOptionClass] = useState('')
  const [logs, setLogs] = useState([])
  const [finalOutput, setFinalOutput] = useState(false)
  const [driftLoaded, setDriftLoaded] = useState(false)
  const screenRef = useRef(null)
  let timeouts = []

  //clear timeouts
  const clearTimeouts = () => {
    timeouts.forEach(clearTimeout)
  }

  const createFinalOutput = () => {
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

  const getLogColor = logColor => {
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

  const createLogs = () => {
    const template = logs.map((log, index) => {
      const color = getLogColor(log.class)
      return (
        <div key={`${index}-company`}>
          <span style={{ color }}>{log.label}&nbsp;</span>
          {log.desc}
        </div>
      )
    })
    return template
  }

  const scrollToBottom = () => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight
    }
  }

  const addLogItems = () => {
    let timeout = null
    for (let i = 0; i < jsonLogs.length; i++) {
      const item = jsonLogs[i]
      timeout = setTimeout(() => {
        setLogs(logs => logs.concat(item))
        //call final output
        if (i === jsonLogs.length - 1) {
          setFinalOutput(true)
        }
        scrollToBottom()
      }, i * 160)
      timeouts = timeouts.concat(timeout)
    }
  }

  const createRunTask = () => {
    const template = jsonCompanies.map((company, index) => {
      return <div key={`${index}-company`}>&gt;&nbsp;{company}</div>
    })
    return template
  }

  const runTaskSelection = () => {
    const timeout = setTimeout(() => {
      setSelectedOptionClass(COLORS.green)
      addLogItems()
    }, 500)
    timeouts = timeouts.concat(timeout)
  }

  const displayRunTask = () => {
    const timeout = setTimeout(() => {
      setRunTaskHidden(false)
      runTaskSelection()
    }, 500)
    timeouts = timeouts.concat(timeout)
  }

  useEffect(() => {
    if (!driftLoaded) {
      window.drift.on('ready', function(api, payload) {
        api.showWelcomeMessage()
      })
      setDriftLoaded(true)
    }

    return function cleanup() {
      //clear timeouts
      clearTimeouts()

      //hide the drift component
      if (window.drift) {
        window.drift.on('ready', function(api, payload) {
          api.hideWelcomeMessage()
        })
      }
    }
  }, [])

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
        <Screen ref={screenRef}>
          <Font>
            <span style={{ color: COLORS.yellow }}>chardmd.com</span>
            @192.168.8.5:~$
            <WrapTypist onTypingDone={displayRunTask}>
              <WrapTypist.Delay ms={700} avgTypingSpeed={40} />
              <TypeLine>npm install work --global</TypeLine>
              <br />
            </WrapTypist>
            {!runTaskHidden ? (
              <div>
                <div className="task">
                  {createRunTask()}
                  <div style={{ color: selectOptionClass }}>
                    &gt;&nbsp;All (Install all options)
                  </div>
                </div>
                {createLogs()}
                {finalOutput && createFinalOutput()}
              </div>
            ) : null}
          </Font>
        </Screen>
      </Content>
    </Container>
  )
}
export default Career
