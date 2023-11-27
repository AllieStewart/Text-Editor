// Start of JS file
// Initialize database from idb package.
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// Placeholder; check put.update correctness
export const putDb = async (content) => {
  console.log('Update the database');

  const contactDb = await openDB('jate', 1);

  const tx = contactDb.transaction('jate', 'readwrite');

  const put = tx.objectStore('jate');

  const request = put.update({content: content});

  const result = await request;
  console.log('Database updated', result);
  // if statement if error method
  console.error('putDb not implemented');
}

// TODO: Add logic for a method that gets all the content from the database
// Placeholder
export const getDb = async () => {
  console.log('GET from the database');

  const contactDb = await openDB('jate', 1);

  const tx = contactDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  // if statement if error method
  console.error('getDb not implemented');
  return result;
}

initdb();
// End of JS file