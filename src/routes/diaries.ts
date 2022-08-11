import { Router } from 'express'
import * as diaryServices from '../services/diaries'
import toNewDiaryEntry from '../utils'

const router = Router()
router.get('/', (_, res) => {
  const data = diaryServices.getEntriesWithoutSensitiveInfo()
  res.json(data)
})
router.post('/', (req, res) => {
  try {
    const newDiarieEntry = toNewDiaryEntry(req.body)
    const addDiaryEntry = diaryServices.addDiary(newDiarieEntry)
    res.json(addDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})
router.get('/:id', (req, res) => {
  const entry = diaryServices.findById(+req.params.id)
  if (entry != null) return res.json(entry)
  return res.sendStatus(404)
})
export default router
