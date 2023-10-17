import React from "react";

export default function ComponentBoxName({ children }) {
  return (
    <div className="componentBox-name">
      <h2>{children}</h2>
    </div>
  );
}
