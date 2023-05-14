import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Greeting from '../../types/Greeting';

export interface GreetingState {
  greeting: Greeting;
}
const initialState: GreetingState = {
  greeting: {
    recipient: 'A Friend',
    sender: 'Another friend',
    message: 'Hello',
  },
};

export const GreetingSlice = createSlice({
  name: 'Greeting',
  initialState,
  reducers: {
    updateGreeting: (state, action: PayloadAction<Greeting>) => {
      state.greeting = action.payload;
    },
  },
});

export const { updateGreeting } = GreetingSlice.actions;

export default GreetingSlice.reducer;
