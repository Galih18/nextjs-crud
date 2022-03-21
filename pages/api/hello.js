// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const connectDb = require('../../utils/connectDb')

connectDb();

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
