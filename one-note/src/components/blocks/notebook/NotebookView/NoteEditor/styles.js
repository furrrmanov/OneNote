import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;

  .ql-toolbar.ql-snow {
    position: absolute;
    top: 0;
    margin-left: 20px;
    border: 1px solid ${(props) => props.theme.elements};
  }

  .ql-container.ql-snow {
    height: 350px;
    border: none !important;
  }

  .ql-editor {
    margin-left: 10px;
    margin-top: 30px;
  }
`

export const NoteInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 50px;
  width: 180px;
`
export const DateContainer = styled.span`
  text-align: center;
  font-size: 13px;
`
