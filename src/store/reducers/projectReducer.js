const initState = {
    projects: [
        {id: '1', title: 'find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;