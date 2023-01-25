import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Forms from "../components/Forms";
import axios from "axios";

export const PersonContext = createContext();

export function usePerson() {
  return useContext(PersonContext);
}

export const MainApp = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          "http://cdn.jsdelivr.net/gh/stefanbinder/countries-states/countries.json"
        )
        .then((data) => {
          setCountries(data.data);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("message", (e) => {
      console.log(e);
    });
  }, []);

  const value = {};

  return (
    <PersonContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </PersonContext.Provider>
  );
};
