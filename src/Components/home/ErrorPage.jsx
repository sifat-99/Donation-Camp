import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-container grid  max-w-screen-sm mx-auto mt-64">
      <div className="error-content">
        <h1 className="error-title text-4xl">Oops! Something went wrong.</h1>
        <p className="error-message text-2xl mt-5">Error Code: 404</p>
        <p className="error-description mt-3">Sorry!!!</p>


        <div className="">
        <button className="error-button btn btn-primary mt-6 mr-6" onClick={() => window.location.reload()}>
            Refresh
        </button>
        <Link to={'/'}><button className="error-button btn btn-secondary mt-6">Back to Home</button></Link>
        </div>
        </div>
    </div>
  );
};

export default ErrorPage;