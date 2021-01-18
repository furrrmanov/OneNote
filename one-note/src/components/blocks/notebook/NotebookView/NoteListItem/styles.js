import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  width: 180px;
  height: 40px;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`

export const Title = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 5px;
  margin: 0px 10px 0px 10px;
`
