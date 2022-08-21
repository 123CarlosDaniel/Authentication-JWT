import app from './app.js'
const port = app.get('PORT')
import './db.js'
try {
  app.listen(`${port}`)
  console.log(`Server running on port ${port}`)
} catch (error) {
  console.log(error)
}
