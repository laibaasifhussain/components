import { useState } from "react";
import "./Select.css";

export default function Select({ dselect }) {
  //   console.log(dselect);
  const [opt, setOpt] = useState(1);

  return (
    <select value={opt} onChange={(e) => setOpt(e.target.value)}>
      {dselect.map((x) => (
        <option key={x}>{x}</option>
      ))}
    </select>
  );
}
