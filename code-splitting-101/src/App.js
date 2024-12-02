import "./App.css";
import { useState, lazy, Suspense } from "react";

import Page1 from "./components/Page1";
const Page2 = lazy(() => import("./components/Page2"));
const Page3 = lazy(() => import("./components/Page3"));

function App() {
  const [route, setRoute] = useState("page1");

  const onRouteChange = (route) => {
    if (route === "page1") {
      setRoute(route);
    } else if (route === "page2") {
      setRoute(route);
    } else {
      setRoute(route);
    }
  };

  return (
    <>
      {route === "page1" ? (
        <Page1 onRouteChange={onRouteChange} />
      ) : route === "page2" ? (
        <Suspense fallback={<Loading />}>
          <Page2 onRouteChange={onRouteChange} />
        </Suspense>
      ) : (
        <Suspense fallback={<Loading />}>
          <Page3 onRouteChange={onRouteChange} />
        </Suspense>
      )}
    </>
  );
}

function Loading() {
  return <h2>Loading...</h2>;
}

export default App;
