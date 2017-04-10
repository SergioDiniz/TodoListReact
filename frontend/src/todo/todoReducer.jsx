const INITITAL_SATE = {description: '', list: []}

export default (state = INITITAL_SATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED' :
            return { ...state, description: action.payload}
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data}
        case 'TOTO_ADDED':
            return { ...state, description: ''}
        default:
            return state
    }
}