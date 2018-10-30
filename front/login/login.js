import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
  root: {
    display: 'flex',
	flexWrap: 'wrap',
  },
  margin: {
	margin: theme.spacing.unit,
  },
  withoutLabel: {
	marginTop: theme.spacing.unit * 3,
  },
  textField: {
	flexBasis: 200,
  },
});


class Login extends React.Component{

	constructor(props) {
	      super(props);

  this.state = {
	password: '',
	showPassword: false,
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
	};
	handleChange(e) {
	this.setState({ [prop]: e.target.value });
  };
  handleClickShowPassword(e) {
	this.setState(this.setState({ showPassword: !state.showPassword }));
  };

  render(){
	const { classes } = this.props;
	return(
	  <div>
		<FormControl className={classNames(classes.margin, classes.textField)}>
		  <InputLabel htmlFor="adornment-password">Password</InputLabel>
		  <Input id="adornment-password"
			  type={this.state.showPassword ? 'text' : 'password'}
			  value={this.state.password}
			  onChange={this.handleChange('password')}
			  endAdornment={
				<InputAdornment position="end">
				  <IconButton aria-label="Toggle password visibility"
							onClick={this.handleClickShowPassword}>
					{this.state.showPassword ? <Visibility /> : <VisibilityOff />}
				  </IconButton>
				</InputAdornment>
				}
			/>
		</FormControl>
      </div>
	  );
	}
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);
