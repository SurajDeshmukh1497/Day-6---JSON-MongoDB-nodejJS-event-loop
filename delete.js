async function deleteUser() {
    try {
      const result = await User.deleteOne({ name: 'Alice' });
      console.log('Deleted document count:', result.deletedCount);
    } catch (err) {
      console.error('Error deleting document', err);
    }
  }