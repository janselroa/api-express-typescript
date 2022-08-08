import { DiariesEntry } from "../types";
import diariesData from "./diariesentries.json";
const diaries: Array<DiariesEntry> = diariesData as Array<DiariesEntry>
export const getEntries = ()=> diaries
export const addEntries = ()=> null