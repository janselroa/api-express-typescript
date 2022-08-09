export type Weather = 'sunny' | 'rainy' | 'cloudy' |'windy' | 'stormy'
export type Visiblity = 'great' | 'good' | 'ok' | 'poor'

export interface DiariesEntry{
  id: number
  date: string
  weather: Weather
  visibility: Visiblity
  comment: string
}
export type NonSensitiveInfoDiaryEntry = Omit<DiariesEntry, 'comment'>
export type NewDiarieEntry = Omit<DiariesEntry, 'id'>
