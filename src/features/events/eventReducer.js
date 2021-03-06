import { sampleData } from "../../app/api/SampleDate";
import { updateEvent } from "./eventActions";
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstant";



const initialState = {
    events: sampleData
}


export const eventReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_EVENT:
            return {
                ...state,
                events: [...state.events, payload]
            }

        case UPDATE_EVENT:
            return {
                ...state,
                events: [...state.events.filter(eve => eve.id !== payload.id), payload]
            }

        case DELETE_EVENT:
            return {
                ...state,
                events: [...state.events.filter(eve => eve.id !== payload)]
            }
        default:
            return state

    }

}