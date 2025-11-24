// lib/npm-solarsystem/index.js

// List of planet names
export const getPlanets = () => [
  "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"
];

// Mercury
export function getMercury() {
  return {
    image: 'https://solarsystem.nasa.gov/system/stellar_items/image_files/2_feature_1600x900_mercury.jpg',
    distanceFromSun: '39.704 million miles',
    yearLength: '88 Earth Days',
    description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earths Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system',
    radius: 1516,
    websiteLink: 'https://solarsystem.nasa.gov/planets/mercury/overview/',
    oneEarthDay: '176 Earth Day',
    moons: 0
  };
}

// Venus
export function getVenus() {
  return {
    image: 'https://solarsystem.nasa.gov/system/downloadable_items/1082_PIA00271_detail.jpg',
    distanceFromSun: '67.337 million miles',
    yearLength: '225 Earth Days',
    description: 'Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world. Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system—with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.',
    radius: 3760,
    websiteLink: 'https://solarsystem.nasa.gov/planets/venus/overview/',
    oneEarthDay: '243 Earth Day',
    moons: 0
  };
}

// Earth
export function getEarth() {
  return {
    image: 'https://solarsystem.nasa.gov/system/stellar_items/image_files/4_earth.jpg',
    distanceFromSun: '91.433 million miles',
    yearLength: '365 Earth Days',
    description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.',
    radius: 3959,
    websiteLink: 'https://solarsystem.nasa.gov/planets/earth/overview/',
    oneEarthDay: '24 hours',
    moons: 1
  };
}

// Mars
export function getMars() {
  return {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/960px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png',
    distanceFromSun: '145.925 million miles',
    yearLength: '687 Earth Days',
    description: 'The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volacanoes, evidence of an even more active past.',
    radius: 2106,
    websiteLink: 'https://solarsystem.nasa.gov/planets/mars/overview/',
    oneEarthDay: '24.6 hours',
    moons: 2
  };
}

// Jupiter
export function getJupiter() {
  return {
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter_OPAL_2024.png/960px-Jupiter_OPAL_2024.png',
    distanceFromSun: '485.316 million miles',
    yearLength: '4333 Earth Days',
    description: 'Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiters stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years. Jupiter is surrounded by dozens of moons. Jupiter also has several rings, but unlike the famous rings of Saturn, Jupiter’s rings are very faint and made of dust, not ice.',
    radius: 88846,
    websiteLink: 'https://solarsystem.nasa.gov/planets/jupiter/overview/',
    oneEarthDay: '9.93 hours',
    moons: 79
  };
}

// Saturn
export function getSaturn() {
  return {
    image: 'https://solarsystem.nasa.gov/system/resources/detail_files/14379_IMG003379.jpg',
    distanceFromSun: '932.576 million miles',
    yearLength: '10759 Earth Days',
    description: 'Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturns. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Surrounded by more than 60 known moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of water that spray from Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries.',
    radius: 36183.7,
    websiteLink: 'https://solarsystem.nasa.gov/planets/saturn/overview/',
    oneEarthDay: '10.7 hours',
    moons: 53
  };
}

// Uranus
export function getUranus() {
  return {
    image: 'https://images.ctfassets.net/cnu0m8re1exe/7hQBr1Got3iOOxCn4yJqSy/8ac59ceb4d08d0474a2688ac976b1693/neptune1-1024x727.jpg?w=650&h=433&fit=fill',
    distanceFromSun: '1.833 billion miles',
    yearLength: '30687 Earth Days',
    description: 'The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball.',
    radius: 15759.2,
    websiteLink: 'https://solarsystem.nasa.gov/planets/uranus/overview/',
    oneEarthDay: '17 hours 14 minutes',
    moons: 27
  };
}

// Neptune
export function getNeptune() {
  return {
    image: 'https://solarsystem.nasa.gov/system/stellar_items/image_files/90_feature_1600x900_4.jpg',
    distanceFromSun: '2.782 billion miles',
    yearLength: '60190 Earth Days',
    description: 'Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846. Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune.',
    radius: 15299.4,
    websiteLink: 'https://solarsystem.nasa.gov/planets/neptune/overview/',
    oneEarthDay: '16 hours',
    moons: 14
  };
}

// Pluto
export function getPluto() {
  return {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/960px-Pluto_in_True_Color_-_High-Res.jpg',
    distanceFromSun: '3.157 billion miles',
    yearLength: '90530 Earth Days',
    description: 'Dwarf planet. Pluto is a complex and mysterious world with mountains, valleys, plains, craters, and maybe glaciers. Discovered in 1930, Pluto was long considered our solar systems ninth planet. But after the discovery of similar intriguing worlds deeper in the distant Kuiper Belt, icy Pluto was reclassified as a dwarf planet. Pluto is orbited by five known moons, the largest of which is Charon. Charon is about half the size of Pluto itself, making it the largest satellite relative to the planet it orbits in our solar system. Pluto and Charon are often referred to as a "double planet."',
    radius: 715,
    websiteLink: 'https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/overview/',
    oneEarthDay: '153 Earth Days',
    moons: 5
  };
}

// Sun
export function getSun() {
  return {
    image: 'https://spaceplace.nasa.gov/sun-compare/en/PIA03149.en.jpg',
    description: 'The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything – from the biggest planets to the smallest particles of debris – in its orbit. The connection and interactions between the Sun and Earth drive the seasons, ocean currents, weather, climate, radiation belts and auroras. Though it is special to us, there are billions of stars like our Sun scattered across the Milky Way galaxy.',
    radius: 432168.6,
    websiteLink: 'https://solarsystem.nasa.gov/solar-system/sun/overview/'
  };
}

// Meteorites
export function getMeteorite() {
  return {
    meteors: 'When meteoroids enter Earth’s atmosphere (or that of another planet, like Mars) at high speed and burn up, the fireballs or “shooting stars”',
    meteorite: 'When a meteoroid survives a trip through the atmosphere and hits the ground',
    meteorShowers: 'Several meteors per hour can usually be seen on any given night. When there are lots more meteors',
