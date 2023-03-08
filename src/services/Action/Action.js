import { GET_FORM, STORE_DATA, SEARCH, EDIT } from "../constant/constant";


export const actionForm = (data) => {
    console.log(data)
    return {
        type: GET_FORM,
        data
    }
}

export const actionData = (data) => {
    return {
        type: STORE_DATA,
        data,
    }
}

export const actionsearch = (data) => {
    return {
        type: SEARCH,
        data,
    }
}

export const actionEdit = (data, id) => {
    return {
        type: EDIT,
        data,
        id
    }
}
