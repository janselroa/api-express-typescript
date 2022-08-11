export enum Weather{
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visiblity{
  Great = 'great',
  Good = 'ok',
  Ok = 'ok',
  Poor = 'poor'
}

export interface DiariesEntry{
  id: number
  date: string
  weather: Weather
  visibility: Visiblity
  comment: string
}
export type NonSensitiveInfoDiaryEntry = Omit<DiariesEntry, 'comment'>
export type NewDiarieEntry = Omit<DiariesEntry, 'id'>
