import {
  BannerContainer,
  BannerContent,
  BannerWebsiteLogo,
  BannerDescription,
  BannerButton,
  CloseButton,
  CloseIcon,
} from '../../styledComponents'

const BannerSection = props => {
  const {closeBanner} = props
  const onClickCloseIcon = () => {
    closeBanner()
  }
  return (
    <BannerContainer data-testid="banner">
      <BannerContent>
        <BannerWebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerDescription>
        <BannerButton type="button">GET IT NOW</BannerButton>
      </BannerContent>
      <CloseButton type="button">
        <CloseIcon data-testid="close" onClick={onClickCloseIcon} />
      </CloseButton>
    </BannerContainer>
  )
}

export default BannerSection
