import { FiInstagram, FiArrowRight } from "react-icons/fi";

function UrlForm({
  instagramUrl,
  setInstagramUrl,
  onGenerate,
}) {
  return (
    <section className="hero-banner">

      <div className="hero-content">

        <span className="hero-badge">
          ✨ AI Powered Content Generator
        </span>

        <h1>
          Turn Instagram Reels into
          <span> YouTube Content</span>
        </h1>

        <p>
          Download reels, generate SEO using Gemini AI,
          preview everything, and upload directly to
          YouTube in one click.
        </p>

      </div>

      <div className="url-card">

        <div className="url-input">

          <FiInstagram className="url-icon" />

          <input
            type="text"
            placeholder="Paste Instagram Reel URL..."
            value={instagramUrl}
            onChange={(e) =>
              setInstagramUrl(e.target.value)
            }
          />

        </div>

        <button
          className="generate-btn"
          onClick={onGenerate}
        >

          Generate SEO

          <FiArrowRight />

        </button>

      </div>

    </section>
  );
}

export default UrlForm;