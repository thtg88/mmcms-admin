import actions from './actions';

const initial_state = {
    error: null,
    logging_in: false,
    logging_out: false,
    logged_out: false,
    registering: false,
    updated_profile: false,
    token: null,
    user: null
};

const login = (state = initial_state, action) => {
    // console.log('action dispatched', action);
    switch(action.type) {
        case actions.CLEAR_METADATA_PROFILE:
            return {
                ...state,
                error: null,
                logging_in: false,
                logging_out: false,
                registering: false,
                updated_profile: false
            };
        case actions.GET_PROFILE_REQUEST:
            // console.log('getProfile dispatched');
            return {
                ...state,
                error: null,
                user: null,
            };
        case actions.GET_PROFILE_SUCCESS:
            return {
                ...state,
                error: null,
                user: action.payload.resource,
            };
        case actions.GET_PROFILE_ERROR:
            // console.log('getProfile error:', action);
            return {
                ...state,
                error: action.error,
                user: null,
            };
        case actions.LOGGED_OUT:
            return {
                ...state,
                logged_out: true,
                user: null,
                token: null
            };
        case actions.LOGIN_ERROR_RESET:
            return {
                ...state,
                error: null
            };
        case actions.LOGIN_REQUEST:
            // console.log('dispatched', state);
            return {
                ...state,
                error: null,
                logged_out: false,
                logging_in: true
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                logging_in: false,
                user: null,
                token: action.payload,
            };
        case actions.LOGIN_ERROR:
            return {
                ...state,
                error: action.error,
                logging_in: false
            };
        case actions.LOGOUT_REQUEST:
            // console.log(action.type+' taken');
            return {
                ...state,
                error: null,
                logging_out: true
            };
        case actions.LOGOUT_SUCCESS:
        case actions.LOGOUT_ERROR:
            // console.log(action.type+' taken');
            return {
                ...state,
                error: null,
                logging_out: false,
                user: null,
                token: null,
            };
        case actions.REGISTER_ERROR_RESET:
            return {
                ...state,
                error: null
            };
        case actions.REGISTER_REQUEST:
            return {
                ...state,
                error: null,
                logged_out: false,
                registering: true
            };
        case actions.REGISTER_SUCCESS:
            // Destructure object into user and the rest
            // Which will be the payload
            const { resource, ...token_payload } = action.payload;
            return {
                ...state,
                error: null,
                registering: false,
                user: resource,
                token: token_payload,
            };
        case actions.REGISTER_ERROR:
            // console.log('dispatched error', action);
            return {
                ...state,
                error: action.error,
                registering: false
            };
        case actions.UPDATE_PROFILE_REQUEST:
            // console.log('updatingProfile dispatched');
            return {
                ...state,
                error: null,
                updated_profile: false
            };
        case actions.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                error: null,
                updated_profile: true,
                user: action.payload.resource,
            };
        case actions.UPDATE_PROFILE_ERROR:
            // console.log('updatingProfile error:', action);
            return {
                ...state,
                error: action.error,
                updated_profile: false
            };
        default:
            return state;
    }
};
export default login;
