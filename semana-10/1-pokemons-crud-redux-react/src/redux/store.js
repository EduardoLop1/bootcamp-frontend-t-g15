import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import alertsReducers from "./reducers/alertsReducers";
import pokemonsReducers from "./reducers/pokemonsReducers";

const rootReducer = combineReducers({
  pokemons: pokemonsReducers,
  alerts: alertsReducers
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;