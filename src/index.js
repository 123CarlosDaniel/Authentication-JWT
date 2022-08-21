import app from './app.js'
const port = app.get('PORT')
import './db.js'
app.listen(port)
console.log(`Server running on port ${port}`)
