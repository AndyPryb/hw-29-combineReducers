import {CHANGE_STATS} from "../actions/statsAction"

export default function stats(state = {followers: 0, following: 0}, action) {
    const stats = {...state}
    switch (action.type) {
        case CHANGE_STATS:
            const res = stats[action.fieldType] + action.increment;
            stats[action.fieldType] = res < 0 ? 0 : res;
            return stats;
        default:
            return state;
    }

}