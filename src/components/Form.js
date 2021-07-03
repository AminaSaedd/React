
import React from 'react'
import { Card, CardContent, Grid, Typography,TextField, Button, Select, MenuItem,FormControl,InputLabel,makeStyles}
 from '@material-ui/core';
 import FormHelperText from '@material-ui/core/FormHelperText';
import * as yup from 'yup'
import{useFormik} from 'formik';




const useStyles = makeStyles({
    root: {
      backgroundColor: 'red',
      color: props => props.color,
    },
    Card:{
        maxWidth:650,
        alignItems:"center", 
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
       borderRadius:8
    },
    helpertext:{
 color:"red",

    },
  });

  //yup validationShema

const validationSchema = yup.object({
    arrivalDate:yup.string().required("ArrivalDate is Reqiured"),
    supplier:yup.string().required("Suplier is Reqiured"),
    phone:yup.string().required("phone is Reqiured"),
    purchased:yup.string().required("purchased is Reqiured"),
    confidential:yup.string().required("confidention is Reqiured"),
    address:yup.string().required("address is Reqiured"),
    addressOne:yup.string().required("adrress one  is Reqiured"),
    city:yup.string().required("city is Reqiured"),
    region:yup.string().required("region is Reqiured"),
    zipCode:yup.string().required("zipCode is Reqiured"),
    country:yup.string().required("country is Reqiured"),
    ClarificationNo:yup.string().required(" is Reqiured"),
    Authotmarks:yup.string().required(" is Reqiured"),
    usabilityCondition:yup.string().required(" is Reqiured"),
    entryDate:yup.string().required("ArrivalDate is Reqiured"),
    publishedPlace:yup.string().required(" is Reqiured"),
    noOfcopies:yup.string().required(" is Reqiured"),
    access:yup.string().required(" is Reqiured"),
    remarks:yup.string().required(" is Reqiured")



})


const Form = () => {

    const classes = useStyles();
    //Formik Initial Values
const formik = useFormik({
    initialValues:{
        arrivalDate:"",
        supplier:"",
        phone:"",
        purchased:"",
        confidential:"",
        address:"",
        addressOne:"",
        city:"",
        region:"",
        zipCode:"",
        country:"",
        ClarificationNo:"",
        Authotmarks:"",
        usabilityCondition:"",
        entryDate:"",
         publishedPlace:"",
        remarks:"",
        noOfcopies:"",
        access:"",


    },

    onSubmit:(values)=>{
         console.log(JSON.stringify(values))
    },
    validationSchema:validationSchema
});

  
  return (
        <>
        <Typography gutterBottom variant="h5">Send Form</Typography>
        <Card  className={classes.Card}>
       <CardContent>
       <form onSubmit={formik.handleSubmit}>

           <Grid container spacing={1}>
               <Grid  xs={12} sm={12} item>
            <label  className={classes.Labels}>Arrival Date</label>
                   <TextField placeholder="MM/DD/YY"
                    type="date" 
                    variant="outlined"
                     fullWidth
                     name="arrivalDate"
                     value={formik.values.arrivalDate}
                     onChange={formik.handleChange}
                     error={formik.touched.arrivalDate && Boolean(formik.errors.arrivalDate)}
                     helperText={formik.touched.arrivalDate && formik.errors.arrivalDate}
                     
                     
                    
                     
                     />
                

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}>Suplier</label>
                   <TextField  
                    variant="outlined" 
                    fullWidth 
                   
                    name="supplier"
                    value={formik.values.supplier}
                    onChange={formik.handleChange}
                    error={formik.touched.supplier && Boolean(formik.errors.supplier)}
                     helperText={formik.touched.supplier && formik.errors.supplier}
                    />

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}>Phone</label>
                   <TextField placeholder="#####" 
                   type="number" 
                   variant="outlined" 
                   fullWidth 
                  
                   name="phone"
                   value={formik.values.phone}
                   onChange={formik.handleChange}
                   error={formik.touched.phone && Boolean(formik.errors.phone)}
                     helperText={formik.touched.phone && formik.errors.phone}
                   />

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}>Purchased By:</label>
                   <TextField  
                   variant="outlined" 
                   fullWidth 
                  
                   name="purchased"
                   value={formik.values.purchased}
                   onChange={formik.handleChange}
                   error={formik.touched.purchased && Boolean(formik.errors.purchased)}
                     helperText={formik.touched.purchased && formik.errors.purchased}
                   />

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}>Confidential clu Page No</label>
                   <TextField 
                    variant="outlined" 
                   fullWidth 
                   
                   name="confidential"
                   value={formik.values.confidential}
                   onChange={formik.handleChange}
                   error={formik.touched.confidential && Boolean(formik.errors.confidential)}
                     helperText={formik.touched.confidential && formik.errors.confidential}
                   />

               </Grid>
               <Grid  xs={12} sm={12} item>
               <label className={classes.Labels}>Adress</label>
                   
                   <TextField placeholder="Street Adress "  
                   variant="outlined" 
                   fullWidth 
                  
                   name="address"
                   value={formik.values.address}
                   onChange={formik.handleChange}
                   error={formik.touched.address && Boolean(formik.errors.address)}
                     helperText={formik.touched.address && formik.errors.address}
                   />

               </Grid>
               <Grid  xs={12} sm={12} item>
                   <TextField placeholder="Street Adress Line 1" 
                    variant="outlined" 
                    fullWidth 
                    name="addressOne"
                    value={formik.values.addressOne}
                    onChange={formik.handleChange}
                    error={formik.touched.addressOne && Boolean(formik.errors.addressOne)}
                     helperText={formik.touched.addressOne && formik.errors.addressOne}
                   
                    />

               </Grid>
               <Grid  xs={12} sm={6} item>
                   <TextField placeholder="city"  
                   variant="outlined" 
                   fullWidth 
                   name="city"
                   value={formik.values.city}
                   onChange={formik.handleChange}
                   error={formik.touched.city && Boolean(formik.errors.city)}
                     helperText={formik.touched.city && formik.errors.city}
                   
                   />

               </Grid>
               <Grid  xs={12} sm={6} item>
                   <TextField placeholder="Region" 
                    variant="outlined" 
                    fullWidth 
                    name="region"
                    value={formik.values.region}
                    onChange={formik.handleChange}
                    error={formik.touched.region && Boolean(formik.errors.region)}
                     helperText={formik.touched.region && formik.errors.region}
                   
                    />

               </Grid>
               <Grid  xs={12} sm={6} item>
                   <TextField placeholder="Zip Code"  
                   variant="outlined" 
                   fullWidth 
                   name="zipCode"
                   value={formik.values.zipCode}
                   onChange={formik.handleChange}
                   error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                     helperText={formik.touched.zipCode && formik.errors.zipCode}
         
                   />

               </Grid>
               <Grid  xs={12} sm={6} item>
               <FormControl fullWidth>
        <InputLabel id="Countries">Somalia</InputLabel>
        <Select
          labelId="Countries"
          id="Countries"
          fullWidth
          variant="outlined"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.country)}
                     helperText={formik.touched.country && formik.errors.country}
         
        >
          <MenuItem value={"som"}   >Somalia</MenuItem>
          <MenuItem value={"somLand"}>SomaliLand</MenuItem>
          <MenuItem value={"Dj"}>Djabouti</MenuItem>
        </Select>
      </FormControl>
                  
               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}>Clarification N0</label>
                   <TextField  variant="outlined" fullWidth
                 
                    name="ClarificationNo"
                    value={formik.values.ClarificationNo}
                    onChange={formik.handleChange}
                    error={formik.touched.ClarificationNo && Boolean(formik.errors.ClarificationNo)}
                     helperText={formik.touched.ClarificationNo && formik.errors.ClarificationNo}
                   />

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}> Author Marks </label>
                   <TextField  
                 
                    name="Authotmarks"
                   variant="outlined"
                    fullWidth 
                    value={formik.values.Authotmarks}
                    onChange={formik.handleChange}

                    error={formik.touched.Authotmarks && Boolean(formik.errors.Authotmarks)}
                     helperText={formik.touched.Authotmarks && formik.errors.Authotmarks}
                    />

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label  className={classes.Labels}> Usability Condition </label>
                   <TextField  variant="outlined" fullWidth 
                    
                    name="usabilityCondition"
                    value={formik.values.usabilityCondition}
                    onChange={formik.handleChange}

                    error={formik.touched.usabilityCondition && Boolean(formik.errors.usabilityCondition)}
                     helperText={formik.touched.usabilityCondition && formik.errors.usabilityCondition}
                   />

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label  className={classes.Labels}> Entry Date </label>
                   <TextField   type="date" variant="outlined" fullWidth
                   
                     name="entryDate"
                     value={formik.values.entryDate}
                     onChange={formik.handleChange}

                     error={formik.touched.entryDate && Boolean(formik.errors.entryDate)}
                     helperText={formik.touched.entryDate && formik.errors.entryDate}
                   />

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label className={classes.Labels}> Published place</label>
                   <TextField   variant="outlined" fullWidth 
                   
                     name="publishedPlace"
                     value={formik.values.publishedPlace}
                     onChange={formik.handleChange}

                     error={formik.touched.publishedPlace && Boolean(formik.errors.publishedPlace)}
                     helperText={formik.touched.publishedPlace && formik.errors.publishedPlace}
                   
                   />

               </Grid>
               <Grid  xs={12} sm={6} item>
               <label  className={classes.Labels}> No of Copies</label>
                   <TextField   variant="outlined" fullWidth
                   
                     name="noOfcopies"
                     value={formik.values.noOfcopies}
                     onChange={formik.handleChange}
                     error={formik.touched.noOfcopies && Boolean(formik.errors.noOfcopies)}
                     helperText={formik.touched.noOfcopies && formik.errors.noOfcopies}
                   />

               </Grid>
               <Grid  xs={12} sm={12} item>
               <label  className={classes.Labels}>Accession No </label>
                   <TextField  
                  
                   name="access"
                    variant="outlined"
                     fullWidth 
                     value={formik.values.access}
                     onChange={formik.handleChange}
                     error={formik.touched.access && Boolean(formik.errors.access)}
                     helperText={formik.touched.access && formik.errors.access}
                     />

               </Grid>
               <Grid  xs={12} sm={12} item>
               <label className={classes.Labels}>Remarks </label>
                   <TextField  name="remarks"
                    variant="outlined"
                     fullWidth multiline
                      rows={3} 
                      value={formik.values.remarks}
                      
                      onChange={formik.handleChange}
                      error={formik.touched.remarks && Boolean(formik.errors.remarks)}
                     helperText={formik.touched.remarks && formik.errors.remarks}
                      />

               </Grid>
               <Grid  xs={12} sm={12} item>
               <Button  variant="contained"  className={classes.Button} type="submit">Send</Button>
               </Grid>
           </Grid>
           </form>
       </CardContent>
        </Card>
        </>
    )
}
export  default Form;