export const Types = {
    SET_MAIN_NEW : 'nytInfo/SET_MAIN_NEW',
    SET_NEWS : 'nytInfo/SET_NEWS',
}

const initialState = {
    mainNew : null,
    news : ['']

}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.SET_MAIN_NEW:
            return{ ...state, mainNew: action.payload };
        case Types.SET_NEWS:
            return{ ...state, news: action.payload };

        default:
                return state;
    }

}
export default reducer

export const setMainNew = (mainNew) => {    
    return{
        type: Types.SET_MAIN_NEW,
        payload: mainNew
    }
}

export const setNews = (news) => {
    return{
        type: Types.SET_NEWS,
        payload: news
    }
}