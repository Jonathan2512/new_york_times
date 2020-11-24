import React, { useState, useEffect } from "react";
// third party
import { Router, Route} from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import { useTranslation } from "react-i18next";
// components
import HomePage from "components/HomePage/HomePage";
import TopBar from "components/TopBar/TopBar";
import SearchPage from "components/SearchPage/SearchPage";
import "./App.css";
const history = createHistory();
function App() {
  const { t, i18n } = useTranslation();
  const [initialized, setInitialized] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  };
  useEffect(() => {
    if (!initialized) {
      changeLanguage(localStorage.getItem("language") || "en");
      setInitialized(true);
    }
  });
  return (
    <div className="App">
      <Router history={history}>
        <TopBar />
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/" exact component={SearchPage} /> */}
      </Router>
    </div>
  );
}

export default App;
