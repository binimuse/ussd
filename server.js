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
    1. Passenger Menu
    2. Driver Menu`
    res.send(response)
  } else if (text == '1') {
    // Business logic for first level response
    let response = `CON  
    1. find taxi
	  2. cancel`
    res.send(response)
  }
	
	
	
   else if (text == '2') {
    let response = `CON  
    1. Avalable 
	2. occupied
	3. Confirm pick up
	4. back
	5. cancel`
    res.send(response)
  } else if (text == '1*1') {
    // Business logic for first level response
    let accountNumber = 'ACC1001'
    // This is a terminal request. Note how we start the response with END
    let response = `CON Taxiye Normal
	please Choose driver
	1. +251923798638.usr on 10 km
	2. +251923775330.usr on 30 km`
    res.send(response)
  } 
  
  
  else if (text == '1*1*1*1') {
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
