import { CHANGE_THEME } from '../actions/ThemeActions'

export default function ThemeReducers(state = {}, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                theme: action.payload.theme
            };
        // more cases...
        default: return state;
    }
}