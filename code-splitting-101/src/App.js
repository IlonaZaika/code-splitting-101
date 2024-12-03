import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Page1 = lazy(() => import("./components/Page1"));
const Page2 = lazy(() => import("./components/Page2"));
const Page3 = lazy(() => import("./components/Page3"));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

function Loading() {
  return <h2>Loading...</h2>;
}

export default App;
