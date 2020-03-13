import {createStore} from 'redux';

export default createStore( 
    function(state, action){
        if(state === undefined ){ 
            //초기값설정
            return {number : 0}
        }

        if(action.type === 'INCREMENT'){
            return {...state, number : state.number + action.size }
        }

    },

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)