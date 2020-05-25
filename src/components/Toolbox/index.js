import React from 'react'
import { Container, Grid, Img } from './styles'

const Toolbox = () => {
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

  return (
    <Container>
      <Grid>
        {images.map(i => {
          return (
            <Img
              src={require(`../../assets/${i}.svg`)}
              alt={i}
              key={`skill-${i}`}
              className={`animated pulse fast`}
            />
          )
        })}
      </Grid>
    </Container>
  )
}
export default Toolbox
