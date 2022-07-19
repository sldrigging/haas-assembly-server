const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Parts = require('./model/part')
const axios = require('axios')
const url = require('url')

// Middleware
app.use(cors())
app.use(express.json())

// DB Setup
// Connect to DB
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

// ROUTES
  // GET All Parts
app.get('/assemblies', async (req, res) => {
  // LOGIN to BC and Get Auth
  let bcAuthToken = ""

  const params = new url.URLSearchParams({
    grant_type: "client_credentials",
    scope: "https://api.businesscentral.dynamics.com/.default",
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET
})

  let bcAuth = await axios.post('https://login.microsoftonline.com/7aa2252f-93b4-403c-b991-98cdddb2fc93/oauth2/v2.0/token', params.toString())
  bcAuthToken = bcAuth.data.access_token
  
  // Get Assembly Data from BC with Auth
  let bcRes0 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA12401-001')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes1 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA12402-001')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes2 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA12501-001')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes3 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA12502-001')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes4 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA12601-001')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes5 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA12602-001')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes6 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA20000')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes7 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA20001')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes8 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA20002')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes9 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA20003')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes10 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA20004')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes11 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA20005')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes12 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA20006')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })

  let bcRes13 = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')/Item_Card(No='HSA20007')`, {
    headers: {
      Authorization: `Bearer ${bcAuthToken}`
    }
  })
  
 

  // Create array of assembly objects
  let dataArr = []
  // No,Description, QuantityAvailable
  dataArr.push({No: bcRes0.data.No, Description: bcRes0.data.Description, QuantityAvailable: bcRes0.data.QuantityAvailable})
  dataArr.push({No: bcRes1.data.No, Description: bcRes1.data.Description, QuantityAvailable: bcRes1.data.QuantityAvailable})
  dataArr.push({No: bcRes2.data.No, Description: bcRes2.data.Description, QuantityAvailable: bcRes2.data.QuantityAvailable})
  dataArr.push({No: bcRes3.data.No, Description: bcRes3.data.Description, QuantityAvailable: bcRes3.data.QuantityAvailable})
  dataArr.push({No: bcRes4.data.No, Description: bcRes4.data.Description, QuantityAvailable: bcRes4.data.QuantityAvailable})
  dataArr.push({No: bcRes5.data.No, Description: bcRes5.data.Description, QuantityAvailable: bcRes5.data.QuantityAvailable})
  dataArr.push({No: bcRes6.data.No, Description: bcRes6.data.Description, QuantityAvailable: bcRes6.data.QuantityAvailable})
  dataArr.push({No: bcRes7.data.No, Description: bcRes7.data.Description, QuantityAvailable: bcRes7.data.QuantityAvailable})
  dataArr.push({No: bcRes8.data.No, Description: bcRes8.data.Description, QuantityAvailable: bcRes8.data.QuantityAvailable})
  dataArr.push({No: bcRes9.data.No, Description: bcRes9.data.Description, QuantityAvailable: bcRes9.data.QuantityAvailable})
  dataArr.push({No: bcRes10.data.No, Description: bcRes10.data.Description, QuantityAvailable: bcRes10.data.QuantityAvailable})
  dataArr.push({No: bcRes11.data.No, Description: bcRes11.data.Description, QuantityAvailable: bcRes11.data.QuantityAvailable})
  dataArr.push({No: bcRes12.data.No, Description: bcRes12.data.Description, QuantityAvailable: bcRes12.data.QuantityAvailable})
  dataArr.push({No: bcRes13.data.No, Description: bcRes13.data.Description, QuantityAvailable: bcRes13.data.QuantityAvailable})
  
  // Loop through database array add matching threshold and note from database
  let allPartsDB = await Parts.find({})
 
  let newArr = dataArr.map((d) => {
    let foundPart = allPartsDB.find((p) => p.no === d.No)
    return ({...d, threshold: foundPart.threshold, note: foundPart.note})
  })

  res.send(newArr)
})
// PUT - Update Part
app.put('/assemblies/:id', async (req, res) => {
  const body = req.body
  const part = {
    no: body.no,
    name: body.name,
    threshold: body.threshold,
    note: body.note
  }

  const updatedPart = await Parts.findOneAndUpdate({no: req.params.id}, part, {new: true})
  res.json(updatedPart)
})

module.exports = app