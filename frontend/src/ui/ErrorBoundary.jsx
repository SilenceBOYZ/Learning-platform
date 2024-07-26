import { useRouteError } from "react-router-dom"

function ErrorBoundary() {
  const error =  useRouteError();
  console.error(error);
  return (
    <div className="min-h-[100dvh]">
      Error
    </div>
  )
}

export default ErrorBoundary
