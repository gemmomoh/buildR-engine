import React from "react";
import "./style.css";
import Banner from "../Res/banner.jpg";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import {
  Button,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
import FileOpenTwoToneIcon from "@mui/icons-material/FileOpenTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        fullWidth
        fullScreen={fullScreen}
        open={open}
        maxWidth='md'
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'>
        <DialogTitle id='responsive-dialog-title'>
          {"Create A New Project"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Project Name'
            type='text'
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
      <Box>
        <Grid
          container
          alignItems='flex-end'
          justifyContent='center'
          left={0}
          position='absolute'
          top={180}>
          <Grid item>
            <Card align='center' sx={{ width: "600px", height: "300px" }}>
              <CardMedia
                component='img'
                image={Banner}
                style={{ height: "145px" }}
                draggable='false'
                alt='banner'
              />
              <Divider sx={{ borderBottomWidth: 5 }} />

              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Welcome to buildR engine
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  It's time to build Real Games
                </Typography>
              </CardContent>

              <Typography
                variant='body2'
                component='div'
                color='text.secondary'
                sx={{
                  justifyContent: "end",
                  display: "flex",
                  top: "35px",
                  right: "6px",
                  position: "relative",
                }}>
                ver 1.0.0
              </Typography>
              <Typography
                variant='body2'
                component='div'
                color='text.secondary'
                sx={{
                  justifyContent: "start",
                  display: "flex",
                  left: "6px",
                  position: "relative",
                  top: "15px",
                }}>
                Made with
                {
                  <>
                    <FavoriteTwoToneIcon fontSize='small' />
                  </>
                }
                by Gabriel Momoh
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction='row'
          alignItems='flex-end'
          justifyContent='center'
          position='absolute'
          height={500}
          top={110}
          left={0}>
          <Grid item>
            <Card align='center'>
              <CardActionArea
                sx={{ width: "100px", height: "100px", opacity: 0.9 }}
                onClick={handleClickOpen}>
                <CardMedia
                  component='div'
                  sx={{ height: "5px", bgcolor: "primary.main" }}
                  draggable='false'
                />
                <CardContent>
                  {<AddBoxTwoToneIcon fontSize='large' />} Create Project
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Divider />
          <Grid item>
            <Card align='center'>
              <CardActionArea
                sx={{ width: "100px", height: "100px", opacity: 0.9 }}>
                <CardMedia
                  component='div'
                  sx={{ height: "5px", bgcolor: "primary.main" }}
                  draggable='false'
                />

                <CardContent>
                  {<FileOpenTwoToneIcon fontSize='large' />} Open Project
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Divider />
          <Grid item>
            <Card align='center'>
              <CardActionArea
                sx={{ width: "100px", height: "100px", opacity: 0.9 }}>
                <CardMedia
                  component='div'
                  sx={{ height: "5px", bgcolor: "primary.main" }}
                  draggable='false'
                />

                <CardContent>
                  {<MenuBookTwoToneIcon fontSize='large' />} Read <br /> Docs
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card align='center'>
              <CardActionArea
                sx={{ width: "100px", height: "100px", opacity: 0.9 }}>
                <CardMedia
                  component='div'
                  sx={{ height: "5px", bgcolor: "primary.main" }}
                  draggable='false'
                />

                <CardContent>
                  {<GitHubIcon fontSize='large' />} Contribute <br /> on Github
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
