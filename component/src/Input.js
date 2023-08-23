import { useState } from "react";
import "./Input.css";

export default function Input({ dtext }) {
  const [text, setText] = useState(dtext);
  return (
    <span>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </span>
  );
}
