import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function AddCustomer(props) {
  // Customer contains following attributes:
  // id (long)
  // firstname (String)
  // lastname (String)
  // streetaddress (String)
  // postcode (String)
  // city (String)
  // email (String)
  // phone (String)

  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState({
    firstname: '',
    lastname: '',
    streetaddress: '',
    postcode: '',
    city: '',
    email: '',
    phone: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.addCustomer(customer);
    handleClose();
  }

  const inputChanged = (event) => {
    setCustomer({...customer, [event.target.name]: event.target.value})
  }

  return (
    <div>
      <Box p={2}>
        <Button variant='outlined' color='primary' size='medium' onClick={handleClickOpen}>
          Add new customer
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>New Customer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            name='firstname'
            value={customer.firstname}
            onChange={inputChanged}
            margin='dense'
            label='First name'
            fullWidth
          />
          <TextField
            name='lastname'
            value={customer.lastname}
            onChange={inputChanged}
            margin='dense'
            label='Last name'
            fullWidth
          />
          <TextField
            name='streetaddress'
            value={customer.streetaddress}
            onChange={inputChanged}
            margin='dense'
            label='Address'
            fullWidth
          />
          <TextField
            name='postcode'
            value={customer.postcode}
            onChange={inputChanged}
            margin='dense'
            label='Postcode'
            fullWidth
          />
          <TextField
            name='city'
            value={customer.city}
            onChange={inputChanged}
            margin='dense'
            label='City'
            fullWidth
          />
          <TextField
            name='email'
            value={customer.email}
            onChange={inputChanged}
            margin='dense'
            label='E-mail'
            fullWidth
          />
          <TextField
            name='phone'
            value={customer.phone}
            onChange={inputChanged}
            margin='dense'
            label='Phone'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleSave} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddCustomer;
