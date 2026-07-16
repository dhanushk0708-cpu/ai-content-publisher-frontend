function HashtagEditor({

    hashtags,

    setHashtags

}) {

    return (

        <div className="section">

            <h2>Hashtags</h2>

            <textarea

                rows="5"

                cols="60"

                value={hashtags.join(" ")}

                onChange={(e)=>

                    setHashtags(

                        e.target.value.split(" ")

                    )

                }

            />

        </div>

    );

}

export default HashtagEditor;