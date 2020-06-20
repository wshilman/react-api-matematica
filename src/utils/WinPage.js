import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const AlertDialogSlide = (props) =>{
  let {game,lvl} = props
  const handleText = () => {
    
    if(localStorage.getItem(`pointsGame${game}Lvl${lvl}`) == 30){
      return('Ganaste!!')
    }else{
      return('Terminó el nivel.')
    }
  }
  
    return (
      <div>
        <Dialog
          open={true}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"FELICITACIONES!"}</DialogTitle>
          <DialogContent>
            
            <DialogContentText id="alert-dialog-slide-description">
            {handleText()}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button component = {Link}
            to= "/niveles" 
            color="primary">
              Volver a NIVELES
            </Button>
          </DialogActions>
        </Dialog>
        {localStorage.setItem(`pointsGame${game}Lvl${lvl}`,0)}
      </div>
    );
  }

export default AlertDialogSlide