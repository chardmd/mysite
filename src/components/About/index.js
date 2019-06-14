import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Navigation from '../Navigation'
import Social from '../Social'
import Metadata from '../Metadata'
import { Container, Wrapper, Header, Header2 } from './styles'

const About = ({ location }) => {
  const getTitleColor = () => {
    let color = ''
    if (pathname.includes('toolbox')) {
      color = '#37848a'
    } else if (pathname.includes('contact')) {
      color = '#15b358'
    } else if (pathname.includes('career')) {
      color = '#24292e'
    } else {
      color = '#054486'
    }
    return color
  }

  const getHeadline = pathname => {
    let title = ''
    if (pathname.includes('toolbox')) {
      title = 'Serial Builder'
    } else if (pathname.includes('contact')) {
      title = 'Full Stack Dev'
    } else if (pathname.includes('career')) {
      title = 'Software Engineer'
    } else {
      title = 'Maker of Things'
    }
    return title
  }

  const pathname = location.pathname
  const titleColor = getTitleColor(pathname)
  const headline = getHeadline(pathname)

  return (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          site {
            siteMetadata {
              headline
              about
            }
          }
        }
      `}
      render={data => (
        <>
          <Container>
            <Wrapper>
              <Header>{headline}</Header>
              <Header2 color={titleColor}>
                {data.site.siteMetadata.headline}
              </Header2>
              <Navigation location={location} />
              <p>{data.site.siteMetadata.about}</p>
              <Social />
              <Metadata />
            </Wrapper>
          </Container>
        </>
      )}
    />
  )
}

export default About
