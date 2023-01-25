import React, { useEffect, useState } from "react";
import { inputFields } from "../static/static-data";

function Forms() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    window.addEventListener("message", (e) => {
      setCountries(e.data);
      console.log(e.data);
    });
  }, [countries, setCountries]);

  const submit = (e) => {
    e.preventDefault();
    // send message using postMessage
  };

  return (
    <form className="form-body" onSubmit={submit}>
      Can You Please Provide Your Personal Details?
      {inputFields.map((inputField) => (
        <div key={inputField.name} className="form-item">
          <label htmlFor={inputField.name}>{inputField.name}</label>
          <input
            type={inputField.type}
            name={inputField.name}
            placeholder={inputField.placeholder}
            required={inputField.required}
            minLength={inputField.minLength}
            maxLength={inputField.maxLength}
          />
        </div>
      ))}
      <label htmlFor="country">Select Country</label>
      {countries.length > 0 && (
        <select name="country" id="country">
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      )}
      <label htmlFor="state">Select State</label>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default Forms;
