type typeOfPhotoItem = {
  photo: any
}

export default function PhotoItem({ photo }: typeOfPhotoItem) {
  return (
    <div className="photos">
      <img src={photo.urls.small} />
      <p>Photo By : {photo.user.username}</p>
    </div>
  )
}
