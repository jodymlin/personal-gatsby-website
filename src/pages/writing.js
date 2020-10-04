import React from "react"
import { graphql } from "gatsby"
import { Container, Typography, List } from "@material-ui/core"
import Banner from "../components/Banner/Banner"
import HeaderFooter from "../components/HeaderFooter/HeaderFooter"
import { makeStyles } from "@material-ui/core/styles"
import StoryLink from "../components/StoryLink/StoryLink"

const useStyles = makeStyles(theme => ({
  caption: {
    padding: theme.spacing(3),
  },
}))

function getStoriesDict(edges) {
  const stories = {}

  edges.forEach(({ node }) => {
    const { relativeDirectory } = node.parent
    if (stories[relativeDirectory] === undefined) {
      stories[relativeDirectory] = []
    }
    const storyMarkdown = {
      frontmatter: { ...node.frontmatter },
    }
    stories[relativeDirectory].push(storyMarkdown)
  })

  return stories
}

function getSortedStoryList(edges) {
  // edges sorted by date already in graphql query
  const stories = []

  edges.forEach(({ node }) => {
    const { relativeDirectory } = node.parent
    if (!stories.includes(relativeDirectory)) {
      stories.push(relativeDirectory)
    }
  })

  return stories
}

function getStoryInfo(nodes, storyDict) {
  const storyInfo = {}

  nodes.forEach(({ parent }) => {
    const { relativeDirectory } = parent
    storyInfo[relativeDirectory] = parent.childYaml
    const otherInfo = {
      numChapters: storyDict[relativeDirectory].length,
      // because in descending order of updated-date, first chapter should be earliest
      link:
        storyDict[relativeDirectory][storyDict[relativeDirectory].length - 1]
          .frontmatter.slug,
      // gets the most updated story date
      lastUpdated: storyDict[relativeDirectory][0].frontmatter.date,
    }
    Object.assign(storyInfo[relativeDirectory], otherInfo)
  })
  return storyInfo
}

function Writing({ data }) {
  const classes = useStyles()

  const storyMarkdown = getStoriesDict(data.allMarkdownRemark.edges)
  const storyListByLastUpdated = getSortedStoryList(
    data.allMarkdownRemark.edges
  )
  const storyInfo = getStoryInfo(data.allYaml.nodes, storyMarkdown)

  return (
    <HeaderFooter>
      <Container maxWidth="md">
        <Banner title="Writing">
          <Typography align="center" className={classes.caption}>
            My second grade teacher once told me she was proud of a story I
            wrote :')
          </Typography>
        </Banner>

        <List>
          {storyListByLastUpdated.map(story => {
            const {
              title,
              link,
              description,
              genre,
              numChapters,
              lastUpdated,
            } = storyInfo[story]
            return (
              <StoryLink
                key={title}
                title={title}
                link={link}
                description={description}
                genre={genre}
                numChapter={numChapters}
                lastUpdated={lastUpdated}
              />
            )
          })}
        </List>
      </Container>
    </HeaderFooter>
  )
}

export default Writing

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: {
        order: [DESC, DESC]
        fields: [frontmatter___date, frontmatter___chapter]
      }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
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
    allYaml {
      nodes {
        parent {
          ... on File {
            relativeDirectory
            childYaml {
              title
              genre
              description
            }
          }
        }
      }
    }
  }
`
