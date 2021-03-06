import React from 'react';
import { useHistory } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    width: '300px',
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'black',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function ConfirmDialog({ selected }) {
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
    history.replace("/")
  };
  const Amount = 220 * selected.length
  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Your Booking Is Confirmed!
        </DialogTitle>
        <DialogContent dividers >
          <Typography gutterBottom>
          <div>
            You have booked tickets for
                            <ul >
              {selected.map((each) =>
                <li style={{ border: '1px solid gray', color: 'lightblue', padding: '5px', backgroundColor: 'brown' }}>{each}</li>)}
            </ul>
            <div>
              Amount: {Amount}
              </div>
            </div>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
