var countries = [];

window.onload = function () {
  // the URL you have provided was of github raw file and it was not working,
  // so I have changed it to jsdelivr
  const res = fetch(
    "https://cdn.jsdelivr.net/gh/stefanbinder/countries-states/countries.json"
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

function formSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("form");
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const errors = {
    name: "Name is required",
    dob: "Date of Birth is required",
    tel: "Contact is required",
    country: "Country is required",
    state: "State is required",
    email: "Email is required",
  };

  if (data.name === "") {
    sendMessageToParent({
      Name: errors.name,
    });
    return;
  } else if (data.name.length < 4 || data.name.length >= 10) {
    sendMessageToParent({
      Name: "Name should be between 4 to 10 characters",
    });
    return;
  }

  if (data.dob === "") {
    sendMessageToParent({
      DOB: errors.dob,
    });
    return;
  }
  if (data.tel === "") {
    sendMessageToParent({
      Contact: errors.tel,
    });
    return;
  }
  if (data.tel.length < 10 || data.tel.length > 10) {
    sendMessageToParent({
      Contact: "Contact should be of 10 digits only",
    });
    return;
  }
  if (!("country" in data)) {
    sendMessageToParent({
      Country: errors.country,
    });
    return;
  }
  if (!("state" in data)) {
    sendMessageToParent({
      State: errors.state,
    });
    return;
  }
  if (data.email === "") {
    sendMessageToParent({
      Email: errors.email,
    });
    return;
  }
  pass();
}

// postMessage outside iframe

function pass() {
  window.parent.postMessage(
    JSON.stringify({
      Success: "All fields are valid",
    }),
    "*"
  );
}

function sendMessageToParent(result = {}) {
  window.parent.postMessage(JSON.stringify(result), "*");
}
