import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  z-index: 9999;
  box-shadow: 0px 0px 10px 3px ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.background};
`
export const Item = styled.div`
  padding: 5px;
  cursor: pointer;
  text-align: center;
  width: 80px;
  margin: 5px 0px 5px 0px;

  &:hover {
    transition: 0.3s linear;
    background-color: ${(props) => props.theme.secondary};
  }
`
export const Text = styled.span`
  font-size: 16px;
`
