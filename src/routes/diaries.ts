import { Router } from 'express'
import * as diaryServices from '../services/diaries'

const router = Router()
router.get('/', (_, res) => {
  const data = diaryServices.getEntriesWithoutSensitiveInfo()
  res.json(data)
})
router.post('/', (req, res) => {
  try {
    const { date, weather, visibility, comment } = req.body
    const newDiarieEntry = diaryServices.addDiary({ date, weather, visibility, comment })
    res.json(newDiarieEntry)
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
