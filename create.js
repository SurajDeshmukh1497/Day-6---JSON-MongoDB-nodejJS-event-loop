async function createUser() {
    const newUser = new User({ name: 'Suraj', age: 27 });
    try {
      const doc = await newUser.save();
      console.log('Inserted document:', doc);
    } catch (err) {
      console.error('Error inserting document', err);
    }
  }