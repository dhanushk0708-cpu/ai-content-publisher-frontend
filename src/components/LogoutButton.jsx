function LogoutButton() {

    function logout() {

        localStorage.removeItem("token");

        window.location.reload();

    }

    return (

        <button
            onClick={logout}
        >

            Logout

        </button>

    );

}

export default LogoutButton;