
export interface TimezoneData {
  offset: number;
  label: string;
  majorCities: string[];
  id: string;
  hasCelebrated: boolean;
  celebrationTime: number; // UTC timestamp for midnight
  greeting: string;
  fact: string;
  colors: string[]; // Flag colors for fireworks
}

export interface CulturalFact {
  timezone: string;
  greeting: string;
  fact: string;
}

export enum CelebrationStatus {
  UPCOMING = 'UPCOMING',
  JUST_HAPPENED = 'JUST_HAPPENED',
  PAST = 'PAST'
}
