import "./index.css";
import Content from "./content/Content";
import { useCursorPosition } from "./hooks/UseCursorPosition";

function App() {
  const { x, y } = useCursorPosition();

  return (
    <div
      className="relative w-full h-full cursor-gradient px-60"
      style={
        {
          "--cursor-x": `${x}px`,
          "--cursor-y": `${y}px`,
        } as React.CSSProperties
      }
    >
      <Content />
    </div>
  );
}

export default App;
