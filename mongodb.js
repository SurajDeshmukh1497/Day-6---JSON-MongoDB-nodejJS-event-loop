const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost:27017/myDatabase'; // Replace with your MongoDB URL and database name

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Create a model
const User = mongoose.model('User', userSchema);

// Example: Insert a document
const newUser = new User({ name: 'Alice', age: 25 });
newUser.save()
  .then(doc => {
    console.log('Inserted document:', doc);
  })
  .catch(err => {
    console.error('Error inserting document', err);
  });

// Example: Find a document
User.findOne({ name: 'Alice' })
  .then(doc => {
    console.log('Found document:', doc);
  })
  .catch(err => {
    console.error('Error finding document', err);
  });


// Outputcd

//   //Connected to MongoDB
// Found document: null
// Inserted document: {
//   name: 'Alice',
//   age: 25,
//   _id: new ObjectId('6688047128629888b77fe782'),
//   __v: 0
// }
// Connected to MongoDB
// Found document: null
// Inserted document: {
//   name: 'Alice',
//   age: 25,
//   _id: new ObjectId('6688047128629888b77fe782'),
//   __v: 0
// }
