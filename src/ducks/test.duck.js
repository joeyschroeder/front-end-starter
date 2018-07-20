import { createAction, handleActions } from 'redux-actions';

const DEFAULT_STATE = { testProp: 0 };

const UPDATE = 'test/UPDATE';
const RESET = 'test/RESET';

export const selectValue = state => state.testState.testProp;

export default handleActions(
    {
        [RESET]: state => Object.assign({}, state, {  testProp: DEFAULT_STATE.testProp }),
        [UPDATE]: state => {
            const { testProp } = state;
            return Object.assign({}, state, { testProp: testProp + 1 });
        }
    },
    DEFAULT_STATE
);

export const updateTestProp = createAction(UPDATE);
export const resetTestProp = createAction(RESET);
