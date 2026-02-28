import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const SLIDESHOW_DIR = 'slideshow'
const IMAGE_EXTENSIONS = new Set(['.jpeg', '.jpg', '.png', '.gif'])

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), 'public', SLIDESHOW_DIR)

    if (!fs.existsSync(publicDir)) {
      return NextResponse.json({ images: [] })
    }

    const files = fs.readdirSync(publicDir)
    const images = files
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/${SLIDESHOW_DIR}/${file}`)

    return NextResponse.json({ images })
  } catch (err) {
    console.error('Slideshow API error:', err)
    return NextResponse.json({ images: [] }, { status: 500 })
  }
}
