import React from 'https://esm.sh/react'
import { renderToReadableStream } from 'https://esm.sh/react-dom/server'
import type { Config, Context } from 'https://edge.netlify.com/'

export default async function handler(req: Request, context: Context) {
  const stream = await renderToReadableStream(
    <html>
      <title>Hello</title>
      <body>
        <h1>Hello {context.geo.country?.name}</h1>
      </body>
    </html>,
  )

  return new Response(stream, {
    status: 200,
    headers: { 'Content-Type': 'text/html' },
  })
}

export const config: Config = {
  path: "/hello"
}
