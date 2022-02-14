const mongoose = require('mongoose');
const { mongodb } = require('./keys')
const db = mongoose.connection;
mongoose.connect(mongodb.URI, {})

db.once('open', ()=>{
	console.log('Database is connected')
})

db.on('err', (err)=>{
	console.log(err)
})