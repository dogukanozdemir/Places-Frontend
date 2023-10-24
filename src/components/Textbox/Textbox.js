// Textbox.js
import "./Textbox.css";

export function Textbox({ header, value, onChange }) {
  return (
    <div className="text-box">
      <label>{header}</label>
      <input
        type="text"
        className="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
