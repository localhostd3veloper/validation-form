var countries = [];

window.onload = function () {
  //  get countries

  // the URL you have provided was of github raw file, so I have changed it to jsdelivr
  const res = fetch(
    "http://cdn.jsdelivr.net/gh/stefanbinder/countries-states/countries.json"
  );
  res.then((data) => {
    data.json().then((data) => {
      countries = data;
      countries.forEach((country) => {
        document.getElementById(
          "country"
        ).innerHTML += `<option value="${country.name}">${country.name}</option>`;
      });
    });
  });
};

function getState() {
  countries.length > 0 &&
    countries.forEach((country) => {
      if (country.name === document.getElementById("country").value) {
        country.states.forEach((state) => {
          document.getElementById(
            "state"
          ).innerHTML += `<option value="${state.name}">${state.name}</option>`;
        });
      }
    });
}
