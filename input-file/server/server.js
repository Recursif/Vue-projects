

const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

var multer  = require('multer')
const upload = multer({ dest: "uploads/" })



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../static')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file);
    res.redirect('/')
})


var port = 8000
app.listen(port, () => {
    console.log("server is running on port : %s ...", port)
})