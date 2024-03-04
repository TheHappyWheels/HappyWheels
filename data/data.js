export const websiteData = {
  name: "Happy Wheels",
  description: "car rental company website",
  keywords: [
    "car",
    "rental",
    "company",
    "happy",
    "wheels",
    "rent",
    "rental",
    "car rental",
    "car rent",
    "happy wheels",
    "happywheels",
  ],
  logo: "/images/logo.svg",
  favicon: "/images/favicon.svg",
  twitterUsername: "@happy_wheels",
  facebookUsername: "happywheels",
  instagramUsername: "happywheels",
  baseColor: "cyan",
  email: "ahmad@happywheels.rent",
  phoneNumber: "+971547516354",
};

export const navLinks = [];

export const footerLinks = [
  // { id: 1, name: "About", url: "#" },
  { id: 2, name: "Contact", url: "#" },
  { id: 3, name: "Terms", url: "#" },
  { id: 4, name: "Privacy", url: "#" },
];

export const heroOptions = {
  title: "Drive with Joy, Rent with Happy Wheels!",
  description:
    "Happy Wheels: Steering you to joy. Experience effortless car rental with us, where every journey is a delight.",
  image: "/images/hero-bg.jpg",
};

export const contactOptions = {
  facebookLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  enableFacebook: false,
  twitterLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  enableTwitter: false,
  instagramLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  enableInstagram: false,
  pinterestLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  enablePinterest: false,
  phone: "+971547516354",
  enablePhone: true,
  email: "ahmad@happywheels.rent",
  enableEmail: true,
};

export const transmissionTypes = [
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

export const carFeatures = [
  { id: 1, name: "Air Conditioning", icon: "/images/wind.svg" },
  { id: 2, name: "Bluetooth", icon: "/images/bluetooth.svg" },
  { id: 3, name: "GPS", icon: "/images/gps.svg" },
  { id: 4, name: "Power Steering", icon: "/images/powerSteering.svg" },
  { id: 5, name: "Seat Cooling", icon: "/images/carSeat.svg" },
];

export const cars = [
  {
    id: 1,
    brand: "Hyundai",
    model: "Sonata",
    year: 2021,
    slug: "Hyundai-Sonata-2021-1",
    color: "Blue",
    fuelType: "Gasoline",
    transmission: transmissionTypes[0].name,
    engine: "2.5L I4",
    mpg: "30", // milage per galon
    fuelTankSize: 60, // in liters
    driveTrain: driveTrainTypes[0].name,
    showPrice: true,
    pricePerDay: 125, // in AED
    pricePerWeek: 750, // in AED
    pricePerMonth: 2500, // in AED
    bluetooth: true,
    available: true,
    mainImage: "/images/sonata21-a.jpg",
    videos: [],
    images: [
      "/images/sonata21-b.jpg",
      "/images/sonata21-c.jpg",
      "/images/sonata21-d.jpg",
    ],
    features: [carFeatures[0], carFeatures[1], carFeatures[2], carFeatures[3]],
  },
  {
    id: 2,
    brand: "Audi",
    model: "Q3",
    year: 2022,
    slug: "Audi-Q3-2022-2",
    color: "Gray",
    fuelType: "Gasoline",
    transmission: transmissionTypes[0].name,
    engine: "2.0 I4",
    mpg: "26",
    fuelTankSize: 60,
    driveTrain: driveTrainTypes[2].name,
    showPrice: true,
    pricePerDay: 250,
    pricePerWeek: 1500,
    pricePerMonth: 4500,
    bluetooth: true,
    available: true,
    mainImage: "/images/audi-q3-22-a.jpg",
    videos: [],
    images: [
      "/images/audi-q3-22-d.jpg",
      "/images/audi-q3-22-b.jpg",
      "/images/audi-q3-22-c.jpg",
    ],
    features: [carFeatures[0], carFeatures[1], carFeatures[2], carFeatures[3]],
  },
  {
    id: 3,
    brand: "Mazda",
    model: "CX5",
    year: 2023,
    slug: "mazda-cx5-2023-3",
    color: "Red",
    fuelType: "Gasoline",
    transmission: transmissionTypes[0].name,
    engine: "2.5L I4",
    mpg: "43.5",
    fuelTankSize: 55,
    driveTrain: driveTrainTypes[2].name,
    showPrice: true,
    pricePerDay: 135,
    pricePerWeek: 900,
    pricePerMonth: 3500,
    bluetooth: true,
    available: true,
    mainImage: "/images/mazda-cx5-a.jpg",
    videos: [],
    images: [
      "/images/mazda-cx5-b.jpg",
      "/images/mazda-cx5-c.jpg",
      "/images/mazda-cx5-d.jpg",
    ],
    features: [carFeatures[0], carFeatures[1], carFeatures[2], carFeatures[3]],
  },
];
