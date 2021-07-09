import { checkValidConstants, replaceChainConstants, getResultConstants, connectNodeConstants } from "../actions/constants";

const initState = {
    loading: false,
    error: "",
    message: "",
    Kalash: null,
    Abhishek: null
};

export default (state = initState, action) => {
    switch(action.type){
        case checkValidConstants.CHECK_VALID_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;

        case checkValidConstants.CHECK_VALID_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;

        case checkValidConstants.CHECK_VALID_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;

        case getResultConstants.GET_RESULT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;

        case getResultConstants.GET_RESULT_SUCCESS:
            state = {
                ...state,
                loading: false,
                Kalash: action.payload.Kalash,
                Abhishek: action.payload.Abhishek,
                message: action.payload.message
            }
            break;

            case connectNodeConstants.CONNECT_NODES_REQUEST:
                state = {
                    ...state,
                    loading: true
    
                }
                break;
    
            case connectNodeConstants.CONNECT_NODES_SUCCESS:
                state = {
                    ...state,
                    loading: false,
                    message: action.payload.message,
                    total_nodes: action.payload.total_nodes
    
                }
                break;
    
            case connectNodeConstants.CONNECT_NODES_FAILURE:
                state = {
                    ...state,
                    loading: false,
                    error: action.payload.error
    
                }
                break;

            case replaceChainConstants.REPLACE_CHAIN_REQUEST:
                state = {
                    ...state,
                    loading: true
                }
                break;
            
            case replaceChainConstants.REPLACE_CHAIN_SUCCESS:
                state = {
                    ...state,
                    loading: false,
                    message: action.payload.message
                }
                break;
    
            case replaceChainConstants.REPLACE_CHAIN_FAILURE:
                state = {
                    ...state,
                    loading: false,
                    error: action.payload.error
                }
                break;
    }
    return state;
}