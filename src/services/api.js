const BASE_URL =
    "https://ai-content-publisher-backend.onrender.com";

export async function generateSEO(instagramUrl) {

    const token = localStorage.getItem("token");

    const response = await fetch(

        `${BASE_URL}/upload`,

        {

            method: "POST",

            headers: {

                "Content-Type":"application/json",

                Authorization:`Bearer ${token}`,

            },

            body:JSON.stringify({

                instagram_url:instagramUrl,

            }),

        }

    );

    if(!response.ok){

        throw new Error("Generate Failed");

    }

    return await response.json();

}