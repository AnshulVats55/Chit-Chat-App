import setAllUserDetails from "./Reducer";
import { legacy_createStore as createStore } from 'redux';

const userDetailsStore = createStore(setAllUserDetails);
export default userDetailsStore;