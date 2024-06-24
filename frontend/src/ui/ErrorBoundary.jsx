import { useRouteError } from "react-router-dom"

function ErrorBoundary() {
  const error =  useRouteError();
  console.error(error);
  return (
    <div>
      Error
    </div>
  )
}

export default ErrorBoundary
