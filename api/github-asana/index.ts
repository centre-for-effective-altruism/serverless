import type { VercelRequest, VercelResponse } from '@vercel/node'

import { requestWrapper } from '../../lib/helpers'

async function handlePost(req: VercelRequest, res: VercelResponse) {
  console.log(req.body)
  res.status(204).end()
}

export default requestWrapper({
  POST: handlePost,
})
