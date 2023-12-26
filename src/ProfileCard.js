function ProfileCard({ title, handle, imageSrc, description }) {
  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={imageSrc} alt="digital assistant logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>

        <div class="content">
          {description}
          <br></br>
          <br></br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

//
//<div>PlaceCard</div>
