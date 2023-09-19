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
  DesktopOptionsContainer,
  ProfileImg,
  LogoutBtn,
  StyledPopup,
  ModalContainer,
  ModalDescription,
  ModalButtonsContainer,
  ModalButton,
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
          <StyledPopup
            modal
            trigger={
              <CustomButton type="button">
                <StyledLogOut />
              </CustomButton>
            }
          >
            {close => (
              <>
                <ModalContainer>
                  <ModalDescription>
                    Are you sure you want to logout?
                  </ModalDescription>
                  <ModalButtonsContainer>
                    <ModalButton type="button" onClick={() => close()} outline>
                      Cancel
                    </ModalButton>
                    <ModalButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ModalButton>
                  </ModalButtonsContainer>
                </ModalContainer>
              </>
            )}
          </StyledPopup>
        </OptionsContainer>
        <DesktopOptionsContainer>
          <CustomButton type="button" data-testid="theme">
            <MoonTheme />
          </CustomButton>
          <ProfileImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <StyledPopup
            modal
            trigger={<LogoutBtn type="button">Logout</LogoutBtn>}
          >
            {close => (
              <>
                <ModalContainer>
                  <ModalDescription>
                    Are you sure you want to logout?
                  </ModalDescription>
                  <ModalButtonsContainer>
                    <ModalButton type="button" onClick={() => close()} outline>
                      Cancel
                    </ModalButton>
                    <ModalButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ModalButton>
                  </ModalButtonsContainer>
                </ModalContainer>
              </>
            )}
          </StyledPopup>
        </DesktopOptionsContainer>
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
