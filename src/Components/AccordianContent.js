import React from 'react'
import TableRow from './TableRow'

const AccordianContent = ({ tableData, onHandleChange }) => {
  return (
    <>
      <table className="min-w-full bg-white border-b-[#D9D9DC]">
        <thead>
          <tr className='flex flex-row justify-between items-center'>
            <th className="py-2 px-4 border-b">Item</th>
            <th className="py-2 px-1 border-b">Amount(IN INR)</th>
          </tr>
        </thead>
        <tbody>

          {tableData.map((rowData, index) => (
            <TableRow key={index} rowData={rowData} onHandleChange={onHandleChange} />
          ))}

        </tbody>
      </table>
    </>
  )
}

export default AccordianContent