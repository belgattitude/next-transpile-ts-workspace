import { NextApiRequest, NextApiResponse } from 'next';
import foo from '@optional-package-scope/foo';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  return res.send(foo)
}
