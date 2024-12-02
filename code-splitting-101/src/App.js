import "./App.css";
import { useState, lazy, Suspense, Loading } from "react";

import Page1 from "./components/Page1";
const Page2 = lazy(() => import("./components/Page2"));
const Page3 = lazy(() => import("./components/Page3"));

function App() {
  const [route, setRoute] = useState("page1");
  const [Component, setComponent] = useState(null);

  const onRouteChange = (route) => {
    if (route === "page1") {
      setRoute(route);
      setComponent(null);
    } else if (route === "page2") {
      import("./components/Page2")
        .then((module) => {
          setRoute(route);
          setComponent(() => module.default);
        })
        .catch((err) => {});
    } else {
      import("./components/Page3")
        .then((module) => {
          setRoute(route);
          setComponent(() => module.default);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {route === "page1" ? (
        <Page1 onRouteChange={onRouteChange} />
      ) : (
        <Suspense fallback={<Loading />}>
          <Component onRouteChange={onRouteChange} />
        </Suspense>
      )}
    </>
  );
}

export default App;
