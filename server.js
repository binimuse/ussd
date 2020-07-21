const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {
  res.send('This is tutorial App on creating your first USSD app in 5 minutes or less by Ajala Abdulsamii <kgasta@gmail.com>')
})

app.post('*', (req, res) => {
  let {sessionId, serviceCode, phoneNumber, text} = req.body
  if (text == '') {
    // This is the first request. Note how we start the response with CON
    let response = `CON Wellcome to Taxiye
    1. Find Taxi
    2. Cancel`
    res.send(response)
  } else if (text == '1') {
    // Business logic for first level response
    let response = `CON Choose Car 
    1. Taxiye normal
	2. Taxiye mini
	3. Lada
	4. Bajaj
	5. Bike`
    res.send(response)
  } else if (text == '2') {
    // Business logic for first level response
    res.status(400).send('Bad request!')
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
  } else if (text == '1*2') {
    // This is a second level response where the user selected 1 in the first instance
    let balance = 'NGN 10,000'
    // This is a terminal request. Note how we start the response with END
    let response = `CON Taxiye Mini
	please Choose driver
	1. +251923798638.usr on 10 km
	2. +251923775330.usr on 30 km`
    res.send(response)
  } 
  
  else if (text == '1*1*1') {
	  let response = `Confirmation message will be sent 
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
