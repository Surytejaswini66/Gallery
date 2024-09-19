// Write your code here.
import React from 'react'
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isSelected, setSelectedImageId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickThumbnail = () => {
    setSelectedImageId(id)
  }

  const thumbnailClassName = isSelected ? 'thumbnail selected' : 'thumbnail'

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
