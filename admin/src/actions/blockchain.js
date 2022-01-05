import axios from "axios";
import { checkValidConstants, replaceChainConstants, getResultConstants, connectNodeConstants } from "./constants"

export const checkValid = () => {
    return async (dispatch) => {
        dispatch({type: checkValidConstants.CHECK_VALID_REQUEST});
        const res = await axios.get("http://127.0.0.1:2707/is_valid");
        if(res.status === 200){
            console.log(res);
            dispatch({type: checkValidConstants.CHECK_VALID_SUCCESS,
                      payload: {message: res.data.message}
                    });
                    return true;
        } else {
            dispatch({type: checkValidConstants.CHECK_VALID_FAILURE,
                      payload: {error: "Something went wrong while checking validity!..."}
                    });
        }
    }
}

export const getResult = () => {
    return async (dispatch) => {
        dispatch({type: getResultConstants.GET_RESULT_REQUEST});
        const res = await axios.get("http://127.0.0.1:2707/get_result");
        if(res.status === 200){
            const {Kalash, Abhishek, message} = res.data;

            dispatch({type: getResultConstants.GET_RESULT_SUCCESS,
                      payload: {Kalash, Abhishek, message}
                    });
                    return true;
        } else {
            dispatch({type: getResultConstants.GET_RESULT_FAILURE,
            payload: {
                error: "Something went wrong while getting result!..."
            }
        });
        }
    }

}


export const connectNodes = () => {
    return async (dispatch) => {
        dispatch({type: connectNodeConstants.CONNECT_NODES_REQUEST});
        const res = await axios.post("http://127.0.0.1:2707/connect_node");
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

export const replaceChain = () => {
    return async (dispatch) => {
        dispatch({type: replaceChainConstants.REPLACE_CHAIN_REQUEST});
        const res = await axios.get("http://127.0.0.1:2707/replace_chain");
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