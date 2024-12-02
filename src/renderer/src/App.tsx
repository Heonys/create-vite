import { DraggableFrame, RootLayout } from "@/src/components";

const App = () => {
  return (
    <>
      <DraggableFrame />
      <RootLayout>
        <div className="flex size-full items-center justify-center">
          <h1 className="text-3xl text-blue-400">Hello world!</h1>
          <div className="flex gap-2 text-black">
            <button onClick={() => window.api.sendFrameAction("CLOSE")}>close</button>
            <button onClick={() => window.api.sendFrameAction("MINIMIZE")}>minimize</button>
            <button onClick={() => window.api.sendFrameAction("MAXIMIZE")}>maximize</button>
          </div>
        </div>
      </RootLayout>
    </>
  );
};

export default App;
