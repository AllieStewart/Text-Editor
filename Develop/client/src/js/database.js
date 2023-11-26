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
// Placeholder
export const putDb = async (content) => {
  console.error('putDb not implemented');
}

// TODO: Add logic for a method that gets all the content from the database
// Placeholder
export const getDb = async () => {
  console.log('GET from the database');

  const contactDb = await openDB('contact', 1);

  const tx = contactDb.transaction('contact', 'readonly');

  const store = tx.objectStore('contact');

  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  console.error('getDb not implemented');
  return result;
}

initdb();
// End of JS file