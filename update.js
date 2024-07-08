async function updateUser() {
    async function updateUser() {
        try {
          const doc = await User.findOneAndUpdate(
            { name: 'Alice' }, // Query
            { age: 26 }, // Update
            { new: true } // Return the updated document
          );
          console.log('Updated document:', doc);
        } catch (err) {
          console.error('Error updating document', err);
        }
      }
}