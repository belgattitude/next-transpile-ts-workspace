import { NextApiRequest, NextApiResponse } from 'next';
export default async function (req: NextApiRequest, res: NextApiResponse) {
  return res.send(req.query.word)
}
