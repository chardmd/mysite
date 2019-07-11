import styled from 'styled-components'
import { load, liquid1, liquid2 } from './keyFrames'

export const Container = styled.div`
  height: 100%;
  height: 100vh;
  overflow-y: scroll;
  border-left: 1px solid #e6ecf0;
  text-align: center;
  background-color: #eff6fb;
  @media (max-width: 800px) {
    overflow: hidden;
    height: 100%;
  }
`

export const Content = styled.div`
  z-index: 99999;
  width: 100%;
  height: 100%;
`

export const Text = styled.a`
  text-decoration: none;
  color: #2b7bb9;
`

export const Battery = styled.div`
  display: block;
  margin: 40px auto 50px auto;
  position: relative;
  width: 5.25rem;
  height: 9.5rem;
  box-shadow: 0 0 0 0.2rem rgb(66, 92, 119);
  -webkit-box-shadow: 0 0 0 0.2rem rgb(66, 92, 119);
  border-radius: 0.09rem;
  -webkit-border-radius: 0.09rem;
  background: white;

  :before {
    content: '';
    position: absolute;
    left: 1.5625rem;
    right: 1.5625rem;
    top: -0.3375rem;
    height: 0.3375rem;
    width: 2.125rem;
    background: rgb(66, 92, 119);
    border-radius: 0.18rem;
    -webkit-border-radius: 0.18rem;
  }
  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-right: 5.25rem solid transparent;
    border-bottom: 9.05rem solid rgba(255, 255, 255, 0.325);
  }
`

export const Liquid = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 5.25rem;
  background: rgb(113, 251, 133);
  animation: ${load} 2.59s infinite;
  -webkit-animation: ${load} 2.59s infinite;

  :before {
    content: '';
    position: absolute;
    top: -1.5rem;
    height: 2.125rem;
    width: 3.4625rem;
    background: rgb(113, 251, 133);
    opacity: 0;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    right: 0;
    animation: ${liquid1} 2.59s infinite;
    -webkit-animation: ${liquid1} 2.59s infinite;
  }
  :after {
    content: '';
    position: absolute;
    top: -1.5rem;
    height: 2.125rem;
    width: 3.4625rem;
    background: rgb(113, 251, 133);
    opacity: 0;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    left: 0;
    animation: ${liquid2} 2.59s infinite;
    -webkit-animation: ${liquid2} 2.59s infinite;
  }
`
