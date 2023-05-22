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

// GET All Parts
app.get('/assemblies', async (req, res) => {
  try {
    // LOGIN to BC and Get Auth
    const params = new url.URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'https://api.businesscentral.dynamics.com/.default',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    });

    const bcAuth = await axios.post('https://login.microsoftonline.com/7aa2252f-93b4-403c-b991-98cdddb2fc93/oauth2/v2.0/token', params.toString());
    const bcAuthToken = bcAuth.data.access_token;

    const baseUrl = "https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')";

    const itemNos = [
      'HSA12401-001', 'HSA12402-001', 'HSA12501-001', 'HSA12502-001', 'HSA12601-001',
      'HSA12602-001', 'HSA20000', 'HSA20001', 'HSA20002', 'HSA20003', 'HSA20004',
      'HSA20005', 'HSA20006', 'HSA20007', 'CTA11852', 'CTA11846', 'CTA11854'
    ];

    const itemNoFilter = itemNos.map(itemNo => `No eq '${itemNo}'`).join(' or ');
    const url = `${baseUrl}/Item_Card?$filter=${itemNoFilter}`;

    const headers = { Authorization: `Bearer ${bcAuthToken}` };
    const response = await axios.get(url, { headers });
    const itemData = response.data.value;

    const dataArr = itemData.map(item => ({
      No: item.No,
      Description: item.Description,
      QuantityAvailable: item.QuantityAvailable
    }));

    // Loop through database array add matching threshold and note from database
    const allPartsDB = await Parts.find({});
    const newArr = dataArr.map((d) => {
      const foundPart = allPartsDB.find((p) => p.no === d.No);
      return {
        ...d,
        threshold: foundPart.threshold,
        note: foundPart.note
      };
    });

    res.send(newArr);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/components', async (req, res) => {
  try {
    // Login to BC and get Auth
    const params = new url.URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'https://api.businesscentral.dynamics.com/.default',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    });

    const bcAuth = await axios.post('https://login.microsoftonline.com/7aa2252f-93b4-403c-b991-98cdddb2fc93/oauth2/v2.0/token', params.toString());
    const bcAuthToken = bcAuth.data.access_token;

    const baseUrl = "https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')";

    const itemNos = [
      'HSA12401-001', 'HSA12402-001', 'HSA12501-001', 'HSA12502-001', 'HSA12601-001',
      'HSA12602-001', 'HSA20000', 'HSA20001', 'HSA20002', 'HSA20003', 'HSA20004',
      'HSA20005', 'HSA20006', 'HSA20007', 'CTA11852', 'CTA11846', 'CTA11854'
    ];

    const itemNoFilter = itemNos.map(itemNo => `No eq '${itemNo}'`).join(' or ');
    const url = `${baseUrl}/Item_Card?$filter=${itemNoFilter}`;

    const headers = { Authorization: `Bearer ${bcAuthToken}` };
    const response = await axios.get(url, { headers });
    const itemData = response.data.value;

    const dataArr = itemData.map(item => ({
      No: item.No,
      Description: item.Description,
      QuantityAvailable: item.QuantityAvailable
    }));

    // Loop through database array add matching threshold and note from database
    const allPartsDB = await Parts.find({});
    const newArr = dataArr.map((d) => {
      const foundPart = allPartsDB.find((p) => p.no === d.No);
      return {
        ...d,
        threshold: foundPart.threshold,
        note: foundPart.note
      };
    });

    res.send(newArr);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/crenshaw', async (req, res) => {
  try {
    // LOGIN to BC and Get Auth
    const params = new url.URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'https://api.businesscentral.dynamics.com/.default',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    });

    const bcAuth = await axios.post('https://login.microsoftonline.com/7aa2252f-93b4-403c-b991-98cdddb2fc93/oauth2/v2.0/token', params.toString());
    const bcAuthToken = bcAuth.data.access_token;

    const baseUrl = "https://api.businesscentral.dynamics.com/v2.0/7aa2252f-93b4-403c-b991-98cdddb2fc93/Production/ODataV4/Company('Sea-Land%20Distributors%2C%20LLC')";

    const itemNos = [
      'HSA12401-001', 'HSA12402-001', 'HSA12501-001', 'HSA12502-001', 'HSA12601-001',
      'HSA12602-001', 'HSA20000', 'HSA20001', 'HSA20002', 'HSA20003', 'HSA20004',
      'HSA20005', 'HSA20006', 'HSA20007', 'CTA11852', 'CTA11846', 'CTA11854'
    ];

    const itemNoFilter = itemNos.map(itemNo => `No eq '${itemNo}'`).join(' or ');
    const url = `${baseUrl}/Item_Card?$filter=${itemNoFilter}`;

    const headers = { Authorization: `Bearer ${bcAuthToken}` };
    const response = await axios.get(url, { headers });
    const itemData = response.data.value;

    const dataArr = itemData.map(item => ({
      No: item.No,
      Description: item.Description,
      QuantityAvailable: item.QuantityAvailable
    }));

    // Loop through database array add matching threshold and note from database
    const allPartsDB = await Parts.find({});
    const newArr = dataArr.map((d) => {
      const foundPart = allPartsDB.find((p) => p.no === d.No);
      return {
        ...d,
        threshold: foundPart.threshold,
        note: foundPart.note
      };
    });

    res.send(newArr);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
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