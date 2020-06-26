// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            console.log('Increment likes');
            const i = action.index;
        return [
            ...state.slice(0, i), // before the one we are upating
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(0, i) // after the one we are upating
        ]
        default: 
            return state;
    }
    return state;
}

export default posts;