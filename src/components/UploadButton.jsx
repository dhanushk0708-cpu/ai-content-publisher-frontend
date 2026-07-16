function UploadButton({

  onUpload

}) {

  return (

    <div className="section">

      <button onClick={onUpload}>

        Upload to YouTube

      </button>

    </div>

  );

}

export default UploadButton;