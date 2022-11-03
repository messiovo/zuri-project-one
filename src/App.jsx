import { Home, Contact } from "./Page";
import { Footer } from "./Component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="px-8 py-10 flex flex-col items-center gap-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
