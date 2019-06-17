import styled from 'styled-components'
import { Link } from 'gatsby'

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
  margin: 0 0 0.5rem 0;
  font-size: 20px;
  padding: 0;
  list-style-position: outside;
  list-style-image: none;
  @media (max-width: 800px) {
    justify-content: center;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const ListItem = styled.li`
  margin-right: 16px;
  @media (max-width: 800px) {
    margin: 0 8px;
  }
`

export const LinkWrapper = styled(Link)`
  border-bottom: ${props => props.active && '3px solid #efa536'};
  padding-bottom: 2px;
  color: #1c94e0;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  :active,
  :hover {
    outline-width: 0;
  }
  @media (max-width: 800px) {
    font-weight: normal;
  }
`
