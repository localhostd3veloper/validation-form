import React, { createContext, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Forms from "../components/Forms";

export const PersonContext = createContext();

export function usePerson() {
  return useContext(PersonContext);
}

export const TicketProvider = () => {
  useEffect(() => {
    async function fetchData() {}
    fetchData();
  }, []);

  useEffect(() => {}, []);

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
