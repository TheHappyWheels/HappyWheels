export const websiteData = {
  name: "Happy Wheels",
  description: "car rental company website",
  keywords: "car, rental, company, website",
  // url: "https://happy-wheel.vercel.app",
  logo: "/images/logo.svg",
  favicon: "/images/favicon.svg",
  twitterUsername: "@happy_wheels",
  facebookUsername: "happywheels",
  instagramUsername: "happywheels",
  baseColor: "cyan",
  email: "example@happywheels.com",
  phoneNumber: "123-456-7890",
};

export const navLinks = [];

export const footerLinks = [
  { id: 1, name: "About", url: "#" },
  { id: 2, name: "Contact", url: "#" },
  { id: 3, name: "Terms", url: "#" },
  { id: 4, name: "Privacy", url: "#" },
];

export const heroOptions = {
  title: "Drive with Joy, Rent with Happy Wheels!",
  description:
    "Happy Wheels: Steering you to joy. Experience effortless car rental with us, where every journey is a delight.",
  mainButtonText: "Get started",
  mainButtonUrl: "#",
  secondaryButtonText: "Learn more",
  secondaryButtonUrl: "#",
  image: "/images/hero-bg.jpg",
};

export const contactOptions = {
  facebookLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  enableFacebook: true,
  twitterLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  enableTwitter: true,
  instagramLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  enableInstagram: true,
  pinterestLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  enablePinterest: true,
  phone: "XXXXXXXXXXXX",
  enablePhone: true,
  enableEmail: true,
};

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
    slug: "toyota-camry-2023-1",
    color: "Black",
    mileage: 15000, // in km
    fuelType: "Gasoline",
    transmission: transitionTypes[0].name,
    engine: "2.5L I4",
    mpg: "33", // milage per galon
    fuelTankSize: 55, // in liters
    driveTrain: driveTrainTypes[0].name,
    showPrice: true,
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
    slug: "honda-accord-2022-2",
    color: "Blue",
    mileage: 18000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "1.5L Turbocharged",
    mpg: "30",
    fuelTankSize: 50,
    driveTrain: "Front-Wheel Drive",
    showPrice: true,
    pricePerDay: 60,
    pricePerWeek: 350,
    pricePerMonth: 1300,
    bluetooth: true,
    available: true,
    mainImage: "/images/honda_accord_main.jpg",
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
    slug: "ford-mustang-2023-3",
    color: "Red",
    mileage: 12000,
    fuelType: "Premium Gasoline",
    transmission: "Automatic",
    engine: "5.0L V8",
    mpg: "25",
    fuelTankSize: 60,
    driveTrain: "Rear-Wheel Drive",
    showPrice: true,
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
