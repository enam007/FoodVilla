import { useRouteError } from "react-router-dom";

const Error = () => {
  const { data, status, statusText } = useRouteError();
  console.log(data, status, statusText);

  return (
    <div className="error-message">
      <h1>Oops Something Went Wrong</h1>
      <h2>
        {data} Status: {status + " " + statusText}
      </h2>
    </div>
  );
};

export default Error;
