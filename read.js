async function findUser() {
    try {
      const doc = await User.findOne({ name: 'Alice' });
      console.log('Found document:', doc);
    } catch (err) {
      console.error('Error finding document', err);
    }
  }