import React, { useEffect, useState } from 'react';
import SectionContainer from './SectionContainer';
import Header from './Header'
import axios from 'axios';

const TaxDeclarationPage = () => {
    const [taxData, setTaxData] = useState({});
    useEffect(() => {
        axios.get('https://api.jsonbin.io/v3/b/6572dc690574da7622d1fd42')
            .then(data => {
                console.log(data.data);
                let tData = Object.values(data.data.record);
                let groupedData = {}
                tData.forEach(item => {
                    console.log("item", item)
                    let k = "Section " + item.section
                    if (!(k in groupedData)) {
                        groupedData["Section " + item.section] = []

                    }
                    groupedData["Section " + item.section].push(item)
                })
                setTaxData(groupedData)

            })
            .catch(error => console.log(error))
    }, [])

    const handleEdit = (rowData, newValue) => {
        rowData.amount = newValue
        console.log(taxData)
    }
    const handleSubmit = () => {
        console.log(Object.values(taxData))
    }
    return (
        <div className="p-4">
            <Header />
            <div className="max-w-4xl mx-auto">
                <section className="flex justify-between items-center py-4">
                    <h1 className="text-xl font-semibold">Chapter VI-A</h1>
                    <div>
                        <label htmlFor="financialYear" className="mr-2">Financial Year:</label>
                        <select id="financialYear" className="p-2 border border-gray-300 rounded">
                            <option>2022-23</option>
                            <option>2023-24</option>
                        </select>
                    </div>
                </section>

                <section className='bg-red-200 flex flex-row'>
                    <div className='p-2'>
                        <img className='pl-29' src='../assets/notdeclared.svg' alt='icon' />
                    </div>
                    <div className="text-[#96302A] p-4">

                        Amount Not Declared
                        <p className="text-xs text-[#C84038]">You will miss out on a lot of tax benefits</p>
                    </div>
                </section>

                <section className="bg-white p-6 mb-4">

                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Declaration</h2>
                            <p className="text-sm text-gray-600">Upload proof for the declarations that you have
                                done for the FY 2022-23</p>
                        </div>

                    </div>
                </section>
                <section className=' flex flex-row'>
                    <div className='p-2 h-14 w-14 bg-[#F2FFD6] rounded-full flex flex-row justify-center items-center ml-4'>
                        <img className='pl-29' src='../assets/coins-stacked-03.svg' alt='icon' />
                    </div>
                    <div className="text-[#667085] pl-4">

                        Declared Amount
                        <p className="text-xl text-[#344054] font-bold leading-6"><span>6584</span>&nbsp;&nbsp;<span>INR</span></p>
                    </div>
                    <div className='p-2 h-14 w-14 bg-[#D6EEFF] rounded-full flex flex-row justify-center items-center ml-4'>
                        <img className='pl-29' src='../assets/coins-stacked-04.svg' alt='icon' />
                    </div>
                    <div className="text-[#667085] pl-4">

                        Remaining to Declare
                        <p className="text-xl font-bold text-[#344054] leading-6"><span>65845</span>&nbsp;&nbsp;<span>INR</span></p>
                    </div>
                </section>
                <section className='mt-4 mb-2'>
                    <div className="bg-repeat bg-[#F4F6FA]" style={{"background-image": "url(../assets/taxregime.svg)"}}>
                        <div className='flex flex-row'>Tax Regime : <span>Old</span>
                        <img src='../assets/shift.svg' alt='switch-icon'/>
                        <span className='text-[#405CD2] font-xs '>change</span>
                        </div>
                        <div>
                            <p className='text-[#10AA64] text-xs font-medium'>Considering your salary structure we feel that Old Regime suits you the<br/> best. Although you can move to other tax regime if you want</p>
                        </div>
                    </div>
                </section>
                <section>

                    <SectionContainer taxData={taxData} onEdit={handleEdit} />
                </section>
                <button className='py-0.625 px-2 bg-[#405CD2] text-white rounded-md' onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
};

export default TaxDeclarationPage;