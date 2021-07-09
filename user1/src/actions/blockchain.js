import axios from "axios";
import { addVoteConstants, connectNodeConstants, mineBlockConstants, replaceChainConstants } from "./constants";

export const addVote = (voteInfo) => {
    console.log(voteInfo);
    return async (dispatch) => {
        dispatch({type: addVoteConstants.ADD_VOTE_REQUEST});
        const res = await axios.post("http://127.0.0.1:2709/add_vote", {
            ...voteInfo,
        });
        console.log(res);
        if(res.status === 201){
            const {message} = res.data;
            dispatch({
                type: addVoteConstants.ADD_VOTE_SUCCESS,
                payload: {
                    message
                },
            });
            return true;
        }else {
            dispatch({
                type: addVoteConstants.ADD_VOTE_FAILURE,
                payload: {
                    error: "Something wrong happened while adding! Try Again..."
                },
            });
            return false;
        }
    }
}

export const connectNodes = () => {
    return async (dispatch) => {
        dispatch({type: connectNodeConstants.CONNECT_NODES_REQUEST});
        const res = await axios.post("http://127.0.0.1:2709/connect_node");
        if (res.status === 201){
            const {message, total_nodes} = res.data
            dispatch({
                type: connectNodeConstants.CONNECT_NODES_SUCCESS,
                payload: {
                    message,
                    total_nodes

                }
            });
        }else {
            dispatch({type: connectNodeConstants.CONNECT_NODES_FAILURE,
                        payload: {
                            error: "Something Wrong happened while connecting!"
                        },
                    });
        }
    }
}

export const mineBlock = () => {
    return async (dispatch) => {
        dispatch({type: mineBlockConstants.MINE_BLOCK_REQUEST});
        const res = await axios.get("http://127.0.0.1:2709/mine_block");
        if(res.status === 200){
            console.log(res);
            const {message, index, timestamp, proof, previous_hash, votes } = res.data;
            dispatch({type: mineBlockConstants.MINE_BLOCK_SUCCESS,
                        payload: {
                            message,
                            index,
                            timestamp,
                            proof,
                            previous_hash,
                            votes
                        }
                    });
        } else {
            dispatch({type: mineBlockConstants.MINE_BLOCK_FAILURE,
                        payload: {error: "Something went wrong in mining!"}});
        }



    }
}

export const replaceChain = () => {
    return async (dispatch) => {
        dispatch({type: replaceChainConstants.REPLACE_CHAIN_REQUEST});
        const res = await axios.get("http://127.0.0.1:2709/replace_chain");
        if(res.status === 200){
            dispatch({type: replaceChainConstants.REPLACE_CHAIN_SUCCESS,
                        payload: {
                            message: res.data.message
                        }
                    });
                    return true;
        } else {
            dispatch({type: replaceChainConstants.REPLACE_CHAIN_FAILURE,
                        payload: {error: "Something wrong happened while replacing!"}
                    });
                    return false;
        }
    }
}