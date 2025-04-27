
# Skycast ☁️🌞

Get real-time weather at your current location with a dynamic background based on the weather condition.

## Features
- 📍 Detects your location automatically
- 🌤️ Shows real-time weather information (Temperature, Condition, City)
- 🎨 Changes background based on the weather
- 🚀 Fast and lightweight React app

## Demo
![image](https://github.com/user-attachments/assets/857bbc6b-44ba-4ac8-872d-aefb3cd67231)


## Installation

```bash
git clone https://github.com/codewithajoydas/skycast.git
cd weathernow
npm install
npm start
```

## Technologies Used
- React
- OpenWeatherMap API
- HTML5 Geolocation
- CSS3

## Setup API Key
1. Create a free account at [OpenWeatherMap](https://openweathermap.org/).
2. Get your API key.
3. Replace the `appid` value inside the code with your API key.

```javascript
const newUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY&units=metric`;
```

## Folder Structure

```
/public
/src
  ├── App.jsx
  ├── App.css
  ├── Hooks/
  │     └── FetchHook.js
  ├── utils/
        └── getBackground.js
```

## License
This project is licensed under the MIT License.

---
Made with ❤️ by @codewithajoydas

---

Done ✅

Would you also like a clean `getBackground.js` update? (it will use better online weather images!) 🚀
Just say if you want it!
