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
  MenuItemsContainer,
  MenuItemLink,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
  MenuItem,
} from '../../styledComponents'

const Header = props => {
  const {clickMenu, showMenu} = props
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const onClickMenuIcon = () => {
    clickMenu()
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
          <CustomButton type="button" onClick={onClickMenuIcon}>
            <Menu />
          </CustomButton>
          <CustomButton type="button" onClick={onClickLogout}>
            <StyledLogOut />
          </CustomButton>
        </OptionsContainer>
      </NavHeader>
      {showMenu ? (
        <MenuItemsContainer>
          <MenuItemLink to="/">
            <HomeIcon />
            <MenuItem>Home</MenuItem>
          </MenuItemLink>
          <MenuItemLink to="/trending">
            <TrendingIcon />
            <MenuItem>Trending</MenuItem>
          </MenuItemLink>
          <MenuItemLink to="/gaming">
            <GamingIcon />
            <MenuItem>Gaming</MenuItem>
          </MenuItemLink>
          <MenuItemLink to="/">
            <SavedIcon />
            <MenuItem>Saved Videos</MenuItem>
          </MenuItemLink>
        </MenuItemsContainer>
      ) : null}
    </>
  )
}

export default withRouter(Header)
