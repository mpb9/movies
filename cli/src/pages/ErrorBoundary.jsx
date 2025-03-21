import PropTypes from "prop-types";
import { useEffect, useState } from "react";

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
};

// ! this might work, but havent added error boundary yet
export default function ErrorBoundary({ children, fallback }) {
  const { error, handleError } = useErrorHandler();

  useEffect(() => {
    try {
      // Assume we can run some rendering logic here
    } catch (err) {
      handleError(err);
    }
  }, [handleError]);

  if (error) {
    return fallback || <h1>Something went wrong.</h1>;
  }
  return children;
}

function useErrorHandler() {
  const [error, setError] = useState(null);

  const handleError = (err) => {
    setError(err);
  };

  return { error, handleError };
}
