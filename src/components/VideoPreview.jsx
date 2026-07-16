import {
  FiPlayCircle,
  FiClock,
  FiFilm,
} from "react-icons/fi";

function VideoPreview({ videoUrl }) {

  if (!videoUrl) return null;

  return (

    <div className="preview-card">

      <div className="preview-header">

        <div>

          <h2>Video Preview</h2>

          <p>Review the downloaded Instagram Reel</p>

        </div>

        <div className="preview-badge">

          <FiFilm />

          Ready

        </div>

      </div>

      <div className="video-wrapper">

        <video
          src={videoUrl}
          controls
          preload="metadata"
        />

      </div>

      <div className="video-info">

        <div className="info-item">

          <FiPlayCircle />

          <span>Preview Ready</span>

        </div>

        <div className="info-item">

          <FiClock />

          <span>Downloaded Successfully</span>

        </div>

      </div>

    </div>

  );
}

export default VideoPreview;