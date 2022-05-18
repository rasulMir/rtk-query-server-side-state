import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IFormInputs } from '../types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useAddNewUserMutation } from '../features/ecomm/storeApi';
import Snackbar from '@mui/material/Snackbar';
import { Link as SignLink } from 'react-router-dom';

import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Created by Rasul Mirzakulov '}
      <Link color="inherit" href="mailto: rasulmyrzakulov52@gmail.com">
        my mail
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const box = {
	padding: '10px',
	marginTop: 8,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	bgcolor: 'primary.main'
};

const theme = createTheme({
	palette : {
		primary: {
			main: '#f5f5f5',
		},
	}
});

const schema = yup.object({
  name: yup.string().min(4).required('Field Must Be Contained'),
	email: yup.string().email('Field Must Be Fill Email').required('Field Must Be Contained'),
	password: yup.string().min(4).required('Field Must Be Contained'),
}).required();

export default function SignUp() {

	const { handleSubmit, control, reset, formState:{ errors, isValid } } = useForm<IFormInputs>({
    defaultValues: {
			name: '',
      email: '',
			password: '',
			chbx: false,
    },
		resolver: yupResolver(schema),
		mode: 'onBlur',
  });
	const [ addUser, { isError, isLoading } ] = useAddNewUserMutation();
	const navigator = useNavigate();
	const [snack, setSnack] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
		if (!!isValid) {
			try {
				const response = await addUser({
							id: data.name,
							...data
						}).unwrap();
				console.log(response);
				reset();
				navigator('/signin');
			}
			catch( error ) {
				setSnack(true);
				return;
			}
		}
	};

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={box}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name="name"
							control={control}
							defaultValue={''}
							rules={{ required: true, minLength: 4 }}
							render={({ field }) => <TextField {...field} 
								error={!!errors.name}
								color='secondary'
								margin="normal"
								fullWidth 
								label="Your Name"
              	id="name"
								helperText={ errors.name && errors.name?.message} />}
						/>
						<Controller
							name="email"
							control={control}
							defaultValue={''}
							rules={{ required: true }}
							render={({ field }) => <TextField {...field} 
								error={!!errors.email}
								helperText={ errors.email && errors.email?.message}
								color='secondary'
								margin="normal"
								fullWidth 
								label="Email Address"
              	id="email"/>}
						/>
						<Controller
							name="password"
							control={control}
							defaultValue={''}
							rules={{ required: true }}
							render={({ field }) => <TextField {...field} 
								type='password'
								error={!!errors.password}
								helperText={errors.password?.message}
								color='secondary'
								margin="normal"
								fullWidth 
								label="Password"
              	id="password"
              	autoComplete="password"/>}
						/>
						<Controller
							name="chbx"
							control={control}
							defaultValue={false}
							render={({ field }) => <FormControlLabel label='Remember Me' control={<Checkbox {...field} value="remember" color="secondary" />}/>}
						/>
            <Button
							color='secondary'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
							disabled={!!isLoading}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{color: '#0288d1'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
								<SignLink to='signin'>
									{"Already have an account? Sign In"}
								</SignLink>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Copyright sx={{ mt: 2, mb: 4 }} />
      </Container>
			<Snackbar open={snack} autoHideDuration={4000} onClose={() => setSnack(false)}>
				<Alert
					severity="error"
					sx={{minWidth: '200px', textTransform: 'capitalize'}} 
					onClose={() => setSnack(false)} >
					this name exists, come up with a new name
				</Alert>
      </Snackbar>
    </ThemeProvider>
  );
}