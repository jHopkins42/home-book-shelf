//imports / constants / required
const mongoose = require('mongoose');

//dotenv connection
mongoose.connect(process.env.MONGODB_CNCT || 'mongodb://127.0.0.1:27017/googlebooks');

//exports and tea and crumpets
module.export - MongoDBNamespace.connection;
