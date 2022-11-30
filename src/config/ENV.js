import path from 'path';
import dotenv from 'dotenv';

// import .env variables
dotenv.config({
  path: path.resolve() + '.env',
  example: path.resolve() + '.env.example'
});

export const env = process.env.NODE_ENV || 'development';
export const port = process.env.PORT || 4000;
export const frontendUrl = process.env.FRONTENDURL || 'http://localhost:3000';
export const backendUrl = process.env.BACKENDURL || 'https://echo-serv.tbxnet.com/v1';
export const logs = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';

export const backendToken = process.env.BACKENDTOKEN || 'aSuperSecretKey';
