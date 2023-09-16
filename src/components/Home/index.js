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
      console.log(updatedData)
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
        <SearchButton type="button" onClick={this.onClickSearchIcon}>
          <SearchIcon />
        </SearchButton>
      </SearchInputContainer>
    )
  }

  renderLoadingView = () => (
    <ProductsLoaderContainer>
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
    const {showBanner} = this.state
    return (
      <>
        <Header />
        <HomeContainer data-testid="home">
          {showBanner ? <BannerSection closeBanner={this.closeBanner} /> : null}
          {this.renderSearchInput()}
          {this.renderAllVideos()}
        </HomeContainer>
      </>
    )
  }
}

export default Home
