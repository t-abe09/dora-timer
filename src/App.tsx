import "./App.css";
import PlayButton from "./components/paybutton";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <div className="h-[80vh] flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-center">
            <img
              src="/images/dora.png"
              alt="Dora"
              height={"50%"}
              width={"50%"}
            />
          </div>
          <PlayButton />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
