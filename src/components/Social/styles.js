import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
  margin: 0;
  font-size: 14px;
  padding: 0;
  @media (max-width: 800px) {
    justify-content: center;
    margin-right: 0;
  }
`

export const ListItem = styled.li`
  margin-right: 16px;
  @media (max-width: 800px) {
    margin: 0 8px;
  }
`

export const Header = styled.h3`
  margin: 0;
`
export const Image = styled.img`
  :hover {
    -webkit-animation: rubberBand 1s;
    animation: rubberBand 1s;
  }
`
