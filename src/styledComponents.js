import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrFormClose} from 'react-icons/gr'
import {AiOutlineSearch, AiFillHome} from 'react-icons/ai'
import {BsCircleFill} from 'react-icons/bs'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

export const LoginFormContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 1110px;
  margin: auto;
  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
export const FormContainer = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  @media screen and (min-width: 767px) {
    width: 350px;
    flex-shrink: 0;
    padding: 64px 48px 64px 48px;
  }
`
export const WebsiteLogo = styled.img`
  width: 120px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #64748b;
`
export const InputElement = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 10px;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`
export const CheckboxLabel = styled(InputLabel)`
  color: #1e293b;
  font-size: 16px;
  font-weight: 500;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #3b82f6;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
export const WebsiteLogoHeader = styled.img`
  width: 90px;
`
export const CustomButton = styled.button`
  background: none;
  border: none;
  margin-left: 3px;
  margin-right: 3px;
`
export const StyledLogOut = styled(FiLogOut)`
  font-size: 22px;
`
export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const MoonTheme = styled(FaMoon)`
  font-size: 22px;
`
export const Menu = styled(GiHamburgerMenu)`
  font-size: 22px;
`
export const HomeContainer = styled.div`
  display: flex;
`
export const HomeBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 10px;
`
export const BannerWebsiteLogo = styled.img`
  width: 140px;
`
export const BannerDescription = styled.p`
  color: #00306e;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.8;
`
export const BannerButton = styled.button`
  background: none;
  border: 1px solid #231f20;
  color: #00306e;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  height: 40px;
  width: 120px;
`
export const CloseButton = styled(CustomButton)`
  align-self: flex-start;
`
export const CloseIcon = styled(GrFormClose)`
  font-size: 22px;
  align-self: flex-start;
`
export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 16px;
  color: #616e7c;
`
export const SearchInputContainer = styled.div`
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
`
export const SearchInput = styled.input`
  background-color: #ffffff;
  border: 1px solid #7e858e;
  color: #000000;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  padding-left: 10px;
  flex-grow: 1;
`
export const SearchButton = styled.button`
  background-color: #ebebeb;
  border: 1px solid #7e858e;
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AllVideosContainer = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
`
export const VideosList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 0;
  width: 100%;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
`
export const VideoItem = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
  width: 100%;
  flex-grow: 0;
  flex-shrink: 1;
  @media screen and (min-width: 576px) {
    width: 48%;
  }
`
export const LinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const NoVideosView = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 64px;
  width: 100%;
  padding-top: 48px;
`
export const CustomImage = styled.img`
  width: 170px;
  height: 130px;
  margin-bottom: 30px;
`
export const NoVideosHeading = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3px;
`
export const NoVideosDescription = styled.p`
  text-align: center;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;
`
export const RetryBtn = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  height: 36px;
  width: 80px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  padding: 10px;
`
export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px;
`
export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const VideoTitle = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 0px;
`
export const DetailsList = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0px;
  list-style-type: none;
  margin-top: 10px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    margin-top: 0px;
  }
`
export const ChannelName = styled.li`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    align-self: flex-start;
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 16px;
  }
`
export const ChannelViewCount = styled(ChannelName)`
  @media screen and (min-width: 576px) {
    font-size: 13px;
  }
`
export const PublishedDate = styled(ChannelName)`
  @media screen and (min-width: 576px) {
    font-size: 13px;
  }
`
export const CircleDot1 = styled(BsCircleFill)`
  font-size: 4px;
  color: #94a3b8;
  margin-left: 6px;
  margin-right: 6px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const CircleDot = styled(BsCircleFill)`
  font-size: 4px;
  color: #94a3b8;
  margin-left: 6px;
  margin-right: 6px;
`
export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
export const ViewsAndDateContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    align-self: flex-start;
  }
`
export const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`
export const MenuItemLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`
export const HomeIcon = styled(AiFillHome)`
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
  color: #475569;
`
export const TrendingIcon = styled(HiFire)`
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
  color: #475569;
`
export const GamingIcon = styled(SiYoutubegaming)`
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
  color: #475569;
`
export const SavedIcon = styled(BiListPlus)`
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
  color: #475569;
`
export const MenuItem = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 10px;
`
