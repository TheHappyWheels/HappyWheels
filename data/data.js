export const websiteData = {
  name: "Happy Wheel",
  description: "A simple website for a car rental company",
  keywords: "car, rental, company, website",
  // url: "https://happy-wheel.vercel.app",
  logo: "/images/logo-no-name.png",
  twitterUsername: "@happy_wheel",
  facebookUsername: "happywheel",
  instagramUsername: "happywheel",
  baseColor: "cyan",
};

export const navLinks = [];

export const footerLinks = [
  { id: 1, name: "About", url: "#" },
  { id: 2, name: "Contact", url: "#" },
  { id: 3, name: "Terms", url: "#" },
  { id: 4, name: "Privacy", url: "#" },
];

export const transitionTypes = [
  {
    id: 1,
    name: "Automatic",
  },
  {
    id: 2,
    name: "Manual",
  },
  {
    id: 3,
    name: "Hybrid",
  },
];

export const driveTrainTypes = [
  {
    id: 1,
    name: "FWD",
  },
  {
    id: 2,
    name: "RWD",
  },
  {
    id: 3,
    name: "AWD",
  },
];

export const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    color: "Black",
    mileage: 15000, // in km
    fuelType: "Gasoline",
    transmission: transitionTypes[0].name,
    engine: "2.5L I4",
    MPG: "33", // milage per galon
    fuelTankSize: 55, // in liters
    driveTrain: driveTrainTypes[0].name,
    pricePerDay: 70, // in AED
    pricePerWeek: 400, // in AED
    pricePerMonth: 1500, // in AED
    bluetooth: true,
    available: true,
    mainImage: "/images/toyota_camry_main.jpeg",
    videos: [],
    images: [
      "/images/toyota_camry_back.jpeg",
      "/images/toyota_camry_engine.jpeg",
      "/images/toyota_camry_front.jpeg",
      "/images/toyota_camry_interior.jpeg",
      "/images/toyota_camry_side.jpeg",
      "/images/toyota_camry_trunk.jpeg",
    ],
    features: [
      "Air Conditioning",
      "Power Steering",
      "ABS Brakes",
      "Bluetooth",
      "Backup Camera",
    ],
  },
  {
    id: 2,
    brand: "Honda",
    model: "Accord",
    year: 2022,
    color: "Blue",
    mileage: 18000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "1.5L Turbocharged",
    MPG: "30",
    fuelTankSize: 50,
    driveTrain: "Front-Wheel Drive",
    pricePerDay: 60,
    pricePerWeek: 350,
    pricePerMonth: 1300,
    bluetooth: true,
    available: true,
    mainImage: "/images/honda_accord_main.jpeg",
    videos: [],
    images: [
      "/images/honda_accord_back.jpg",
      "/images/honda_accord_front.jpg",
      "/images/honda_accord_side.jpg",
      "/images/honda_accord_trunk.jpeg",
      "/images/honda_accord_wheel.jpeg",
    ],
    features: [
      "Air Conditioning",
      "Power Steering",
      "ABS Brakes",
      "Bluetooth",
      "Lane Departure Warning",
      "Apple CarPlay",
    ],
  },
  {
    id: 3,
    brand: "Ford",
    model: "Mustang",
    year: 2023,
    color: "Red",
    mileage: 12000,
    fuelType: "Premium Gasoline",
    transmission: "Automatic",
    engine: "5.0L V8",
    MPG: "25",
    fuelTankSize: 60,
    driveTrain: "Rear-Wheel Drive",
    pricePerDay: 80,
    pricePerWeek: 450,
    pricePerMonth: 1700,
    bluetooth: true,
    available: true,
    mainImage: "/images/ford_mustang_main.jpeg",
    videos: [],
    images: [
      "/images/ford_mustang_back.jpeg",
      "/images/ford_mustang_engine.jpeg",
      "/images/ford_mustang_front.jpeg",
      "/images/ford_mustang_interior.jpeg",
      "/images/ford_mustang_side.jpeg",
      "/images/ford_mustang_trunk.jpeg",
    ],
    features: [
      "Air Conditioning",
      "Power Steering",
      "ABS Brakes",
      "Bluetooth",
      "Leather Seats",
      "Backup Camera",
    ],
  },
];
