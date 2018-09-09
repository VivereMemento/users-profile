import React from 'react';
import Typography from '@material-ui/core/Typography';

const UserInfo = props => {
	const { data } = props;
  return (
		<div className='user__info'>
			<Typography variant="headline" component="h3">
				{ data.name }
			</Typography>
			<Typography variant="headline" component="div">
				{ data.login }
			</Typography>
			<Typography component="div">
				<a href={ "https://github.com/" + data.login}>{ data.url }</a>
			</Typography>
			<Typography component="div">
				{ data.company }
			</Typography>
			<Typography component="div">
				{ data.location }
			</Typography>
		</div>
	);
};

export default UserInfo;

