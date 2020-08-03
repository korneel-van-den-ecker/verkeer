import { configureStore} from '@reduxjs/toolkit';
import signalisatieReducer from '../components/features/ScriptService/SignalisatieSlice' 


export default configureStore({
  reducer: {
    signalisatie: signalisatieReducer,
  },
});
