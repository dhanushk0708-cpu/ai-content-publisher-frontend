const BASE_URL = "https://ai-content-publisher-backend.onrender.com";

export async function login(username, password) {

    const response = await fetch(
        `${BASE_URL}/auth/login`,
        {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                username,
                password,
            }),

        }
    );

    if (!response.ok) {

        throw new Error("Invalid Username or Password");

    }

    return await response.json();

}