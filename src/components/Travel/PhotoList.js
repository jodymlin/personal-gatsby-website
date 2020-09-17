import React from "react"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/styles"
import {
  Backdrop,
  DialogContent,
  Fade,
  Grid,
  Modal,
  Typography,
} from "@material-ui/core"
import Title from "../Title/Title"

const usePhotoListStyles = makeStyles(theme => ({
  picWrapper: {
    display: "flex",
    justifyContent: "center",
    maxHeight: "300px",
    overflowY: "hidden",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dialogContent: {
    flex: "auto",
    padding: 0,
    maxWidth: "500px",
  },
  pic: {
    margin: "auto",
    width: "100%",
  },
  header: {
    padding: theme.spacing(8, 0, 0, 0),
  },
  blurb: {
    margin: theme.spacing(0, 0, 4, 0),
  },
}))

function GridItemAndImageModal({ node, ...props }) {
  const classes = usePhotoListStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Grid item xs={12} sm={6} key={node.base} {...props}>
        <div
          className={classes.picWrapper}
          role="button"
          tabIndex={0}
          onClick={handleOpen}
          onKeyDown={handleOpen}
        >
          <Img
            fluid={node.childImageSharp.fluid}
            alt={node.base.split(".")[0]}
            style={{ width: "100%" }}
            justify="center"
            className={classes.pic}
          />
        </div>
      </Grid>
      <Modal
        aria-labelledby="travel-image"
        aria-describedby={node.base.split(".")[0]}
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        {...props}
      >
        <DialogContent classes={{ root: classes.dialogContent }}>
          <Fade in={open}>
            <Img
              fluid={node.childImageSharp.fluid}
              alt={node.base.split(".")[0]}
              style={{ width: "100%", maxHeight: "80%" }}
              justify="center"
              className={classes.pic}
            />
          </Fade>
        </DialogContent>
      </Modal>
    </>
  )
}

/* TODO: maybe do separate pages per country? */
function PhotoList({ country, date, blurb, pictures }) {
  const classes = usePhotoListStyles()
  return (
    <>
      <Title className={classes.header}>{country}</Title>
      <div className={classes.blurb}>
        <Typography variant="h6" align="center">
          {date}
        </Typography>
        <Typography align="center">{blurb}</Typography>
      </div>

      <Grid container spacing={3} alignItems="center">
        {pictures.map(({ node }) => (
          <GridItemAndImageModal node={node} key={node.base} />
        ))}
      </Grid>
    </>
  )
}

export default PhotoList
