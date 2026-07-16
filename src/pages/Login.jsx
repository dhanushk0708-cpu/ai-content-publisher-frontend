import { useState } from "react";

import { login } from "../services/authApi";

import "../styles/login.css";

function Login() {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleLogin() {

        try {

            setLoading(true);

            const data = await login(
                username,
                password,
            );

            localStorage.setItem(
                "token",
                data.access_token,
            );

            window.location.href = "/";

        }

        catch (err) {

            alert(err.message);

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="login-page">

            <div className="login-card">

                <h1>

                    🚀 AI Content Publisher

                </h1>

                <p>

                    Admin Login

                </p>

                <input

                    placeholder="Username"

                    value={username}

                    onChange={(e) =>
                        setUsername(e.target.value)
                    }

                />

                <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(e) =>
                        setPassword(e.target.value)
                    }

                />

                <button

                    onClick={handleLogin}

                    disabled={loading}

                >

                    {

                        loading

                            ? "Logging In..."

                            : "Login"

                    }

                </button>

            </div>

        </div>

    );

}

export default Login;