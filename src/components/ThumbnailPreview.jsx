function ThumbnailPreview({

    thumbnail

}) {

    if (!thumbnail) return null;

    return (

        <div className="section">

            <h2>Thumbnail</h2>

            <img

                src={thumbnail}

                alt="Thumbnail"

                width="250"

            />

        </div>

    );

}

export default ThumbnailPreview;