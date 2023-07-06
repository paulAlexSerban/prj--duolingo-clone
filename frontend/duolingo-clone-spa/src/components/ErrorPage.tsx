
import "../styles/errorpage.css";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div id="error-page">
      <h1>Error: 404</h1>
      <p>Unexpected error has occurred</p>
      <p>
        <i>
          {error?.statusText || error?.message || "Unknown error"}
        </i>
      </p>
    </div>
  );
}

export default ErrorPage;