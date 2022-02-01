const dbClient = require('./DB')
class UserModel
{
    registerUser(data,callback)
    {
        var client = dbClient()
        client.connect(err => 
        {
            const collection = client.db("userdb").collection("user");
            collection.insertOne(data,(err,record)=>
            {
                client.close();
                if(err)
                {
                    console.log(err)
                    callback(false)
                }else{
                    data._id = record.insertedId
                    callback(data)
                }
            })            
        });
    }

    listUsers(callback)
    {
        var client = dbClient()
        client.connect(err => 
        {
            const collection = client.db("userdb").collection("user");
            collection.find().toArray((err,records)=>{
                if(err)
                    callback(false)
                else
                    callback(records)    
            })
        });
    }

    getUser(email,callback)
    {
        var client = dbClient()
        client.connect(err => 
        {
            const collection = client.db("userdb").collection("user");
            collection.findOne({email:email},(err,record)=>{
                if(err)
                    callback(false)
                else
                    callback(record)    
            })
        });
    }

    loginUser(email,password,callback)
    {
        var client = dbClient()
        client.connect(err => 
        {
            const collection = client.db("userdb").collection("user");
            collection.findOne({email:email,password:password},(err,record)=>{
                if(err)
                    callback(false)
                else
                    callback(record)    
            })
        });
    }
}

module.exports = new UserModel()



