import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Mail, Phone, User } from 'react-feather';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import styles from './style';

const ContactCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        background: '#333',
        color: '#eee',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'cetner',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '15px',
      }}
    >
      <Box>
        <User size={100} />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant='h4'
          component='div'
          fontSize={28}
          fontWeight={500}
          align='center'
        >
          Lizard
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={styles.text}>
          <Mail /> basit@gmail.com
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={styles.text}>
          <Phone /> +92 333 222 2222
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ContactCard;
