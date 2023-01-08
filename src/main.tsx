import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import truck from "redux-thunk";
import { virtualMentorReducer } from "./reducers/virtualMentor";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routers/AppRouter";

const composeAlt:any = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancer: any = composeAlt(applyMiddleware(truck));

const store = createStore(virtualMentorReducer, composeEnhancer);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
