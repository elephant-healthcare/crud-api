import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'test') {
  dotenv.config({ silent: true });
}
