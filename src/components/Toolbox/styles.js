import styled from 'styled-components'

export const Container = styled.div`
  background: #acb6e5;
  height: 100vh;
  background: -webkit-linear-gradient(to right, #8dade8, #a6ffcb);
  background: linear-gradient(to right, #8dade8, #a6ffcb);
  @media (max-width: 800px) {
    height: 100vh;
    width: 100%;
  }
`

export const Grid = styled.div`
  height: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding-top: 5%;
`

export const Img = styled.img`
  width: 12%;
  height: 12%;
  display: block;
  margin: 0.5rem 0.5rem;
  :hover {
    -webkit-animation: pulse 1s;
    animation: pulse 1s;
  }
`
