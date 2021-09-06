import { combineReducers } from 'redux';
import boardReducer, { boardSaga } from './boardReducer';
import { all } from 'redux-saga/effects';

// boardReducer 를 rootReducer 로 합쳐 내보냄
const rootReducer = combineReducers({
    boardReducer
});

export function* rootSaga() {
    // all 은 여러 사가를 동시에 실행시켜준다. 현재는 boardSaga 하나.
    yield all([boardSaga()]);
}

export default rootReducer;