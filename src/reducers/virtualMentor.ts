import { VirtualMentorState } from "../interfaces/reducers";
import { ActionNotification } from "../interfaces/actions";
import { SET_JWT } from "../actions/types";
import { SetJwtPayload } from "../interfaces/actions";


const initialState: VirtualMentorState = {
    "virtualMentorJWT": "",
};

export const virtualMentorReducer = (state: VirtualMentorState = initialState, action: ActionNotification): VirtualMentorState =>{
    switch(action.type){
        case SET_JWT:
            let setJwtPayload: SetJwtPayload = action.payload as SetJwtPayload;
            return{
                ...state,
                "virtualMentorJWT": setJwtPayload.token
            };
            break;
        default:
            return state;
    }
}
