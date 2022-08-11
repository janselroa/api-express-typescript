import { NewDiarieEntry, Visiblity, Weather } from './types'

const parseComment = (commentFromRequest: any): string => { 
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRequest
}
const isString = (string: any): Boolean => {
  return (typeof string === 'string' || string instanceof String)
}
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date")
  }
  return dateFromRequest
} 

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}
const parseWeather = (weatherFromRequest: any): Weather =>{
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
    throw new Error("Incorrect or missing weather")
  }
  return weatherFromRequest
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVibility = (param: any): boolean => {
  return Object.values(Visiblity).includes(param)
}

const parseVisibility = (visibilityFromRequest: any): Visiblity =>{
  if(!isString(visibilityFromRequest) || !isVibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): NewDiarieEntry => {
  const newEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}
export default toNewDiaryEntry
