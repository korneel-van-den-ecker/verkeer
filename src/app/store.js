import { configureStore} from '@reduxjs/toolkit';
import scriptServiceReducer from '../components/features/ScriptService/SignalisatieSlice' 


export default configureStore({
  reducer: {
    scriptService: scriptServiceReducer,
  },
});
