import { FiEdit3, FiType, FiFileText } from "react-icons/fi";

function SEOEditor({

  title,
  setTitle,

  description,
  setDescription,

}) {

  return (

    <div className="seo-card">

      <div className="seo-header">

        <div>

          <h2>AI SEO Editor</h2>

          <p>
            Review and edit the generated SEO before uploading.
          </p>

        </div>

      </div>

      <div className="seo-field">

        <label>

          <FiType />

          Title

        </label>

        <input

          type="text"

          value={title}

          onChange={(e) =>
            setTitle(e.target.value)
          }

          placeholder="Video Title"

        />

        <small>

          {title.length} / 100 Characters

        </small>

      </div>

      <div className="seo-field">

        <label>

          <FiFileText />

          Description

        </label>

        <textarea

          rows="10"

          value={description}

          onChange={(e) =>
            setDescription(e.target.value)
          }

          placeholder="Video Description"

        />

        <small>

          {description.length} Characters

        </small>

      </div>

      <div className="seo-footer">

        <FiEdit3 />

        <span>

          Powered by Gemini AI

        </span>

      </div>

    </div>

  );

}

export default SEOEditor;