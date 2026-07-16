import { useState } from "react";

import "../styles/dashboard.css";
import "../styles/components.css";

import UrlForm from "../components/UrlForm";
import VideoPreview from "../components/VideoPreview";
import ThumbnailPreview from "../components/ThumbnailPreview";
import SEOEditor from "../components/SEOEditor";
import AlternativeTitleSelector from "../components/AlternativeTitleSelector";
import HashtagEditor from "../components/HashtagEditor";
import LoadingCard from "../components/LoadingCard";
import ErrorCard from "../components/ErrorCard";
import UploadSettings from "../components/UploadSettings";
import UploadButton from "../components/UploadButton";
import DashboardHeader from "../components/DashboardHeader";
import StatsCards from "../components/StatsCards";
import AppLayout from "../components/AppLayout";

import { generateSEO } from "../services/api";
import { uploadVideo } from "../services/youtubeApi";

function Dashboard() {

  const [instagramUrl, setInstagramUrl] = useState("");

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const [uploading, setUploading] = useState(false);

  const [error, setError] = useState("");

  const [videoUrl, setVideoUrl] = useState("");

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [hashtags, setHashtags] = useState([]);

  const [privacy, setPrivacy] = useState("public");

  const [category, setCategory] = useState("26");

  async function handleGenerate() {

    try {

      setLoading(true);
      setError("");
      setVideoUrl("");

      const data = await generateSEO(instagramUrl);

      console.log("API Response:", data);

      setResult(data);

      setTitle(data.seo.title);
      setDescription(data.seo.description);
      setHashtags(data.seo.hashtags);

    } catch (err) {

      console.error(err);

      setError(err.message);

    } finally {

      setLoading(false);

    }

  }

  async function handleUpload() {

  try {

    if (!result) {
      alert("Generate SEO first.");
      return;
    }

    setUploading(true);

    setError("");

    const filename = result.video.url.split("/").pop();

    const response = await uploadVideo({

      video_path: `storage/videos/${filename}`,

      title: title.trim(),

      description: description.trim(),

      hashtags,

      privacy,

      category,

    });

    console.log("Upload Response:", response);

    setVideoUrl(response.url);

    alert("✅ Uploaded Successfully!");

  } catch (err) {

    console.error(err);

    alert(err.message || "Upload Failed");

  } finally {

    setUploading(false);

  }

}
  return (

    <AppLayout>

      <div className="dashboard">

        <DashboardHeader />

        <StatsCards />

        <UrlForm
          instagramUrl={instagramUrl}
          setInstagramUrl={setInstagramUrl}
          onGenerate={handleGenerate}
        />

        {loading && <LoadingCard />}

        <ErrorCard message={error} />

        {result && (

          <div className="result-container">

            {/* LEFT */}

            <div className="left-panel">

              <div className="card">

                <VideoPreview
                  videoUrl={result.video.url}
                />

              </div>

              <div className="card">

                <ThumbnailPreview
                  thumbnail={result.video.thumbnail}
                />

              </div>

            </div>

            {/* RIGHT */}

            <div className="right-panel">

              <div className="card">

                <AlternativeTitleSelector
                  titles={result.seo.alternative_titles}
                  onSelect={setTitle}
                />

              </div>

              <div className="card">

                <SEOEditor
                  title={title}
                  setTitle={setTitle}
                  description={description}
                  setDescription={setDescription}
                />

              </div>

              <div className="card">

                <HashtagEditor
                  hashtags={hashtags}
                  setHashtags={setHashtags}
                />

              </div>

              <div className="card">

                <UploadSettings
                  privacy={privacy}
                  setPrivacy={setPrivacy}
                  category={category}
                  setCategory={setCategory}
                />

              </div>

              <div className="card upload-card">

                <UploadButton
                  onUpload={handleUpload}
                  disabled={uploading}
                />

                {uploading && (

                  <div className="upload-status">

                    <div className="spinner"></div>

                    <h3>Uploading to YouTube...</h3>

                    <p>Please wait while your video is uploading...</p>

                  </div>

                )}

                {videoUrl && (

                  <div className="success-box">

                    <h2>✅ Upload Successful</h2>

                    <p>Your video has been uploaded successfully.</p>

                    <a
                      href={videoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      🎬 Open YouTube Video
                    </a>

                  </div>

                )}

              </div>

            </div>

          </div>

        )}

      </div>

    </AppLayout>

  );

}

export default Dashboard;