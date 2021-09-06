import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./module/rootReducer";

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// Saga 연결자 역할 interface 생성
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] });

// Saga 실행
sagaMiddleware.run(rootSaga);

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);
