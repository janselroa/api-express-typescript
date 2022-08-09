import { DiariesEntry, NewDiarieEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diariesData from './diariesentries.json'
const diaries: DiariesEntry[] = diariesData as DiariesEntry[]
export const getEntries = (): DiariesEntry[] => diaries

export const findById = (id: number): DiariesEntry | undefined => {
  return diaries.find(d => d.id === id)
}
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiarieEntry: NewDiarieEntry): DiariesEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiarieEntry
  }
  diaries.push(newDiary)
  return newDiary
}
