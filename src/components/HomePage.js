import axios from "axios";
import React, { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    sendCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   window.addEventListener("message", (e) => {
  //     console.log(e);
  //   });
  // });

  // send countries using postMessage
  const sendCountries = async () => {
    await axios
      .get(
        "http://cdn.jsdelivr.net/gh/stefanbinder/countries-states/countries.json"
      )

      .then((data) => {
        const iframe = document.querySelector("iframe");
        const iframeContentWindow = iframe.contentWindow;
        iframeContentWindow.postMessage(data.data, "http://localhost:3000");
      });
  };

  return (
    <div className="home">
      <div className="green-div">
        <iframe
          src="/forms"
          title="Validation Form"
          height="70%"
          style={{
            border: "2px solid red",
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default HomePage;
