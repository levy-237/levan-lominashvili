import "./index.css";
import Content from "./content/Content";
import { useCursorPosition } from "./hooks/UseCursorPosition";

function App() {
  const { x, y } = useCursorPosition();

  return (
    <div className="relative min-h-full w-full overflow-x-hidden px-6 sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-60 ">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 cursor-gradient"
        style={
          {
            "--cursor-x": `${x}px`,
            "--cursor-y": `${y}px`,
          } as React.CSSProperties
        }
      />
      <Content />
    </div>
  );
}

export default App;
