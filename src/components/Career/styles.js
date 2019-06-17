import styled from 'styled-components'
import Typist from 'react-typist'

export const COLORS = {
  yellow: '#f0f000',
  red: '#e94b35',
  green: '#2eda7a',
  purple: '#b184f5',
  tortoise: '#75e9f1',
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1fa2ff;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #a6ffcb, #12d8fa, #1fa2ff);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #a6ffcb, #12d8fa, #1fa2ff);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  overflow: hidden;

  @media (max-width: 800px) {
    width: 100%;
    height: 100vh;
  }
`

export const Content = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    padding: 20px 0;
  }
`

export const Bar = styled.ul`
  text-align: center;
  height: 25px;
  width: 80%;
  background-color: rgb(218, 217, 217);
  font-family: monospace;
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  list-style: none;
  padding: 1px;
`

export const BarItem = styled.li`
  margin: 5px;
`
export const Circle = styled.div`
  border-radius: 100%;
  width: 15px;
  height: 15px;
  position: relative;
  background-color: ${props => props.bgColor};
`

export const Screen = styled.div`
  background-color: #33485e;
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  padding: 1px;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column-reverse;
`

export const Font = styled.div`
  color: #fff;
  font-family: monospace;
  font-size: 15px;
  text-align: left;
  margin-left: 5px;
`

export const TypeLine = styled.span`
  margin-left: 4px;
`

export const TextTortoise = styled.span`
  color: #75e9f1;
`

export const WrapTypist = styled(Typist)`
  display: inline;
`
