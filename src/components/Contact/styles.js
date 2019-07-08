import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  height: 100vh;
  background: #36d1dc;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #5b86e5, #36d1dc);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #5b86e5, #36d1dc);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  overflow: hidden;
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    height: 100vh;
  }
`

export const Content = styled.div`
  z-index: 99999;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin: 20px;
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-size: 320px 314px;
  }
  @media (max-width: 800px) {
    margin: 0;
  }
`

export const Header = styled.h1`
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2.4rem;
  line-height: 1.1;
  color: white;
  margin: 10px 20px;
  letter-spacing: 0.1rem;
`

export const Button = styled.button`
  padding: 20px 50px;
  outline: none;
  background-color: #2ecc71;
  border: none;
  border-radius: 5px;
  box-shadow: 0 9px #15b358;
  color: white;
  letter-spacing: 0.2rem;
  cursor: pointer;
  font: inherit;
  margin: 0;
  :hover {
    background-color: #2ecc71;
  }
  :active {
    background-color: #2ecc71;
    box-shadow: 0 5px #95a5a6;
    transform: translateY(4px);
  }
  @media (max-width: 800px) {
    padding: 20px 50px;
    width: 90%;
  }
`
