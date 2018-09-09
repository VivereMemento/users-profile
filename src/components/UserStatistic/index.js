import React from 'react';
import Typography from '@material-ui/core/Typography';


const UserStatistic = props => {
  const { data } = props;
  return ( 
    <Typography component="div">
      <Typography variant="headline" component="div">Statistics</Typography>
      <Typography component="div">repositories: { data.public_repos }</Typography>
      <Typography component="div">followers: { data.followers }</Typography>
      <Typography component="div">following: { data.following }</Typography>
    </Typography>
  );
};

export default UserStatistic;
