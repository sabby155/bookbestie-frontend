const defaultState = {
    currentUser: [],
    cards: [],
    statuses: [],
    bestSellerCards: [],
    googleBooksCards: [],
    savedBookCovers: []

    // bookCover: "https://i.imgur.com/fNK4GjV.png",

    // userObj: {
    //     cards: [],
    //     statuses: []
    // }
}

const reducer = (state=defaultState, action) => {
    switch(action.type){

        case "SAVE_BOOKCOVER": 
            let bookCovers = [...state.savedBookCovers, action.payload]
            return {...state, savedBookCovers: bookCovers}
        
        case "SAVE_BESTSELLERS_TO_CARDS": 
            return {...state, cards: action.payload}

        case "SAVE_GOOGLEBOOKS_TO_CARDS": 
            // let bestsellerCards = state.cards.slice(0,15)
            let addedCards = [].concat(...state.cards, action.payload)
            return {...state, cards: addedCards}

        case "DIVIDE_BESTSELLER_CARDS":
            let justBestsellerCards = state.cards.slice(0, 15)
            return {...state, bestSellerCards: justBestsellerCards}

        case "DIVIDE_GOOGLE_BOOKS_CARDS":
            return {...state, googleBooksCards: action.payload}

        case "ADD_TO_STATUSES":
            let addedStatus = [...state.statuses, action.payload]
            return {...state, statuses: addedStatus}

        default:
        return state
    }
}

export default reducer 