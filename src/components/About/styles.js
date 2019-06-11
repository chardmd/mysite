import styled from 'styled-components'
import bgRight from '../../assets/header-bg-right.svg'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: #eff6fb;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 95%;
  background-position: right top;
  background-image: url(${bgRight});
  @media (max-width: 800px) {
    padding: 0;
    width: 100%;
    height: calc(100% - 444px);
    text-align: center;
  }
`

export const Wrapper = styled.div`
  padding: 60px;
  max-width: 640px;
`

export const Header = styled.h1`
  margin: 0 0 0.4rem 0;
  padding: 0;
  color: #1da1f2;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.7rem;
  line-height: 1.1;
`

export const Header2 = styled.h2`
  color: ${props => props.color};
  margin: 0 0 0.45rem 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 800;
  text-rendering: optimizeLegibility;
  font-size: 3.1rem;
  letter-spacing: -0.027rem;
`