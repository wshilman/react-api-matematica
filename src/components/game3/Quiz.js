import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import './Game3.css';

import iconHeart0 from '../../media/heart0.png';
import iconHeart1 from '../../media/heart.png';
import iconHeart2 from '../../media/heart2.png';
import iconHeart3 from '../../media/heart3.png';
import iconHeart4 from '../../media/heart4.png';


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

  const classes = useStyles();
  const [colorChoosed, setColorChoosed] = React.useState(-1);
  const setData = props.setData;
  const rtas = props.rtas;
  const iconOperation = {
      "SUMA": " + ",
      "MULTIPLICACION": " x ",
      "RESTA": " - ",
  };

  const handlerSelectColor = (value,index)=>{
    setColorChoosed(value);
  };

  const colors = [iconHeart1,iconHeart2,iconHeart3,iconHeart4];
  const options = rtas;
  const data = props.data;

  const [operations, setOperations] = React.useState(data);

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
    setData(options);
  }
  
  function FormRowColor(props){
    const valueChoosed = props.colorChoosed??false;
    const [value, setValue] = React.useState(valueChoosed);
    const rows = props.rows;
    const handlerSelectColor = props.handlerSelectColor;
    
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
            <Paper className="containerHeartColor" onClick={()=>{handlerChooseOption(number,index)}} >
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
    let rowsObj = {};
    props.rows.forEach((v,index)=>{
        rowsObj[v.id] = v;
    });
    const [rows, setRows] = React.useState(rowsObj);

    const setOption = (id,valueChoosed)=>{
        let newRows = rows[id];
        newRows.colorIndex = 3;

        setRows({
            ...rows,
            [id]: newRows
          });
        
        props.setOption(id,valueChoosed);
    }

    return (
      <React.Fragment>
            {Object.keys(rows).map((id) =>
                <Grid item xs={3}>
                    <Paper className="containerHeart" onClick={()=>{setOption(id,valueChoosed)}}>
                        <div className="containerOperation"><span className="textHeartWhite">{rows[id].numbers[0]+iconOperation[rows[id].operation]+rows[id].numbers[1]}</span></div>
                        <img src={rows[id].colorIndex!=null?colors[rows[id].colorIndex]:iconHeart0} className="colorHeart"  alt="corazon"/>
                    </Paper>
                </Grid>
            )}
      </React.Fragment>
    );
  }
  

  
  return (
    <div style={{minHeight: "450px"}} >
      {props && 
        <form>
          <Grid container spacing={1}>
            <Grid container item xs={12} style={{marginBottom: '20px'}}>
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
        </Grid>
        </form>}  
     
    </div>
  )

  
}


export default Quiz