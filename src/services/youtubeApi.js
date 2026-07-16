const BASE_URL = "http://127.0.0.1:8000";

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