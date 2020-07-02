import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import './Game3.css';

import iconHeart0 from '../../media/heart0.png';
import iconHeart1 from '../../media/heart.png';
import iconHeart2 from '../../media/heart2.png';
import iconHeart3 from '../../media/heart3.png';
import iconHeart4 from '../../media/heart4.png';

import iconStale from '../../media/stale.png';
import iconOk from '../../media/ok.png';
import iconError from '../../media/error.png';
import Alert from "../../services/Alert";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(15),
    marginLeft:90,
    minWidth:200
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));


const Quiz = props => {

  // TODO
  // USAR EL LVL DEL LOCALSTORAGE
  let { n,
    quest,
    n1,
    n2,
    operation,
    r1,
    r2,
    r3,
    r4,
    right,
    setProgress,
    progress,
    lvl
  } = props.pack
  const finishProgress = props.finishProgress;
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [colorChoosed, setColorChoosed] = React.useState(-1);

  const iconOperation = {
      "SUMA": " + ",
      "MULTIPLICACION": " x ",
      "RESTA": " - ",
  };

  const handlerSelectColor = (value,index)=>{
    console.log("handlerSelectColor",value,index);
    setColorChoosed(value);
  };

  const colors = [iconHeart1,iconHeart2,iconHeart3,iconHeart4];
  const options = [23,45,64,87];
  const [operations, setOperations] = React.useState([{
    numbers:[3,23],
    operation:"RESTA",
    rta:23,
    id:1,
  },{
      numbers:[33,45],
      operation:"SUMA",
      rta:45,
      id:2,
  },{
      numbers:[3,87],
      operation:"MULTIPLICACION",
      rta:87,
      id:3,
  },{
      numbers:[3,64],
      operation:"SUMA",
      rta:64,
      id:4,
  },{
      numbers:[43,23],
      operation:"SUMA",
      rta:23,
      id:5,
  },{
      numbers:[63,45],
      operation:"SUMA",
      rta:45,
      id:6,
  },{
      numbers:[21,87],
      operation:"SUMA",
      rta:87,
      id:7,
  },{
      numbers:[35,64],
      operation:"SUMA",
      rta:64,
      id:8,
  },{
    numbers:[3,23],
    operation:"SUMA",
    rta:23,
    id:9,
  },{
      numbers:[33,45],
      operation:"SUMA",
      rta:45,
      id:10,
  },{
      numbers:[3,87],
      operation:"SUMA",
      rta:87,
      id:11,
  },{
      numbers:[3,64],
      operation:"SUMA",
      rta:64,
      id:12,
  },{
      numbers:[3,23],
      operation:"SUMA",
      rta:23,
      id:13,
  },{
      numbers:[33,45],
      operation:"SUMA",
      rta:45,
      id:14,
  },{
      numbers:[3,87],
      operation:"SUMA",
      rta:87,
      id:15,
  },{
      numbers:[3,64],
      operation:"SUMA",
      rta:64,
      id:16,
  }]);
  const newOptions = (id,valueRta,operations)=>{
        let index = -1;
        let i = 0, tam = operations.length;
        while(index==-1 && i<tam){
            console.log(operations[i],id);
            if(operations[i].id == id){
                index = i;
            }
            i++;
        }
        operations[index].valueRta = valueRta;
        operations[index].colorIndex = options.indexOf(valueRta);
        console.log("change rta",operations[index]);
        return operations;
  }
  const setOption = (id,valueRta)=>{
    let options = newOptions(id,valueRta,operations);
    setOperations(options);
  }

  const [error, setError] = React.useState(false);
  const [won, setWon] = React.useState(false);
  const [sendRta, setSendRta] = React.useState(false);



  const handlePoints = (points) => {
    // pointsGame1Lvl1
    const now = localStorage.getItem(`pointsGame1Lvl${lvl}`)
    now ? localStorage.setItem(`pointsGame1Lvl${lvl}`, parseInt(now) + points):localStorage.setItem(`pointsGame1Lvl${lvl}`,points)
    console.log(localStorage.getItem(`pointsGame1Lvl${lvl}`))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'right' && !won) {
      setError(false);
      setProgress(progress + 1)
      setWon(true)
      setSendRta(true);
      handlePoints(10);
    } else if (value === 'right') {
      setProgress(progress + 1)
      handlePoints(10);
      setError(false);
      setSendRta(true);
    } else if (value === 'bad1' || 'bad2' || 'bad3' || 'bad4') {
      setProgress(progress + 1)
      handlePoints(0)
      setError(true);
      setSendRta(true);
    } else {
      setError(true);
    }
    console.log("Progress ",progress);
    if(progress === finishProgress){
      Alert.finishLevel({
        next: lvl,

      });
    }
  };

  
  function FormRowColor(props){
    const valueChoosed = props.colorChoosed??false;
    const [value, setValue] = React.useState(valueChoosed);
    const rows = props.rows;
    const handlerSelectColor = props.handlerSelectColor;
    
    console.log("valueChoosed",valueChoosed);
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const handlerChooseOption = (value,index)=>{
        console.log("Change options ",value);
        setValue(value);
        handlerSelectColor(value,index);
    };

    const listItems = rows.map((number,index) =>
        <Grid item xs={3}>
            <Paper className={classes.paper} onClick={()=>{handlerChooseOption(number,index)}} >
                <div><span className="textHeart">{number}</span></div>
                <img src={colors[index]} className="colorHeart"  alt="corazon"/>
                <FormControlLabel className="optionSelect" value={number} control={<Radio checked={value == number}/>} label="" />
            </Paper>
        </Grid>
    );
    return (
        <React.Fragment>
          <RadioGroup className="heartColors" aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            {listItems}
          </RadioGroup>
        </React.Fragment>
      );
  }

  function FormRow(props) {
    const valueChoosed = props.colorChoosed;
    //const options = props.options;
    const [rows, setRows] = React.useState(props.rows);

    const setOption = (id,valueChoosed)=>{
        let newRows = newOptions(id,valueChoosed,rows);
        console.log("newRows",newRows);
        setRows(newRows);
        props.setOption(id,valueChoosed);
    }
    const iconHeart = iconHeart0;
    console.log("rows",rows);
    rows.forEach(v=>{
        console.log("ROW ",v,v.colorIndex,colors[v.colorIndex]);
    });
    const listItems = rows.map((config,index) =>
        <Grid item xs={3}>
            <Paper className={classes.paper} onClick={()=>{setOption(config.id,valueChoosed)}}>
                <div><span className="textHeartWhite">{config.numbers[0]+iconOperation[config.operation]+config.numbers[1]}</span></div>
                <img src={config.colorIndex!=null?colors[config.colorIndex]:iconHeart} className="colorHeart"  alt="corazon"/>
            </Paper>
        </Grid>
    );

    return (
      <React.Fragment>
            {listItems}
      </React.Fragment>
    );
  }
  

  
  return (
    <div style={{minHeight: "450px"}} >
      {props && 
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid container item xs={12} style={{marginBottom: '40px'}}>
                <FormRowColor rows={options} handlerSelectColor={handlerSelectColor}  colorChoosed={colorChoosed}/>
            </Grid>
            <Grid container item xs={12} >
                <FormRow options={options} setOption={setOption} rows={operations.slice(0,4)} colorChoosed={colorChoosed}/>
            </Grid>
            <Grid container item xs={12}>
                <FormRow options={options} setOption={setOption}  rows={operations.slice(4,8)} colorChoosed={colorChoosed} />
            </Grid>
            <Grid container item xs={12}>
                <FormRow options={options} setOption={setOption}  rows={operations.slice(8,12)} colorChoosed={colorChoosed} />
            </Grid>
            <Grid container item xs={12}>
                <FormRow options={options} setOption={setOption}  rows={operations.slice(12,16)} colorChoosed={colorChoosed} />
            </Grid>
        </Grid>
        </form>}  
     
    </div>
  )

  
}


export default Quiz