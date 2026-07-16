function ErrorCard({

    message

}) {

    if (!message) return null;

    return (

        <div className="section">

            <h2>❌ Something went wrong</h2>

            <p>{message}</p>

            <ul>

                <li>Check backend server</li>

                <li>Check internet connection</li>

                <li>Check Instagram URL</li>

            </ul>

        </div>

    );

}

export default ErrorCard;