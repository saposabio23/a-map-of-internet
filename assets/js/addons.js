// /* -----------------------------------
// SOUNDS UI
// -------------------------------------- */
// montre ABOUT ou le chache
let sideLeft = document.querySelector(".sideLeft");
let buttonAbout = document.querySelector("#buttonAbout");
let imgAbout = document.querySelector("#buttonAbout img");
let spanAbout = document.querySelector("#buttonAbout span");

buttonAbout.addEventListener("mouseenter", (e) => {
  if (sideLeft.getAttribute("data-status") === "close") {
    buttonAbout.innerHTML = "<span>About</span>";
  }
});

buttonAbout.addEventListener("mouseleave", (e) => {
  if (sideLeft.getAttribute("data-status") === "close") {
    buttonAbout.innerHTML = "<img src='assets/img/about.png'>";
  }
});

function showAbout() {
  if (sideLeft.getAttribute("data-status") === "close") {
    sideBottom.classList.remove("sideTopBottomOpen");
    buttonIndex.innerHTML = "<img src='assets/img/Index.png'>";
    sideBottom.setAttribute("data-status", "close");
    setTimeout(() => {
      sideLeft.classList.add("sideLeftRightOpen");
      buttonAbout.innerHTML = "<img src='assets/img/close1.png'>";
      sideLeft.setAttribute("data-status", "open");
    }, "300");
  } else if (sideLeft.getAttribute("data-status") === "open") {
    buttonAbout.innerHTML = "<img src='assets/img/about.png'>";
    sideLeft.classList.remove("sideLeftRightOpen");
    sideLeft.setAttribute("data-status", "close");
  }
}
buttonAbout.addEventListener("click", showAbout);

// montre FAVORITES ou le chache
let sideRight = document.querySelector(".sideRight");
let buttonFavorites = document.querySelector("#buttonFavorites");
let imgFavorites = document.querySelector("#buttonFavorites img");
let spanFavorites = document.querySelector("#buttonFavorites span");

buttonFavorites.addEventListener("mouseenter", (e) => {
  if (sideRight.getAttribute("data-status") === "close") {
    buttonFavorites.innerHTML = "<span>Favorites</span>";
  }
});

buttonFavorites.addEventListener("mouseleave", (e) => {
  if (sideRight.getAttribute("data-status") === "close") {
    buttonFavorites.innerHTML = "<img src='assets/img/favorites.png'>";
  }
});

function showFavorites() {
  if (sideRight.getAttribute("data-status") === "close") {
    sideBottom.classList.remove("sideTopBottomOpen");
    buttonIndex.innerHTML = "<img src='assets/img/Index.png'>";
    sideBottom.setAttribute("data-status", "close");
    // imgFavorites.src = "assets/img/close1.png";

    setTimeout(() => {
      sideRight.classList.add("sideLeftRightOpen");
      buttonFavorites.innerHTML = "<img src='assets/img/close1.png'>";
      sideRight.setAttribute("data-status", "open");
    }, "300");
  } else if (sideRight.getAttribute("data-status") === "open") {
    buttonFavorites.innerHTML = "<img src='assets/img/favorites.png'>";
    sideRight.classList.remove("sideLeftRightOpen");
    sideRight.setAttribute("data-status", "close");
  }
}
buttonFavorites.addEventListener("click", showFavorites);

// montre INDEX ou le chache
let sideBottom = document.querySelector(".sideBottom");
let buttonIndex = document.querySelector("#buttonIndex");
let imgIndex = document.querySelector("#buttonIndex img");
let spanIndex = document.querySelector("#buttonIndex span");

buttonIndex.addEventListener("mouseenter", (e) => {
  if (sideBottom.getAttribute("data-status") === "close") {
    buttonIndex.innerHTML = "<span>Index</span>";
  }
});

buttonIndex.addEventListener("mouseleave", (e) => {
  if (sideBottom.getAttribute("data-status") === "close") {
    buttonIndex.innerHTML = "<img src='assets/img/index.png'>";
  }
});

function showIndex() {
  if (sideBottom.getAttribute("data-status") === "close") {
    sideRight.classList.remove("sideLeftRightOpen");
    buttonFavorites.innerHTML = "<img src='assets/img/favorites.png'>";
    sideRight.setAttribute("data-status", "close");

    sideLeft.classList.remove("sideLeftRightOpen");
    buttonAbout.innerHTML = "<img src='assets/img/about.png'>";
    sideLeft.setAttribute("data-status", "close");

    setTimeout(() => {
      sideBottom.classList.add("sideTopBottomOpen");
      buttonIndex.innerHTML = "<img src='assets/img/close1.png'>";
      sideBottom.setAttribute("data-status", "open");
    }, "300");
  } else if (sideBottom.getAttribute("data-status") === "open") {
    sideBottom.classList.remove("sideTopBottomOpen");
    buttonIndex.innerHTML = "<img src='assets/img/Index.png'>";
    sideBottom.setAttribute("data-status", "close");
  }
}
buttonIndex.addEventListener("click", showIndex);

// restart tool
let blackScreen = document.querySelector(".blackScreen");

buttonRestart.addEventListener("mouseenter", (e) => {
  if (buttonRestart.getAttribute("data-status") === "no") {
    document.getElementById("restarting").classList.add("restarting");
    document.getElementById("restarting").innerHTML = "Restart the map?";
  }
});

buttonRestart.addEventListener("mouseleave", (e) => {
  if (buttonRestart.getAttribute("data-status") === "no") {
    document.getElementById("restarting").classList.remove("restarting");
    document.getElementById("restarting").innerHTML = "A map of Inter.net";
  }
});

function reload() {
  buttonRestart.setAttribute("data-status", "yes");
  if (buttonRestart.getAttribute("data-status") === "yes") {
    document.getElementById("restarting").classList.add("bybyeng");
    document.getElementById("restarting").innerHTML = "Bye-bye 👋";

    blackScreen.classList.remove("hidden");
    blackScreen.classList.add("appearsLong");

    setTimeout(() => {
      location.reload();
    }, "2100");
  }
}
buttonRestart.addEventListener("click", reload);

// zoom slider

var zoomValue = 100;
var zoomButton = document.getElementById("zoomButton");

function zoomPage() {
  if (zoomValue === 100) {
    zoomValue = 40;
    document.body.style.setProperty("--zoom", zoomValue + "%");
    zoomButton.innerHTML = "◉";
  } else if (zoomValue === 40) {
    zoomValue = 100;
    document.body.style.setProperty("--zoom", zoomValue + "%");
    zoomButton.innerHTML = "◎";
  }
}

zoomButton.addEventListener("click", zoomPage);

addEventListener("keydown", (event) => {
  if (event.code == "Escape") {
    event.preventDefault(); // Prevent the default action
    sideRight.classList.remove("sideLeftRightOpen");
    buttonFavorites.innerHTML = "<img src='assets/img/favorites.png'>";
    sideRight.setAttribute("data-status", "close");

    sideLeft.classList.remove("sideLeftRightOpen");
    buttonAbout.innerHTML = "<img src='assets/img/about.png'>";
    sideLeft.setAttribute("data-status", "close");

    sideBottom.classList.remove("sideTopBottomOpen");
    buttonIndex.innerHTML = "<img src='assets/img/Index.png'>";
    sideBottom.setAttribute("data-status", "close");
  } else {
  }
});

// email stuff
function sendMail() {
  document.getElementById("buttonToSend").innerHTML =
    "Sending <img src='./assets/img/spinner.gif'></img>";

  var params = {
    email: document.getElementById("email").value,
    message: document.getElementById("message").innerHTML,
  };
  console.log(params.email);
  console.log(params.message);

  const serviceID = "cartography";
  const templateID = "cartography_template";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("message").value = "";
      document.getElementById("message").innerHTML = "";

      console.log(res);

      document.getElementById("buttonToSend").remove();
      document.getElementById("email").remove();

      let sendAlert = document.createElement("span");
      sendAlert.className = "sendAlert";
      sendAlert.innerHTML = "Sent to <u>" + params.email + "</u> successfully!";
      document.querySelector(".sender").appendChild(sendAlert);

      // alert("Your message sent successfully!!")
    })
    .catch((err) => {
      console.log(err);

      document.getElementById("buttonToSend").remove();

      let sendAlert = document.createElement("span");
      sendAlert.className = "sendAlert";
      sendAlert.innerHTML = "Couldn't send it. Try again :(";
      document.querySelector(".sender > div").appendChild(sendAlert);
    });
}
