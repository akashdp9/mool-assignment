import React, { useState } from 'react';

const TableRow = ({ rowData, onHandleChange }) => {
    const [edit, setEdit] = useState(false)
    const handleButtonClick = () => {
        setEdit(true);
    };

    const handleChange = (e) => {
        onHandleChange(rowData, e.target.value);
    }
    return (
        <tr >
            <td>{rowData.label}</td>
            {!edit ? <td>{rowData.amount}</td> :
                <input type='number' className='border-gray-500' onChange={handleChange} />}
            <td>
                <img onClick={handleButtonClick} src='../assets/edit-icon.svg' alt='edit-icon'></img>
            </td>
        </tr>
    );
};

export default TableRow;