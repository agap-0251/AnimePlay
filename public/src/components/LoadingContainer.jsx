import React from "react";

const LoadingContainer = () => {
  return (
    <div className="text-center text-muted">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingContainer;
