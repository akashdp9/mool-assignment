import React from 'react'
import Accordion from './Accordian'
import AccordianContent from './AccordianContent'

const SectionContainer = ({ taxData, onEdit }) => {
  return (
    <>
      {Object.keys(taxData).map((key, index) => (
        <Accordion title={key} key={index}>
            <AccordianContent tableData={taxData[key]} onHandleChange={onEdit}/>
        </Accordion>
      ))}
    </>
  )
}

export default SectionContainer