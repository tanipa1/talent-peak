import { useRouteError } from "react-router-dom";
import './ErrorPage.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, Page Not Found. Please enter a valid Link</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}