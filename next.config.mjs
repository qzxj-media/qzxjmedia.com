/** @type {import('next').NextConfig} */
import remarkFrontmatter from 'remark-frontmatter'
import rehypeHighlight from 'rehype-highlight'

const options = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter],
            rehypePlugins: [rehypeHighlight]
          }
        }
      ]
    })

    return config
  },
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
  // images: {
  //   loader: 'imgix',
  //   path: 'https://images.unsplash.com/'
  // }
}

export default options
