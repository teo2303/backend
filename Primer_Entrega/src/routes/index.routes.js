import { Router } from 'express'

const router = Router()



router.get('/', (req, res) => {
    res.send('Página principal')
})


export default router