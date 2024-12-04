import mongoose from 'mongoose';
import app from './app';
import { configData } from './config';

async function main() {
  try {
    await mongoose.connect(configData.db_uri as string);
    console.log('Database is connected successfully.');

    app.listen(configData.port, () => {
      console.log(`Application listening on port ${configData.port}`);
    });
  } catch (error) {
    console.log('Failed to connect the database.', error);
  }
}

main();
