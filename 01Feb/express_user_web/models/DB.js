const { MongoClient } = require('mongodb');

function getClient()
{
    const uri = "mongodb+srv://root:root@cluster0.5hmpk.mongodb.net/userdb?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    return client
}

module.exports = getClient