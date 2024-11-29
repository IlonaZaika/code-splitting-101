import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import Page1 from "./components/Page1";

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
        Component && <Component onRouteChange={onRouteChange} />
      )}
    </>
  );
}

export default App;
