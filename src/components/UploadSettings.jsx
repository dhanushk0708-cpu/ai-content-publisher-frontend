function UploadSettings({

  privacy,

  setPrivacy,

  category,

  setCategory

}) {

  return (

    <div className="section">

      <h2>Upload Settings</h2>

      <label>Privacy</label>

      <br />

      <select

        value={privacy}

        onChange={(e) => setPrivacy(e.target.value)}

      >

        <option value="public">Public</option>

        <option value="unlisted">Unlisted</option>

        <option value="private">Private</option>

      </select>

      <br /><br />

      <label>Category</label>

      <br />

      <select

        value={category}

        onChange={(e) => setCategory(e.target.value)}

      >

        <option value="22">People & Blogs</option>
        <option value="26">Howto & Style</option>
        <option value="24">Entertainment</option>

      </select>

    </div>

  );

}

export default UploadSettings;