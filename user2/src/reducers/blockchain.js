import { addVoteConstants, connectNodeConstants, mineBlockConstants, replaceChainConstants } from "../actions/constants";

const initState = {
    
    loading: false,
    error: "",
    message: "",
    already_voted: false,
    total_nodes: [],
    index: null,
    timestamp: "",
    proof: null,
    votes: [],
    previous_hash: ""

};

export default (state = initState, action) => {
    switch(action.type) {
        case addVoteConstants.ADD_VOTE_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case addVoteConstants.ADD_VOTE_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message

            };
            break;
        
        case addVoteConstants.ADD_VOTE_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
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

        case mineBlockConstants.MINE_BLOCK_REQUEST:
            state = {
                ...state,
                loading: true
                
            }
            break;

        case mineBlockConstants.MINE_BLOCK_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message,
                index: action.payload.index,
                timestamp: action.payload.timestamp,
                proof: action.payload.proof,
                previous_hash: action.payload.previous_hash,
                votes: action.payload.votes,
                already_voted: true


            }
            break;

        case mineBlockConstants.MINE_BLOCK_FAILURE:
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