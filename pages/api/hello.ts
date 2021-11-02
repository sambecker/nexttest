import type { NextApiRequest, NextApiResponse } from 'next'
import { readFileSync } from 'fs'

const FONT_NAME = 'marcellus/MarcellusSC-Regular.woff2';

interface Props {
  fontPath: string
  fontData: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Props>
) {
  const fontPath = `${process.cwd()}/fonts/${FONT_NAME}`;
  const fontData = readFileSync(fontPath).toString('base64');

  res.status(200).json({
    fontPath,
    fontData,
  })
}
