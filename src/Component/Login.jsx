import { Button, Chip, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Signup from './Signup';




function Login() {
  return (
    <Grid>
        <Paper 
        elevation={10} 
        style={{
            display:'block',
            margin:'45px auto', 
            justifyContent:'center', 
            alignItems:'center',
            maxWidth:'400px',
            padding:'1rem',
            height:'70vh',
            direction:'column'
            
            }}>
        
        <Grid>
        <Chip 
        icon={<LockIcon />} 
        label="Login" 
        color='secondary'
        variant="outlined" 
        style={{marginBottom:'2rem'}}
        />
        </Grid>
    
    
        <TextField
        id="input-with-icon-textfield"
        label="Email"
        placeholder='Enter email'
        variant="standard"
        fullWidth
        required
        style={{marginBottom:'1rem'}}
      />
      
<TextField
        id="input-with-icon-textfield"
        label="Password"
        type='password'
        placeholder='Enter password'
        variant="standard"
        fullWidth
        required
        style={{marginBottom:'1rem'}}
      />
       
       <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Remember me"  style={{marginBottom:'1rem'}} />
    </FormGroup>

<Button type='submit' color='primary' variant='contained' fullWidth  style={{marginBottom:'1rem'}}>Sign In</Button>
        
        <Typography  style={{marginBottom:'1rem'}}>
            <Link href='Resetpassword'>
            Forgot password?
            </Link>
        </Typography>

        <Typography  style={{marginBottom:'1rem'}}> Do you have an account?
            <Link href='Signup'>
            Sign Up
            </Link>
        </Typography>

        
        
        </Paper>
      
    </Grid>
  )
}

export default Login
