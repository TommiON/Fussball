require('dotenv').config();

export const DATABASE_URL: string = process.env.DATABASE_URL as string;
export const PORT: number = 3003;
