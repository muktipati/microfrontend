import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import dashimg from "../assets/dashboard.png"

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const MainContent = () => {
  const classes = useStyles();
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await axios.get('https://source.unsplash.com/random/800x600');
//         setImageUrl(response.request.responseURL);
//       } catch (error) {
//         console.error('Error fetching the image:', error);
//       }
//     };

//     fetchImage();
//   }, []);

  return (
    <div className={classes.imageContainer}>
      <img src={dashimg} alt="Random" className={classes.image} />
    </div>
  );
};

export default MainContent;
