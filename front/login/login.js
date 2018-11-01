import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const styles = theme => ({
  margin: {
	margin: theme.spacing.unit,
  },
  button: {
	margin: theme.spacing.unit,
  },
  textField: {
	flexBasis: 200,
	width: '200px',
  },
  divCenter: {
	  textAlign: 'center',
  },
  errorLabel: {
	fontFamily: '',
	color: '#FF0000',
  },
  background : {
	backgroundImage: 'url("DSC00229.JPG")',  
  }
});


class Login extends React.Component{
	constructor(props) {
	      super(props);

  this.state = {
    username: '',
	password: '',
	showPassword: false,
	error: '',
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  this.checkCredential = this.checkCredential.bind(this);
  this.handleKeyPress = this.handleKeyPress.bind(this);
	};
	checkCredential(){
		console.log(this.check);
		this.checkuserpassvalue();
	}
	handleChange(e) {
	this.setState({ password: e.target.value });
  };
  handleClickShowPassword(e) {
	this.setState({ showPassword: !this.state.showPassword });
  };
  
  handleInputChange(e) {
	  this.setState({username: e.target.value});
  };
  
  handleKeyPress(e){
	  if(e.key === 'Enter'){
		  this.checkuserpassvalue();
	  }
  }
  
  checkuserpassvalue(){
	  const passwordregex = /^[A-Za-z\d@#!$%?&]{8,}$/;
	  const {username, password} = this.state;
		if(!username){
			this.setState({error: 'Enter userName'});
		} else if(!password){
			this.setState({error: 'Enter password'});
		} else {
			if(!passwordregex.test(passwordregex)){
				this.setState({error:'Password contains error'})
			} else {
				this.setState({error:''})
			}
		}
  }

  render(){
	const { classes } = this.props;
	return(
	  <div>
	  <div className={classNames(classes.divCenter)}>
	  <div>
	  <FormControl className={classNames(classes.margin, classes.textField)}>
	  <InputLabel htmlFor="adornment-username">Username or Email</InputLabel>
	  <Input id="adornment-username"
		  type= 'text' autoFocus
		  value={this.state.username}
		  onChange={(e)=>this.handleInputChange(e)}
	  	  onKeyPress={(e)=> this.handleKeyPress(e)}
		/>
	</FormControl>
	  </div>
	  <div>
		<FormControl className={classNames(classes.margin, classes.textField)}>
		  <InputLabel htmlFor="adornment-password">Password</InputLabel>
		  <Input id="adornment-password" ref={(Input) => {this.check = Input}}
			  type={this.state.showPassword ? 'text' : 'password'}
			  value={this.state.password}
	 	  onKeyPress={(e)=> this.handleKeyPress(e)}
			  onChange={(e)=>this.handleChange(e)}
			  endAdornment={
				<InputAdornment position="end">
				  <IconButton aria-label="Toggle password visibility"
							onClick={()=>this.handleClickShowPassword()}>
					{this.state.showPassword ? <Visibility /> : <VisibilityOff />}
				  </IconButton>
				</InputAdornment>
				}
			/>
		</FormControl>
		  </div>
		  <div>
		  <label className={classes.errorLabel}>{this.state.error}</label>
		  </div>
		  <div>
		  <Button size ="small" variant="contained" color="primary" className={classes.button}
		  onClick={(e) => this.checkCredential(e)}>
	        Submit
	      </Button>
		  </div>
      </div>
      </div>
	  );
	}
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);
