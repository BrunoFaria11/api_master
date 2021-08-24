 import express from 'express' 
const db = require('./models')
const routers = require('./routes')

// Database

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use("/", express.static("build/public"));


// Routes
app.use(express.json())
app.use('/', routers)


const PORT = process.env.PORT || 5000;

console.log(db)
// db.authenticate().then(() => {
//   console.log('Connected')
// })

app.listen(PORT, () => console.log(`Now browse to localhost:${PORT}`));




