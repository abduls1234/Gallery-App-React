// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, activeImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const ThumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnailImage = () => {
    activeImage(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onClickThumbnailImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={ThumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
