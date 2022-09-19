var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://rezaul:rezaul@cluster0.yp69cf6.mongodb.net/product?retryWrites=true&w=majority";
// var URL="mongodb://127.0.0.1:27017/";

MongoClient.connect(URL,function(err,MymongoClint){
    if(err){
        console.log('Connect fail');
        
    }else{
        console.log('Successfull run');
        // console.log(MymongoClint);
        // InseartData(MymongoClint);
        // DeleteData(MymongoClint);
        // DeleteAllIteam(MymongoClint);
        FindOneOutCondition(MymongoClint);
    }
});

function InseartData(MyMongoClint){
    var MyDataBase = 
    MyMongoClint.db("product");
    var MyCollection = MyDataBase.collection("mobiles");
    var MyData =[ 
        {
        name:"shakil",
        Roll:"01",
        class:'ten',
        City:'Tangail',
        },

        {
        name:"kawsar",
        Roll:"02",
        class:'ten',
        City:'Tangail',
        },

        {
        name:"sumon",
        Roll:"03",
        class:'ten',
        City:'Tangail',
        }
    ];
    
    MyCollection.insertMany(MyData,function(error){
        if(error){
            console.log('Data insert faield');
        }else{
            console.log("Data insert success");
        }
    })
};

function DeleteData(MyMongoClint){
    var MyDataBase = MyMongoClint.db('product');
    var MyCollection = MyDataBase.collection('mobiles');
    var DeletItem= {Roll:"01"};

    MyCollection.deleteOne(DeletItem,function(err){
        if(err){
            console.log("Data delete fail");
        }
        else{
            console.log("Data delete success");
        }
    })

};

function DeleteAllIteam (MyMongoClint){
    var MyDataBase = MyMongoClint.db('product');
    var MyCollection = MyDataBase.collection('mobiles');

    MyCollection.deleteMany(function (err,Resultobj){
        if(err){
            console.log("Delete Fail");
        }
       else{
        console.log('Delete all success');
        console.log(Resultobj +" Item Deleted");
       }
    })
};

function FindOneOutCondition(MyMongoClint){
    var MyDataBase = MyMongoClint.db('product');
    var MyCollection = MyDataBase.collection('mobiles');

    var FindObj = {}
    MyCollection.findOne(FindObj,function(err,result){
            if(result){
                console.log(result);
            }
            
    })
}



