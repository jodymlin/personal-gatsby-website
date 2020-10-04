import React from "react"
import { graphql, Link } from "gatsby"
import HeaderFooter from "../HeaderFooter/HeaderFooter"
import {
  Button,
  Container,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { makeStyles } from "@material-ui/core/styles"
import ScrollTop from "../ScrollTop/ScrollTop"
import MDContainer from "./MDContainer"

const useStyles = makeStyles(theme => ({
  topNavigation: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: theme.spacing(2, 0),
  },
  backLink: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  chapterTitle: {
    margin: theme.spacing(4, 0, 1),
  },
  bottomNavigation: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  chapterPicker: {
    marginLeft: "auto",
  },
}))

function PreviousButton({ previousChapter }) {
  const classes = useStyles()
  if (previousChapter) {
    return (
      <Link to={`/${previousChapter.slug}`} className={classes.link}>
        <Button color="primary" disabled={!previousChapter}>
          <NavigateBeforeIcon />
          Previous
        </Button>
      </Link>
    )
  } else return null
}

function NextButton({ nextChapter }) {
  const classes = useStyles()
  if (nextChapter) {
    return (
      <Link to={`/${nextChapter.slug}`} className={classes.link}>
        <Button color="primary">
          Next
          <NavigateNextIcon />
        </Button>
      </Link>
    )
  } else return null
}

function ChapterPicker({ chapterIndex, chapterTitle, chapterList }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Button color="primary" onClick={handleClickListItem}>
        {chapterIndex + 1}. {chapterTitle}
        <ExpandMoreIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        disableScrollLock
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {chapterList.map((chapter, index) => (
          <Link
            to={`/${chapter.slug}`}
            className={classes.link}
            key={chapter.title}
          >
            <MenuItem
              disabled={index === chapterIndex}
              onClick={event => handleMenuItemClick(event, index)}
            >
              {`${index + 1}. ${chapter.title}`}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  )
}

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const classes = useStyles()
  const {
    nextChapter,
    previousChapter,
    chapterList,
    chapterIndex,
  } = pageContext
  const { markdownRemark, file } = data // data.markdownRemark holds your post data
  const { frontmatter, html, wordCount } = markdownRemark
  const { childYaml } = file

  return (
    <HeaderFooter>
      <Container maxWidth="md">
        <div id="nav-bar" className={classes.topNavigation}>
          <Link to={"/writing"} className={classes.link}>
            <div className={classes.backLink}>
              <NavigateBeforeIcon color="primary" fontSize="large" />
              <Typography color="primary">Back to All Stories</Typography>
            </div>
          </Link>

          <div className={classes.chapterPicker}>
            <PreviousButton previousChapter={previousChapter} />
            <ChapterPicker
              chapterIndex={chapterIndex}
              chapterTitle={frontmatter.title}
              chapterList={chapterList}
            />
            <NextButton nextChapter={nextChapter} />
          </div>
        </div>

        <Typography variant="h5" component="h2" gutterBottom>
          {childYaml.title}
        </Typography>

        <hr />
        <Typography
          variant="h4"
          component="h1"
          className={classes.chapterTitle}
        >
          {frontmatter.title}
        </Typography>
        <Typography color="textSecondary">
          {frontmatter.date} · Words: {wordCount.words.toLocaleString()}
        </Typography>

        <MDContainer html={html} />
        <hr />

        <div className={classes.bottomNavigation}>
          <PreviousButton previousChapter={previousChapter} />
          <ChapterPicker
            chapterIndex={chapterIndex}
            chapterTitle={frontmatter.title}
            chapterList={chapterList}
          />
          <NextButton nextChapter={nextChapter} />
        </div>
        <ScrollTop backToTopAnchorId="nav-bar" />
      </Container>
    </HeaderFooter>
  )
}

export const pageQuery = graphql`
  query($slug: String!, $directory: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        slug
        title
      }
      wordCount {
        words
      }
    }
    file(
      relativeDirectory: { eq: $directory }
      extension: { eq: "yml" }
      name: { eq: "info" }
    ) {
      childYaml {
        title
      }
    }
  }
`
