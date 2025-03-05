import { useState } from "react";

export default function Card({ title, description }) {
  const [active, setActive] = useState(false);

  return (
    <div className={`card ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Click Me</button>
    </div>
  );
}
