import { Card, CardContent, Grid, Typography,TextField, Button, Select, MenuItem,FormControl,InputLabel,makeStyles} from '@material-ui/core';
import React from 'react'



const useStyles = makeStyles({
    root: {
      backgroundColor: 'red',
      color: props => props.color,
    },
    Card:{
        maxWidth:650,alignItems:"center", 
        alignContent:"center",
        margin:"0 auto",
         padding:"20 5",
    },
    Labels:{
        margin:2, 
        padding:1,
        display:"flex",

    },
    Button:{
        backgroundColor:"grey",
        width:"35%",
        color:"#fff",
        border:5,
       borderRadius:10
    }
  });
const Form = () => {
    const classes = useStyles();
    return (
        <>
        <Typography gutterBottom variant="h5">Send Form</Typography>
        <Card  className={classes.Card}>
       <CardContent>
           <form>
           <Grid container spacing={1}>
               <Grid  xs={12} sm={12} item>
                     <label  className={classes.Labels}>Arrival Date</label>
                   <TextField placeholder="MM/DD/YY" type="date" variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}>Suplier</label>
                   <TextField   variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}>Phone</label>
                   <TextField placeholder="#####" type="number" variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}>Purchased By:</label>
                   <TextField  variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}>Confidential clu Page No</label>
                   <TextField  variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={12} item>
               <label className={classes.Labels}>Adress</label>
                   
                   <TextField placeholder="Street Adress "  variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={12} item>
                   <TextField placeholder="Street Adress Line 1"  variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
                   <TextField placeholder="city"  variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
                   <TextField placeholder="Region"  variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
                   <TextField placeholder="Zip Code"  variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
               <FormControl fullWidth>
        <InputLabel id="Countries">Somalia</InputLabel>
        <Select
          labelId="Countries"
          id="Countries"
          fullWidth
          variant="outlined"
        >
          <MenuItem value={10}>Somalia</MenuItem>
          <MenuItem value={20}>SomaliLand</MenuItem>
          <MenuItem value={30}>Djabouti</MenuItem>
        </Select>
      </FormControl>
                  
               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}>Clarification N0</label>
                   <TextField  variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}> Author Marks </label>
                   <TextField  variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label  className={classes.Labels}> Usability Condition </label>
                   <TextField  variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label  className={classes.Labels}> Entry Date </label>
                   <TextField   type="date" variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}> Published place</label>
                   <TextField   variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label  className={classes.Labels}> No of Copies</label>
                   <TextField   variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={12} item>
               <label  className={classes.Labels}>Accession No </label>
                   <TextField   variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={12} item>
               <label className={classes.Labels}>Remarks </label>
                   <TextField  variant="outlined" fullWidth/>

               </Grid>
               <Grid  xs={12} sm={12} item>
               <Button  variant="contained"  className={classes.Button}>Send</Button>
               </Grid>
           </Grid>
           </form>
       </CardContent>
        </Card>
        </>
    )
}
export  default Form;