import React from "react";
import { useState } from "react";

export default function useToogle({
  initialValue = false,
  onToggle = () => {},
}) {
  const [on, setOn] = useState(initialValue);

  function toggle() {
    setOn((previousValue) => !previousValue);
  }

  return [on, toggle];
}
