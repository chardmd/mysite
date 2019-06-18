import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  margin: 0;
  line-height: 1.6;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Section = styled.section`
  width: 50%;
  height: 100vh;
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`
