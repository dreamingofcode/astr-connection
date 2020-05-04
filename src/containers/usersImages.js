import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImagesCard from './imagesCard';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const UsersImages = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const isLoading = useSelector((state) => state.isLoading);

  const usersImages = useSelector((state) => state.usersImages);
  console.log('china', usersImages);
  return (
    <MuiThemeProvider>
      <div>
       

          {userData? userData.posts.map((image) => (
        <ImagesCard key={image.id} image={image}/>
          )):null}
    
            
       
      </div>
    </MuiThemeProvider>
  );
};
const styles = {
  button: {
    margin: 15,
  },
};
export default UsersImages;
