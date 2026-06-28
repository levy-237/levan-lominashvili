import "./index.css";
import Content from "./content/Content";
import { useCursorPosition } from "./hooks/UseCursorPosition";

function App() {
  const { x, y } = useCursorPosition();

  return (
    <div
      className="relative h-full w-full overflow-x-hidden cursor-gradient px-6 lg:px-60"
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
