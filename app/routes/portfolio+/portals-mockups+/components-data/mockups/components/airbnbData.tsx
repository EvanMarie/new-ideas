export type AirbnbProperties = {
  id: string;
  location: string;
  description: string;
  nightlyPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
  rating: number;
  badgeLabel: string;
};

function GetRandomNightlyPrice(min = 100) {
  return Math.floor(Math.random() * (700 - min + 1)) + min;
}

function GetRandomWeeklyPrice(min = 1500) {
  return Math.floor(Math.random() * (5000 - min + 1)) + min;
}

function GetRandomMonthlyPrice(min = 4000) {
  return Math.floor(Math.random() * (10000 - min + 1)) + min;
}

function GetRandomRating() {
  return Math.random() * (5.0 - 3.1) + 3.1;
}

function GetRandomBadgeLabel() {
  const badgeLabelOptions = [
    "Guest Favorite",
    "Superhost",
    "Plus",
    "Great Value",
    "",
  ];
  const randomIndex = Math.floor(Math.random() * badgeLabelOptions.length);
  return badgeLabelOptions[randomIndex];
}

function GetRandomLocation() {
  const locations = [
    "New York",
    "Los Angeles",
    "San Francisco",
    "Chicago",
    "Miami",
    "Austin",
    "Seattle",
    "Portland",
    "Denver",
    "Boston",
    "New Orleans",
    "Nashville",
    "San Diego",
    "Las Vegas",
    "Orlando",
    "Washington D.C.",
    "Philadelphia",
    "Atlanta",
    "Dallas",
    "Houston",
    "Phoenix",
    "Minneapolis",
    "Detroit",
    "St. Louis",
    "Kansas City",
    "Salt Lake City",
    "Albuquerque",
    "Santa Fe",
    "Honolulu",
    "Anchorage",
    "Seattle",
    "Portland",
    "Denver",
    "Boston",
    "New Orleans",
    "Nashville",
    "San Diego",
    "Las Vegas",
    "Orlando",
    "Washington D.C.",
    "Philadelphia",
    "Atlanta",
    "Dallas",
    "Houston",
    "Phoenix",
    "Minneapolis",
    "Detroit",
    "St. Louis",
    "Kansas City",
    "Salt Lake City",
    "Albuquerque",
    "Santa Fe",
    "Honolulu",
    "Anchorage",
  ];
  const randomIndex = Math.floor(Math.random() * locations.length);
  return locations[randomIndex];
}

function GetRandomDescription() {
  const randomDescriptions = [
    "In the heart of the city.",
    "Beautiful views!",
    "Great location!",
    "Superior service!",
    "Top-rated!",
    "Highly recommended!",
    "Great value!",
    "Extended stay discounts!",
    "Pet-friendly!",
    "Family-friendly!",
    "Luxury accommodations!",
    "Great for business travelers!",
    "Great for couples!",
    "Great for families!",
    "Great for solo travelers!",
    "Great for groups!",
  ];
  const randomIndex = Math.floor(Math.random() * randomDescriptions.length);
  return randomDescriptions[randomIndex];
}

export function GetRandomNumbers() {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 129) + 1);
  }
  return numbers;
}

export function generateAirbnbProperties(count: number) {
  const properties = [];
  for (let i = 1; i <= count; i++) {
    properties.push({
      id: i.toString(),
      location: GetRandomLocation(),
      description: GetRandomDescription(),
      nightlyPrice: GetRandomNightlyPrice(),
      weeklyPrice: GetRandomWeeklyPrice(),
      monthlyPrice: GetRandomMonthlyPrice(),
      rating: GetRandomRating(),
      badgeLabel: GetRandomBadgeLabel(),
    });
  }
  return properties;
}

export const airbnbProperties = generateAirbnbProperties(70);
