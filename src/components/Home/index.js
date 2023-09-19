import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import BannerSection from '../BannerSection'
import VideoCard from '../VideoCard'
import {
  HomeContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
  AllVideosContainer,
  VideosList,
  NoVideosView,
  CustomImage,
  NoVideosHeading,
  NoVideosDescription,
  RetryBtn,
  ProductsLoaderContainer,
  HomeBodyContainer,
  SideBarContainer,
  MenuItemsContainer,
  MenuItemLink,
  HomeIcon,
  MenuItem,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
  ContactUsContainer,
  ContactUsText,
  SocialMediaAppsContainer,
  SocialMediaAppImg,
  ContactUsDescription,
} from '../../styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    showBanner: true,
    apiStatus: apiStatusConstants.initial,
    showMenu: false,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getFormattedChannel = channel => ({
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  })

  getAllVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        channel: this.getFormattedChannel(video.channel),
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchIcon = () => {
    this.getAllVideos()
  }

  onClickRetry = () => {
    this.getAllVideos()
  }

  clickMenu = () => {
    this.setState(prevState => ({showMenu: !prevState.showMenu}))
  }

  renderSearchInput = () => {
    const {searchInput} = this.state

    return (
      <SearchInputContainer>
        <SearchInput
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
          placeholder="Search"
        />
        <SearchButton
          type="button"
          onClick={this.onClickSearchIcon}
          data-testid="searchButton"
        >
          <SearchIcon />
        </SearchButton>
      </SearchInputContainer>
    )
  }

  renderLoadingView = () => (
    <ProductsLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  renderFailureView = () => (
    <NoVideosView>
      <CustomImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <NoVideosHeading>Oops! Something Went Wrong</NoVideosHeading>
      <NoVideosDescription>
        We are having some trouble to complete your request. Please try again.
      </NoVideosDescription>
      <RetryBtn type="button" onClick={this.onClickRetry}>
        Retry
      </RetryBtn>
    </NoVideosView>
  )

  renderVideosListView = () => {
    const {videosList} = this.state
    const shouldShowVideosList = videosList.length > 0

    return shouldShowVideosList ? (
      <AllVideosContainer>
        <VideosList>
          {videosList.map(video => (
            <VideoCard videoData={video} key={video.id} />
          ))}
        </VideosList>
      </AllVideosContainer>
    ) : (
      <NoVideosView>
        <CustomImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoVideosHeading>No Search results found</NoVideosHeading>
        <NoVideosDescription>
          Try different key words or remove search filter
        </NoVideosDescription>
        <RetryBtn type="button" onClick={this.onClickRetry}>
          Retry
        </RetryBtn>
      </NoVideosView>
    )
  }

  renderSideBar = () => (
    <SideBarContainer>
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
      <ContactUsContainer>
        <ContactUsText>CONTACT US</ContactUsText>
        <SocialMediaAppsContainer>
          <SocialMediaAppImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <SocialMediaAppImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <SocialMediaAppImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </SocialMediaAppsContainer>
        <ContactUsDescription>
          Enjoy! Now to see your channels and recommendations!
        </ContactUsDescription>
      </ContactUsContainer>
    </SideBarContainer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {showBanner, showMenu} = this.state
    return (
      <>
        <Header clickMenu={this.clickMenu} showMenu={showMenu} />
        <HomeContainer data-testid="home">
          {this.renderSideBar()}
          <HomeBodyContainer>
            {showBanner ? (
              <BannerSection closeBanner={this.closeBanner} />
            ) : null}
            {this.renderSearchInput()}
            {this.renderAllVideos()}
          </HomeBodyContainer>
        </HomeContainer>
      </>
    )
  }
}

export default Home
