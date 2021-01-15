import styled from 'styled-components'

import MaterialAppBar from '@material-ui/core/AppBar'
import MaterialToolbar from '@material-ui/core/Toolbar'
import MaterialTypography from '@material-ui/core/Typography'
import MaterialMenu from '@material-ui/core/Menu'
import MaterialIconButton from '@material-ui/core/IconButton'

import MaterialAccountCircle from '@material-ui/icons/AccountCircle'
import MaterialMenuItem from '@material-ui/core/MenuItem'

export const AppBar = styled(MaterialAppBar)`
  display: flex;
  justify-content: flex-end;
  height: 60px;
`

export const AccountCircle = styled(MaterialAccountCircle)``

export const Toolbar = styled(MaterialToolbar)`
  display: flex;
  justify-content: flex-end;
`

export const MenuItem = styled(MaterialMenuItem)`
  margin-left: 15px;
  color: #ffffff;
`

export const Typography = styled(MaterialTypography)``

export const Menu = styled(MaterialMenu)``

export const IconButton = styled(MaterialIconButton)``

export const Wrapper = styled.div`
  padding-bottom: 10px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`

export const UserName = styled.span`
  font-size: 20px;
  margin-right: 20px;
`

export const Img = styled.img`
  width: 35px;
  border-radius: 100px;
`
