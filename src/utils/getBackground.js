// src/utils/getBackground.js

export function getBackground(weatherCondition) {
  switch (weatherCondition.toLowerCase()) {
    case "clear":
      return "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80";
    // clear sunny sky, minimalist
    case "rain":
      return "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80";
    // cozy rain aesthetic
    case "haze":
    case "fog":
      return "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80";
    // misty forest, dreamy vibes
    case "clouds":
      return "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1600&q=80";
    // soft clouds, pastel colors
    case "snow":
      return "https://images.unsplash.com/photo-1608889176918-7eb60e1f9fcf?auto=format&fit=crop&w=1600&q=80";
    // magical snowy landscape
    case "thunderstorm":
      return "https://images.unsplash.com/photo-1599494081151-bc21d42b6b83?auto=format&fit=crop&w=1600&q=80";
    // dramatic thunderstorm
    default:
      return "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";
    // beautiful nature fallback
  }
}
