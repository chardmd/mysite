import React from 'react'
import './Tech.css'

const images = [
  'javascript',
  'redux',
  'nodejs',
  'vscode',
  'css3',
  'react',
  'html5',
  'azure',
  'docker',
  'webpack',
  'firebase',
  'material',
  'gatsby',
  'redis',
  'mongodb',
  'npm',
  'angular',
  'netlify',
  'aws',
  'git',
  'java',
  'jenkins',
  'mysql',
  'postgresql',
  'spring',
  'terminal',
  'tomcat',
]

class Tech extends React.Component {
  render() {
    const renderedImages = images.map(i => {
      return <img src={require(`../../assets/${i}.svg`)} alt={i} />
    })

    return (
      <div className="Tech">
        <div className="grid">{renderedImages}</div>
      </div>
    )
  }
}

export default Tech
