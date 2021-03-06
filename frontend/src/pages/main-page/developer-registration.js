import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class DeveloperRegistration extends Component {
    state = {
        open: false,
        login: '',
        email: '',
      };
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    
    render() {
        return(
            <div className= "developer-registration">
                <Button variant="outlined" onClick={this.handleClickOpen}>
                   Регистрация
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Регистрация</DialogTitle>
                    <DialogContent>
                    <form c noValidate autoComplete="off">
                        <TextField
                        required
                        id="login"
                        label="Login"
                        value={this.state.login}
                        onChange={this.handleChange('login')}
                        margin="normal"
                        />
                        <TextField
                        required
                        id="login-email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                        />
                        <TextField
                        required
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        />
                    </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                        Registration
                        </Button>
                    </DialogActions>
            </Dialog>
            </div>
        );
    }
};

export default DeveloperRegistration;