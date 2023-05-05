import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { login, testAbout, testContact, register } from './loginAPI';
// import usrType from './usrType';

export interface LogginState {
  logged: boolean,
  token: string,
  // usr: usrType,

}

const initialState: LogginState = {
  logged: false,
  token: "",
  // usr: {},

};


export const loginAsync = createAsyncThunk(
  'login/login',
  async (user: any) => {
    console.log(user)
    const response = await login(user);
    return response.data;
  }
);

//just for test
export const aboutAsync = createAsyncThunk(
  'login/about',
  async () => {
    const token: string = sessionStorage.getItem('token') || ''
    const response = await testAbout(token);
    return response.data;
  }
);

//just for test
export const contactAsync = createAsyncThunk(
  'login/contact',
  async () => {
    const response = await testContact();
    return response.data;
  }
);

export const registerAsync = createAsyncThunk(
  'login/register',
  async (user: any) => {
    console.log(user)
    const response = await register(user);
    return response.data;
  }
);



export const loginSlice = createSlice({
  name: 'login',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
    logout: (state) => {
      state.logged = false
      state.token = ''
      sessionStorage.clear()

      
    },
  },

  extraReducers: (builder) => {
    builder
      
      .addCase(loginAsync.fulfilled, (state, action) => {
        
        if(action.payload.access.length > 0){
          state.logged = true
          state.token=action.payload.access
          console.log(state.token)
          sessionStorage.setItem('token', state.token)
          
        }
      })
      .addCase(aboutAsync.fulfilled, (state, action) => {
        console.log(action.payload)

      })
      .addCase(contactAsync.fulfilled, (state, action) => {
        console.log(action.payload)
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        console.log('Register success')
        // loginAsync({username: action.payload.username, password: action.payload.password})
      })
      
  },
});

export const { logout } = loginSlice.actions;
export const selectLogged = (state: RootState) => state.login.logged; //no need to show token
// export const selectUsr = (state: RootState) => state.login.usr; //no need to show token



export default loginSlice.reducer;
