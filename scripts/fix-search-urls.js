const fs = require('fs/promises')
const path = require('path')

hexo.extend.filter.register('after_generate', async function () {
  const searchPath = path.join(hexo.public_dir, 'search.xml')

  try {
    const xml = await fs.readFile(searchPath, 'utf8')
    const normalized = xml
      .replace(/(<link href=")\/\/+/g, '$1/')
      .replace(/(<url>)\/\/+/g, '$1/')

    if (normalized !== xml) {
      await fs.writeFile(searchPath, normalized, 'utf8')
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
})
