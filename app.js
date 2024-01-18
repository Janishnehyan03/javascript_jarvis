const btn = document.querySelector(".talk");
const icon = document.querySelector(".fa-microphone-alt");
const content = document.querySelector(".content");
const response = document.querySelector(".response");

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;

  // Play AI sound effect here (e.g., beep or any other sound)
  playAISoundEffect(function () {
    // Display the response text
    response.textContent = text;

    // Speak the provided text after the sound effect has completed
    window.speechSynthesis.speak(text_speak);
  });
}

// Function to play AI sound effect with a callback for completion
function playAISoundEffect(callback) {
  // Implement your AI sound effect logic here (e.g., play a beep sound)
  // Example: You can use an HTML audio element to play a sound
  const audio = new Audio("sound.mp3"); // Replace 'path/to/sound.mp3' with your sound file

  // Set up an event listener for the 'ended' event
  audio.addEventListener("ended", function () {
    // Call the callback function when the sound effect has completed
    callback();
  });

  // Start playing the sound effect
  audio
    .play()
    .then(() => {
      // Success - audio started playing
    })
    .catch((error) => {
      // Log the error or handle it appropriately
      console.error("Error starting audio playback:", error);
      // Call the callback to ensure the code continues execution
      callback();
    });
}

function wishMe() {
  var day = new Date();
  var hour = day.getHours();

  if (hour >= 0 && hour < 12) {
    speak("Good Morning Boss...");
  } else if (hour >= 12 && hour < 17) {
    speak("Good Afternoon Master...");
  } else if (hour >= 17 && hour < 20) {
    speak("Good Evening Sir...");
  } else {
    speak("Good Night Sir...");
  }
}

window.addEventListener("load", () => {
  // speak("Initializing Expo Assistant..");
  // wishMe();
  speak("hello");
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  icon.style.color = "white";
  // enable the button..
  btn.disabled = false;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  // content.textContent = "Listening....";
  // change the color of button to red..
  icon.style.color = "red";
  // disable the button..
  btn.disabled = true;
  recognition.start();
});

function takeCommand(message) {
  if (
    message.includes("hey") ||
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hai") ||
    message.includes("hay") ||
    message.includes("hayy")
  ) {
    speak("Hello Sir, How May I Help You?");
  } else if (message.includes("Assistant")) {
    speak("How may i help you sir?");
  } else if (
    message.includes("Bye") ||
    message.includes("bye") ||
    message.includes("goodbye") ||
    message.includes("goodbye.") ||
    message.includes("Goodbye") ||
    message.includes("good bye") ||
    message.includes("Good bye")
  ) {
    speak("Goodbye Sir, Have a nice day.");
  } else if (
    message.includes(
      "who are you" ||
        "what is your name?" ||
        "what's your name?" ||
        "what's the name"
    )
  ) {
    speak("I am DhExpo Assistant from Darul Huda Islamic University.");
  } else if (message.includes("salaam")) {
    speak("Waalaikumussalam, How may i help you sir?");
  } else if (
    message.includes(
      "salam" ||
        "salaam" ||
        "salam alaikum" ||
        "salaam alaikum" ||
        "salam alaykum" ||
        "salaam alaykum" ||
        "salam alaykum wa rahmatullah" ||
        "salaam alaykum wa rahmatullah" ||
        "salam alaykum wa rahmatullahi wa barakatuh" ||
        "salaam alaykum wa rahmatullahi wa barakatuh" ||
        "salam alaykum wa rahmatullahi wa barakatu" ||
        "salaam alaykum wa rahmatullahi wa barakatu" ||
        "salam alaykum wa rahmatullahi" ||
        "salaam alaykum wa rahmatullahi" ||
        "salam alaykum wa rahmatullah" ||
        "salaam alaykum wa rahmatullah" ||
        "salam alaykum wa rahmatullahi wa barakatuhu" ||
        "salaam alaykum wa rahmatullahi wa barakatuhu" ||
        "salam alaykum wa rahmatullahi wa barakatuh" ||
        "salaam alaykum wa rahmatullahi wa barakatuh"
    )
  ) {
    speak("Waalaikumussalam warahmathullah");
  } else if (
    message.includes(
      "where are you now?" ||
        "where are you?" ||
        "where are you" ||
        "where are you now"
    )
  ) {
    speak("Now I am in Darul Huda Islamic University, Kerala, India.");
  } else if (message.includes("how are you?" || "how are you")) {
    speak("Alhamdulillah, I am fine.");
  } else if (
    message.includes("what is ramadan?") ||
    message.includes("what is Ramadan?") ||
    message.includes("what is ramadan") ||
    message.includes("what is Ramadan")
  ) {
    speak(
      "Ramadan is the ninth month of the Islamic lunar calendar. It is a month of fasting, prayer, reflection, and community. Muslims around the world observe fasting from dawn to sunset during this month."
    );
  } else if (
    message.includes("what is zakat?") ||
    message.includes("what is Zakat?") ||
    message.includes("what is zakat") ||
    message.includes("what is Zakat")
  ) {
    speak(
      "Zakat is one of the Five Pillars of Islam. It is a form of almsgiving, where Muslims are required to donate a specific portion of their wealth, usually 2.5%, to help those in need and support charitable causes."
    );
  } else if (
    message.includes("what is Hajj?") ||
    message.includes("what is hajj?") ||
    message.includes("what is Hajj") ||
    message.includes("what is hajj")
  ) {
    speak(
      "Hajj is the pilgrimage to the holy city of Mecca, which is one of the Five Pillars of Islam. It is an obligation for every physically and financially able Muslim to perform Hajj at least once in their lifetime."
    );
  } else if (
    message.includes("what is the significance of Jummah?") ||
    message.includes("what is Jummah?")
  ) {
    speak(
      "Jummah, or Friday, is considered the holiest day in Islam. Muslims gather for the congregational Friday prayers, listen to the Khutbah (sermon), and engage in additional acts of worship. It holds great significance in the life of a Muslim."
    );
  } else if (
    message.includes("what is the meaning of Bismillah?") ||
    message.includes("translate Bismillah") ||
    message.includes("translate bismillah.") ||
    message.includes("Translate Bismillah")
  ) {
    speak(
      "Bismillah means 'In the name of Allah.' It is recited by Muslims before starting any task or action to seek Allah's blessings and guidance."
    );
  } else if (
    message.includes("what are the Five Pillars of Islam?") ||
    message.includes("list the Five Pillars of Islam")
  ) {
    speak(
      "The Five Pillars of Islam are Shahada (declaration of faith), Salah (prayer), Zakat (charity), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Mecca). These pillars form the foundation of a Muslim's faith and practice."
    );
  } else if (message.includes("open google")) {
    window.open("https://google.com", "_blank");
    speak("Opening Google...");
  } else if (message.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
    speak("Opening Youtube...");
  } else if (message.includes("open facebook")) {
    window.open("https://facebook.com", "_blank");
    speak("Opening Facebook...");
  } else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("what are")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "This is what i found on internet regarding " + message;
    speak(finalText);
  } else if (message.includes("show me")) {
    window.open(
      `https://www.google.com/search?q=${message.replace("show me", "")}`,
      "_blank"
    );
    const finalText =
      "This is what i found on internet regarding " +
      message.replace("show me", "");
    speak(finalText);
  } else if (message.includes("wikipedia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,
      "_blank"
    );
    const finalText = "This is what i found on wikipedia regarding " + message;
    speak(finalText);
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = time;
    speak(finalText);
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    });
    const finalText = date;
    speak(finalText);
  } else if (message.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator";
    speak(finalText);
  } else if (message.includes("camera")) {
    window.open("microsoft.windows.camera:");
    const finalText = "Opening Camera";
    speak(finalText);
  } else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "I found some information for " + message + " on google";
    speak(finalText);
  }
}
