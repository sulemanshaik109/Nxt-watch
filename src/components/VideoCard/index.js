import {formatDistanceToNow} from 'date-fns'
import {
  VideoItem,
  LinkItem,
  ThumbnailImage,
  VideoDetailsContainer,
  ChannelLogo,
  VideoContent,
  VideoTitle,
  DetailsList,
  ChannelName,
  ChannelViewCount,
  PublishedDate,
  CircleDot1,
  CircleDot,
  ViewsAndDateContainer,
} from '../../styledComponents'

const ProductCard = props => {
  const {videoData} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = videoData
  const {name, profileImageUrl} = channel

  return (
    <VideoItem>
      <LinkItem to={`/videos/${id}`}>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <VideoContent>
            <VideoTitle>{title}</VideoTitle>
            <DetailsList>
              <ChannelName>{name}</ChannelName>
              <CircleDot1 />
              <ViewsAndDateContainer>
                <ChannelViewCount>{viewCount} views</ChannelViewCount>
                <CircleDot />
                <PublishedDate>
                  {formatDistanceToNow(new Date(publishedAt))}
                </PublishedDate>
              </ViewsAndDateContainer>
            </DetailsList>
          </VideoContent>
        </VideoDetailsContainer>
      </LinkItem>
    </VideoItem>
  )
}
export default ProductCard
