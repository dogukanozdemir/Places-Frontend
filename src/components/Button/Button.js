import "./Button.css";

export function Button({ text, onClick }) {
  return (
    <div className="class-button" onClick={onClick}>
      {text}
    </div>
  );
}
