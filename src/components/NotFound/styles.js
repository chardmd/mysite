import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eff6fb;
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Header = styled.h1`
  margin: 0 0 0.45rem 0;
  padding: 0;
  color: #3c3333;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 800;
  text-rendering: optimizeLegibility;
  font-size: 3.1rem;
  letter-spacing: -0.027rem;
`

export const Para = styled.p`
  color: #3c3333;
`
