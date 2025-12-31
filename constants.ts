
import { TimezoneData } from './types';

const currentYear = new Date().getUTCFullYear();
const targetYear = currentYear + 1;

export const TIMEZONES: TimezoneData[] = [
  { 
    id: 'utc14', offset: 14, label: 'Kiritimati (Line Islands)', majorCities: ['Kiritimati'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 10, 0, 0), hasCelebrated: false,
    greeting: 'Bula Vinaka', fact: 'First place on Earth to welcome the New Year.',
    colors: ['#CE1126', '#FDC82F', '#0032A0'] // Kiribati: Red, Gold, Blue
  },
  { 
    id: 'utc13', offset: 13, label: 'Tonga, Samoa', majorCities: ['Nukuʻalofa', 'Apia'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 11, 0, 0), hasCelebrated: false,
    greeting: 'Manuia le Tausaga Fou', fact: 'Samoa used to be the last to celebrate until they moved the date line in 2011.',
    colors: ['#C8102E', '#FFFFFF', '#00205B'] // Tonga/Samoa: Red, White, Blue
  },
  { 
    id: 'utc1245', offset: 12.75, label: 'Chatham Islands', majorCities: ['Waitangi'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 11, 15, 0), hasCelebrated: false,
    greeting: 'Kia Ora', fact: 'Smallest timezone step in the world (45 mins from NZ).',
    colors: ['#00247D', '#CC142B', '#FFFFFF'] // NZ: Blue, Red, White
  },
  { 
    id: 'utc12', offset: 12, label: 'New Zealand, Fiji', majorCities: ['Auckland', 'Suva'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 12, 0, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'Auckland Sky Tower fireworks are world-famous.',
    colors: ['#00247D', '#CC142B', '#FFFFFF'] // NZ/Fiji: Blue, Red, White
  },
  { 
    id: 'utc11', offset: 11, label: 'Australia (East)', majorCities: ['Sydney', 'Melbourne'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 13, 0, 0), hasCelebrated: false,
    greeting: 'G\'day & Happy New Year', fact: 'Sydney Harbour fireworks are watched by over a billion people.',
    colors: ['#00008B', '#FF0000', '#FFFFFF'] // Australia: Blue, Red, White
  },
  { 
    id: 'utc1030', offset: 10.5, label: 'Australia (Central)', majorCities: ['Adelaide'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 13, 30, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'Adelaide celebrates 30 minutes after Sydney.',
    colors: ['#00008B', '#FF0000', '#FFFFFF']
  },
  { 
    id: 'utc10', offset: 10, label: 'Brisbane, Port Moresby', majorCities: ['Brisbane', 'Port Moresby'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 14, 0, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'Queensland stays on standard time while NSW uses DST.',
    colors: ['#00008B', '#FF0000', '#FFFFFF', '#FFCD00'] // PNG: Red, Black, Gold
  },
  { 
    id: 'utc930', offset: 9.5, label: 'Australia (Northern)', majorCities: ['Darwin'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 14, 30, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'Tropical celebrations in the Northern Territory.',
    colors: ['#00008B', '#FF0000', '#FFFFFF']
  },
  { 
    id: 'utc9', offset: 9, label: 'Japan, South Korea', majorCities: ['Tokyo', 'Seoul'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 15, 0, 0), hasCelebrated: false,
    greeting: 'Akemashite Omedetou', fact: 'Buddhist temples ring bells 108 times at midnight.',
    colors: ['#BC002D', '#FFFFFF', '#0047A0', '#CD2E3A'] // Japan Red, Korea Blue/Red
  },
  { 
    id: 'utc845', offset: 8.75, label: 'Eucla (Australia)', majorCities: ['Eucla'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 15, 15, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'One of the world\'s rarest timezones (UTC+8:45).',
    colors: ['#00008B', '#FF0000', '#FFFFFF']
  },
  { 
    id: 'utc8', offset: 8, label: 'China, Singapore', majorCities: ['Beijing', 'Singapore'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 16, 0, 0), hasCelebrated: false,
    greeting: 'Xin Nian Kuai Le', fact: 'While Lunar New Year is bigger, Jan 1st is a major holiday.',
    colors: ['#EE1C25', '#FFFF00', '#FFFFFF'] // China Red/Yellow, SG Red/White
  },
  { 
    id: 'utc7', offset: 7, label: 'Vietnam, Thailand', majorCities: ['Bangkok', 'Jakarta'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 17, 0, 0), hasCelebrated: false,
    greeting: 'Sawadee Pee Mai', fact: 'Central World in Bangkok hosts massive countdowns.',
    colors: ['#ED1C24', '#00247D', '#FFFFFF', '#FFCE00', '#00529B'] // Thai, Vietnam, Indonesia
  },
  { 
    id: 'utc630', offset: 6.5, label: 'Myanmar, Cocos Islands', majorCities: ['Yangon'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 17, 30, 0), hasCelebrated: false,
    greeting: 'Mingalaba', fact: 'Celebrations center around Shwedagon Pagoda.',
    colors: ['#FECB00', '#EA2839', '#34B233', '#FFFFFF'] // Myanmar: Yellow, Green, Red
  },
  { 
    id: 'utc6', offset: 6, label: 'Bangladesh, Bhutan', majorCities: ['Dhaka', 'Thimphu'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 18, 0, 0), hasCelebrated: false,
    greeting: 'Shuvo Noboborsho', fact: 'Daka University area becomes a hub of music.',
    colors: ['#006A4E', '#F42A41', '#FF4E00', '#FFCD00'] // BD: Green/Red, Bhutan: Orange/Yellow
  },
  { 
    id: 'utc545', offset: 5.75, label: 'Nepal', majorCities: ['Kathmandu'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 18, 15, 0), hasCelebrated: false,
    greeting: 'Naya Barsako Subhakamana', fact: 'Nepal is one of only two countries with a 45-min offset.',
    colors: ['#DC143C', '#003893', '#FFFFFF'] // Nepal: Crimson, Blue, White
  },
  { 
    id: 'utc530', offset: 5.5, label: 'India, Sri Lanka', majorCities: ['Mumbai', 'Delhi'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 18, 30, 0), hasCelebrated: false,
    greeting: 'Naye Saal Ki Shubhkamnayein', fact: 'Beach parties in Goa are legendary.',
    colors: ['#FF9933', '#FFFFFF', '#128807', '#000080'] // India: Saffron, White, Green
  },
  { 
    id: 'utc5', offset: 5, label: 'Pakistan, Uzbekistan', majorCities: ['Karachi', 'Tashkent'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 19, 0, 0), hasCelebrated: false,
    greeting: 'Naya Saal Mubarak', fact: 'Karachi celebrates with fireworks at Sea View.',
    colors: ['#01411C', '#FFFFFF', '#0099FF', '#FFD700'] // Pak Green/White, Uzb Blue/Gold
  },
  { 
    id: 'utc430', offset: 4.5, label: 'Afghanistan', majorCities: ['Kabul'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 19, 30, 0), hasCelebrated: false,
    greeting: 'Sale Naw Mubarak', fact: 'Kabul marks the time with traditional gatherings.',
    colors: ['#000000', '#BF0000', '#009900'] // Afghan: Black, Red, Green
  },
  { 
    id: 'utc4', offset: 4, label: 'UAE, Oman', majorCities: ['Dubai', 'Muscat'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 20, 0, 0), hasCelebrated: false,
    greeting: 'Kul \'am wa antum bikhair', fact: 'Burj Khalifa displays the world\'s tallest fireworks.',
    colors: ['#FF0000', '#00732F', '#FFFFFF', '#000000'] // UAE: Red, Green, White, Black
  },
  { 
    id: 'utc330', offset: 3.5, label: 'Iran', majorCities: ['Tehran'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 20, 30, 0), hasCelebrated: false,
    greeting: 'Sale No Mobarak', fact: 'While Nowruz is the main NY, Jan 1 is widely marked.',
    colors: ['#239B56', '#FFFFFF', '#DA291C'] // Iran: Green, White, Red
  },
  { 
    id: 'utc3', offset: 3, label: 'Russia, Turkey', majorCities: ['Moscow', 'Istanbul'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 21, 0, 0), hasCelebrated: false,
    greeting: 'S Novym Godom', fact: 'Moscow Red Square is the heart of the celebration.',
    colors: ['#DA291C', '#FFFFFF', '#0039A6'] // Russia: White, Blue, Red
  },
  { 
    id: 'utc2', offset: 2, label: 'Egypt, South Africa', majorCities: ['Cairo', 'Johannesburg'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 22, 0, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'V&A Waterfront in Cape Town has massive concerts.',
    colors: ['#007A4D', '#FFB612', '#002395', '#E03C31', '#FFFFFF', '#000000'] // SA Flag Colors
  },
  { 
    id: 'utc1', offset: 1, label: 'Central Europe', majorCities: ['Paris', 'Berlin', 'Rome'], 
    celebrationTime: Date.UTC(currentYear, 11, 31, 23, 0, 0), hasCelebrated: false,
    greeting: 'Bonne Année', fact: 'Berlin Brandenburger Tor hosts Europe\'s biggest street party.',
    colors: ['#0055A4', '#EF4135', '#FFFFFF', '#FFCE00', '#009246'] // France, Germany, Italy mix
  },
  { 
    id: 'utc0', offset: 0, label: 'UK, Portugal, Iceland', majorCities: ['London', 'Lisbon'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 0, 0, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'Big Ben chimes midnight for the global standard.',
    colors: ['#012169', '#C8102E', '#FFFFFF', '#006600'] // UK/Portugal Red/Green/Blue
  },
  { 
    id: 'utc-1', offset: -1, label: 'Cabo Verde', majorCities: ['Praia'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 1, 0, 0), hasCelebrated: false,
    greeting: 'Feliz Ano Novo', fact: 'Atlantic island celebrations with traditional music.',
    colors: ['#002A8D', '#FFD700', '#FF0000', '#FFFFFF'] // Cabo Verde
  },
  { 
    id: 'utc-2', offset: -2, label: 'South Georgia', majorCities: ['King Edward Point'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 2, 0, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'The most remote New Year in the South Atlantic.',
    colors: ['#00247D', '#CC142B', '#FFFFFF']
  },
  { 
    id: 'utc-3', offset: -3, label: 'Brazil, Argentina', majorCities: ['Rio', 'Buenos Aires'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 3, 0, 0), hasCelebrated: false,
    greeting: 'Feliz Ano Novo', fact: 'Millions wear white on Copacabana Beach in Rio.',
    colors: ['#009B3A', '#FEDF00', '#002776', '#74ACDF', '#FFFFFF'] // Brazil Green/Gold, Arg Blue
  },
  { 
    id: 'utc-330', offset: -3.5, label: 'Newfoundland', majorCities: ['St. John\'s'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 3, 30, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'St. John\'s is the first in North America to celebrate.',
    colors: ['#FF0000', '#FFFFFF'] // Canada
  },
  { 
    id: 'utc-4', offset: -4, label: 'Atlantic Time', majorCities: ['Halifax', 'Caracas'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 4, 0, 0), hasCelebrated: false,
    greeting: 'Feliz Año Nuevo', fact: 'Maritime traditions meet Caribbean warmth.',
    colors: ['#FF0000', '#FFFFFF', '#F6D32D', '#00247D'] // Canada, Venezuela mix
  },
  { 
    id: 'utc-5', offset: -5, label: 'Eastern Time', majorCities: ['New York', 'Toronto'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 5, 0, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'The Times Square ball drop is an American icon.',
    colors: ['#B22234', '#FFFFFF', '#3C3B6E'] // USA Flag
  },
  { 
    id: 'utc-6', offset: -6, label: 'Central Time', majorCities: ['Chicago', 'Mexico City'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 6, 0, 0), hasCelebrated: false,
    greeting: '¡Próspero Año Nuevo!', fact: 'Mexico City Zocalo fills with music and light.',
    colors: ['#006847', '#FFFFFF', '#CE1126', '#3C3B6E'] // Mexico + USA
  },
  { 
    id: 'utc-7', offset: -7, label: 'Mountain Time', majorCities: ['Denver', 'Phoenix'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 7, 0, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'Ski resorts host spectacular "torchlight parades".',
    colors: ['#B22234', '#FFFFFF', '#3C3B6E']
  },
  { 
    id: 'utc-8', offset: -8, label: 'Pacific Time', majorCities: ['LA', 'Vancouver'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 8, 0, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'Space Needle fireworks in Seattle are a highlight.',
    colors: ['#B22234', '#FFFFFF', '#3C3B6E', '#FF0000']
  },
  { 
    id: 'utc-9', offset: -9, label: 'Alaska Time', majorCities: ['Anchorage'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 9, 0, 0), hasCelebrated: false,
    greeting: 'Happy New Year', fact: 'Celebrating under the possible Northern Lights.',
    colors: ['#B22234', '#FFFFFF', '#3C3B6E', '#FFD700'] // Plus gold for aurora/stars
  },
  { 
    id: 'utc-930', offset: -9.5, label: 'Marquesas Islands', majorCities: ['Taiohae'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 9, 30, 0), hasCelebrated: false,
    greeting: 'Ia Ora Na', fact: 'French Polynesian island charm at midnight.',
    colors: ['#ED2939', '#FFFFFF', '#002395'] // French Polynesia / France
  },
  { 
    id: 'utc-10', offset: -10, label: 'Hawaii Time', majorCities: ['Honolulu'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 10, 0, 0), hasCelebrated: false,
    greeting: 'Hauʻoli Makahiki Hou', fact: 'Fireworks over Waikiki Beach light up the Pacific.',
    colors: ['#B22234', '#FFFFFF', '#3C3B6E', '#00267F'] // USA / Hawaii Blue
  },
  { 
    id: 'utc-11', offset: -11, label: 'American Samoa', majorCities: ['Pago Pago'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 11, 0, 0), hasCelebrated: false,
    greeting: 'Manuia le Tausaga Fou', fact: 'One of the very last inhabited places to celebrate.',
    colors: ['#B22234', '#FFFFFF', '#3C3B6E']
  },
  { 
    id: 'utc-12', offset: -12, label: 'Baker Island', majorCities: ['Baker Island'], 
    celebrationTime: Date.UTC(targetYear, 0, 1, 12, 0, 0), hasCelebrated: false,
    greeting: 'Aloha', fact: 'Uninhabited atoll that marks the official end of the day.',
    colors: ['#B22234', '#FFFFFF', '#3C3B6E', '#FFD700']
  },
].sort((a, b) => a.celebrationTime - b.celebrationTime);
