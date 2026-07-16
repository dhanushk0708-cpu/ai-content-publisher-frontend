const BASE_URL =
  "https://ai-content-publisher-backend.onrender.com";

export async function uploadVideo(data) {

  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please login first.");
  }

  const response = await fetch(
    `${BASE_URL}/youtube/upload`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },

      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.detail || "Upload Failed");
  }

  return result;
}