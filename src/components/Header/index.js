import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  NavHeader,
  WebsiteLogoHeader,
  CustomButton,
  MoonTheme,
  StyledLogOut,
  OptionsContainer,
  Menu,
} from '../../styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <NavHeader>
        <Link to="/">
          <WebsiteLogoHeader
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        </Link>
        <OptionsContainer>
          <CustomButton type="button" data-testid="theme">
            <MoonTheme />
          </CustomButton>
          <CustomButton type="button">
            <Menu />
          </CustomButton>
          <CustomButton type="button" onClick={onClickLogout}>
            <StyledLogOut />
          </CustomButton>
        </OptionsContainer>
      </NavHeader>
    </>
  )
}

export default withRouter(Header)
