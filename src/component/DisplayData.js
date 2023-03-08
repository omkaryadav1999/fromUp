import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionsearch, actionEdit, actionData } from "../services/Action/Action";

function DisplayData() {
    const [value, setValue] = useState("");
    const [id, setId] = useState("");
    const [bool, setBool] = useState(false);
    const data = useSelector((state) => state.UserData);
    console.log(data)
    const dispatch = useDispatch();

    const element = (id) => {
        let findElement = data.find((item) => {
            return item.id == id
        })
        setValue(findElement.name);
        setId(id);
        setBool(true);
    }


    const SEARCH = (e) => {
        setValue(e.target.value);
        if (bool) {
            dispatch(actionEdit(e.target.value, id));
        } else {
            dispatch(actionsearch(e.target.value));
        }
    }

    return (
        <div className="data_container">
            <input type="search" id="search" value={value} placeholder={bool ? "edit content.." : "search.."} onChange={SEARCH} />
            <button onClick={() => setValue("")}>update</button>
            <table className="table" border={1} style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>MiddleName</th>
                        <th>Lastname</th>
                        <th>BrithDate</th>
                        <th>address</th>
                        <th>edit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        const { name, brithDate, middleName, lastname, address, id } = item;
                        return <tr key={id}>
                            <td>{name}</td>
                            <td>{middleName}</td>
                            <td>{lastname}</td>
                            <td>{brithDate}</td>
                            <td>{address}</td>
                            <td><button onClick={() => element(id)}>edit</button></td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    )

}

export default DisplayData