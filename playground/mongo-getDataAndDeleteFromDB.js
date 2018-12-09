const {MongoClient, ObjectID} = require('mongodb');





MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
	if(err){return console.log('Unable to connect to MongoDB server')}

	console.log("Connected to MongoDB server ")
	const db = client.db('TodoApp')
	const collection = db.collection('Todos')
	let name = 'juice tits'

	collection.find({}).toArray( (err, docs) => { // the .find method acts as a pointer, so for example if we add in the object of find method the parameter pornStar: 'Alyssa Malia',
	// the method points to all documents which have the value of "Alyssa Malia" for the pornstar property. The toArray method is called a cursor method for mongoDB.
	//A cursor method is how the data that was pointed to is executed. So for this example, the pointer points to all data in mongodb because if you look at the obj
	//parameter in the find method, it contains nothing, which means all documents will show. The cursor method will return all teh data found in the db as an array.
    	console.log("Found the following records as of");
    	console.log(docs)

	});

	

	//collection.deleteOne({pornStar: "Alyssa Malia"}, (err, doc) => { //if there are multiple properties with same value, deletes first instance,	
	//	console.log(doc)											   //use deleteMany to delete all instances. Example below these 3 commented lines.	
	//})

	//collection.deleteMany({pornStar: "Tilda Camicyian"}, (err, docs) =>{
	//	console.log(docs.deletedCount + " instances of the name Tilda Camicyian were found in the database and deleted.")
	//});


	collection.findOneAndDelete({_id: ObjectID("5c0d4c9375ca4159b0545f89")}, (err, result) =>{ //ObjectID() is a method to turn a string into a mongodb obj id.
			try{
				console.log(result.value.pornStar + " was deleted from database")
			}
			catch(err){
				console.log("No such pornStar exists in the database")
			}
	
		});
	console.log(ObjectID())
 
	client.close();
});
