import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const port = process.env.PORT || process.env.DEFAULT_PORT;

const db_uri: string = process.env.DB_URI as string;

export const configData = {
  port,
  db_uri,
};
