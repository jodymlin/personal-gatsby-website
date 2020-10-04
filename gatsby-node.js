const travelDetails = require("./src/data/travel.js")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogTemplate = require.resolve(
    `./src/components/BlogTemplate/BlogTemplate.js`
  )

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___chapter] }) {
        edges {
          node {
            frontmatter {
              slug
              title
              chapter
            }
            parent {
              ... on File {
                relativeDirectory
              }
            }
          }
        }
      }
    }
  `)

  const storyChapters = {}
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { relativeDirectory } = node.parent
    if (storyChapters[relativeDirectory] === undefined) {
      storyChapters[relativeDirectory] = []
    }
    storyChapters[relativeDirectory].push({
      title: node.frontmatter.title,
      slug: node.frontmatter.slug,
      directory: relativeDirectory,
    })
  })

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  for (const [story, chapters] of Object.entries(storyChapters)) {
    for (let i = 0; i < chapters.length; i++) {
      createPage({
        path: chapters[i].slug,
        component: blogTemplate,
        context: {
          slug: chapters[i].slug,
          directory: chapters[i].directory,
          nextChapter: i === chapters.length - 1 ? null : chapters[i + 1],
          previousChapter: i === 0 ? null : chapters[i - 1],
          chapterList: chapters,
          chapterIndex: i,
        },
      })
    }
  }
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  graphql,
}) => {
  const { createNode } = actions
  const promises = []

  for (const trip of travelDetails) {
    promises.push(
      createNode({
        ...trip,
        id: createNodeId(`${trip.country}-${trip.date}`),
        parent: null,
        children: [],
        internal: {
          type: `TravelDetail`,
          contentDigest: createContentDigest(JSON.stringify(trip)),
        },
      })
    )
  }
  return Promise.all(promises)
}
