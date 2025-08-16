import express from 'express'
import Child from '../models/Children.js'
const router = express.Router()

router.get("/", async (req, res) => {
    const items = await Child.find().sort({ createdAt: -1 })
    res.json(items)
})

router.post('/', async (req, res) => {
    const child = await Child.create({ name: req.body.name, age: req.body.age })
    res.status(201).json(child)
})

export default router