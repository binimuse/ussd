const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 4005

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {
  res.send('worked')
})

app.post('*', (req, res) => {
  let {sessionId, serviceCode, phoneNumber, text} = req.body
  if (text == '') {
    // This is the first request. Note how we start the response with CON
    let response = `CON Wellcome to Taxiye
    1. enter you name`
    res.send(response)
  } else if (text != null) {
    // Business logic for first level response
    let response = `CON  
           enter you orgin
	  enter 2. to cancel`
    res.send(response)
  }
   else if (text != null) {
    // Business logic for first level response
    let accountNumber = 'did you mean bole around dembel'
    // This is a terminal request. Note how we start the response with END
    let response = `CON accountNumber
	please Choose driver
	1. yes
	2. no`
    res.send(response)
  } 
   else if (text == '1') {
    // Business logic for first level response
    // Business logic for first level response
    let response = `CON  
           enter you destination
	  enter 2. to cancel`
    res.send(response)
  
  }
else if (text != null) {
    // Business logic for first level response
    let accountNumber = 'did you mean mexico around debrewerk'
    // This is a terminal request. Note how we start the response with END
    let response = `CON accountNumber
	please Choose driver
	1. yes
	2. no`
    res.send(response)
  }   
  
  else if (text == '1*1*1') {
	  let response = `END Confirmation message will be sent 
								Thank you!!!`
	   res.send(response)
  }
  else {
    res.status(400).send('Bad request!')
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
