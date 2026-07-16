const BASE_URL = "https://ai-content-publisher-backend.onrender.com";

export async function generateSEO(instagramUrl) {

    const response = await fetch(`${BASE_URL}/upload`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            instagram_url: instagramUrl,
        }),

    });

    if (!response.ok) {

        throw new Error("Failed to generate content");

    }

    return await response.json();
}