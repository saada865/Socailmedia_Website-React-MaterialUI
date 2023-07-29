import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box  flex={2} p={2}
    sx={{display: { xs:"none", sm: "block" } }}>

    <Box position="fixed" width={300} mt={2}>
      <Typography variant="h6" fontWeight={100}>
        Online Friends
      </Typography>

        <AvatarGroup max={7}>
        <Avatar alt="Remy Sharp" src="https://dailytimes.com.pk/assets/uploads/2020/02/05/How-Babar-Azam-raced-against-time-for-his-first-Test-century-on-home-soil5-1280x720.jpg" />
        <Avatar alt="Travis Howard" src="https://c.cricketpakistan.com.pk/images/posts/cover_1683012175cover_1666601518311916489_837095714405400_7230606451381539662_n.jpg" />
        <Avatar alt="Cindy Baker" src="https://resources.pulse.icc-cricket.com/photo-resources/2021/10/25/bca1ab0b-752f-4549-8326-1eed6678a55c/Shaheen-Afridi.png?width=845&height=475" />
        <Avatar alt="Agnes Walker" src="https://resources.pulse.icc-cricket.com/photo-resources/2021/10/25/bca1ab0b-752f-4549-8326-1eed6678a55c/Shaheen-Afridi.png?width=845&height=475" />
        <Avatar alt="Trevor Henderson" src="https://resources.pulse.icc-cricket.com/photo-resources/2021/10/25/bca1ab0b-752f-4549-8326-1eed6678a55c/Shaheen-Afridi.png?width=845&height=475" />
      </AvatarGroup>

      <Typography variant="h6" fontWeight={100}>
        Latest Photos
      </Typography>
      <ImageList cols={3} rowHeight={100}>
      <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
        </ImageListItem>
        <ImageListItem>
          <img src="https://material-ui.com/static/images/image-list/burgers.jpg" alt="" />
        </ImageListItem>

        <ImageListItem>
          <img src="https://material-ui.com/static/images/image-list/camera.jpg" alt="" />
        </ImageListItem>
      </ImageList>
      <Typography variant="h6" fontWeight={100}>
        Latest Conversations
      </Typography>
  {/* HERE */}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

    </Box>
    </Box>
  )
}

export default Rightbar