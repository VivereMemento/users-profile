import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: theme.spacing.unit,
  },

  chip: {
    marginLeft: theme.spacing.unit,
    backgroundColor: red[500],
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class UserCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, data } = this.props;
    console.log(data);

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              alt="Adelle Charles"
              src={data.avatar_url}
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
          }
          title={ data.site_admin ? this.getAdmin(data, classes) : data.login }
          subheader={ this.getSubHeader(data)}
        />
        
      </Card>
    );
  };
  getAdmin = (data, classes) => (
    <div>
      { data.login}
      <Chip label="Admin" className={classes.chip} variant="outlined" />
    </div>
  )
  getSubHeader = (data) => <a href={ "https://github.com/" + data.login }>{data.url}</a>
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCard);
