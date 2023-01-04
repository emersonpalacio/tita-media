import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

function App() {
  const clientID =
    "152246615921-plavoo3cte9rc53n7pdfn9p7lbgm2oa1.apps.googleusercontent.com";
  const [user, setUser] = useState({});

  const onSuccess = (response) => {
    setUser(response.profileObj);
    document.getElementsByClassName("btn").hidden = true;
  };
  const onFailure = (response) => {
    console.log("Something went wrong");
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="center">
      <div class={user ? "profile" : "hidden"}>
        <h3>{user.name}</h3>
      </div>

      <div className="btn">
        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Continue  with Google"
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default App;
