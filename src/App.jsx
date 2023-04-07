import { BrowserRouter } from "react-router-dom";

import { Navbar, Home, About, StarsCanvas } from "./components";

function App() {
  return (
    <BrowserRouter>
      <StarsCanvas />
      <div>
        <div className="text-3xl font-bold">My react app</div>
      </div>
      <Navbar />
      <Home />
      <About />
    </BrowserRouter>
  );
}

export default App;
