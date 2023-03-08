import { STORE_DATA, SEARCH, EDIT } from "../constant/constant";

const initiState = [];


const UserData = (state = initiState, action) => {

    switch (action.type) {
        case STORE_DATA:
            return [...state, action.data];

        case SEARCH:
            const serach = state.filter((value) => {
                return value.name.includes(action.data)
            })
            return [...serach];

        case EDIT:
            const edit = state.map((item) => {
                if (item.id == action.id) {
                    return {
                        ...item,
                        name: action.data
                    }
                }
            })
            console.log(edit)
            return [...edit]
        default:
            return state
    }
}

export default UserData