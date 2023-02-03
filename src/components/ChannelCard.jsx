import React from 'react';
import { Link } from 'react-router-dom';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '320px',
      margin: 'auto',
      marginTop
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#1e1e1e'
      }}>
        <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant='h6' sx={{
          color: 'white'
        }}>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{
            color: 'white'
          }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
)


export default ChannelCard