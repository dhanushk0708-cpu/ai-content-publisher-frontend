const BASE_URL = "https://ai-content-publisher-backend.onrender.com";

export async function uploadVideo(data) {

    const response = await fetch(`${BASE_URL}/youtube/upload`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

        },

        body: JSON.stringify(data),

    });

    if (!response.ok) {

        throw new Error("Upload Failed");

    }

    return await response.json();

}