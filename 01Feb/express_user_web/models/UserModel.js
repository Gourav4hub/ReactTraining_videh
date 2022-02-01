const dbClient = require('./DB')
class UserModel
{
    registerUser(data,callback)
    {
        var client = dbClient()
        client.connect(err => 
        {
            const collection = client.db("userdb").collection("user");
            collection.insertOne(data,(err)=>
            {
                client.close();
                if(err)
                {
                    console.log(err)
                    callback(false)
                }else{
                    callback(true)
                }
            })            
        });
    }
}

module.exports = new UserModel()



