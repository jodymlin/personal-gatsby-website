import React from "react"
import { Link } from "gatsby"
import { ListItem, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  link: {
    textDecoration: "underline",
    textDecorationColor: theme.palette.primary.main,
    "&:hover": {
      textDecoration: "none",
    },
  },
  wrapper: {
    width: "100%",
  },
})

function StoryLink({
  classes,
  title,
  genre,
  link,
  numChapter,
  lastUpdated,
  description,
}) {
  return (
    <ListItem disableGutters divider>
      <div className={classes.wrapper}>
        <Link to={`/${link}`} className={classes.link}>
          <Typography variant="h4" component="h3" color="primary" gutterBottom>
            {title}
          </Typography>
        </Link>
        <Typography>{description}</Typography>
        <Typography color="textSecondary" gutterBottom>
          Chapters: {numChapter} · Genre: {genre.join(", ")} · Last Updated{" "}
          {lastUpdated}
        </Typography>
      </div>
    </ListItem>
  )
}

export default withStyles(styles)(StoryLink)
