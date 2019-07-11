import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  height: 100vh;
  overflow-y: scroll;
  border-left: 1px solid #e6ecf0;
  @media (max-width: 800px) {
    overflow: hidden;
    height: 100%;
  }
  background-color: #eff6fb;
`

export const Content = styled.div`
  z-index: 99999;
  width: 100%;
  height: 100%;
`
