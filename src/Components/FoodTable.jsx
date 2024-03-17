import React from 'react';

const FoodTable = () => {
    return (
        <div className=''>
            <h2 className='text-center my-6 text-[24px] font-semibold'>Want to Cook: </h2>
            <hr className='mx-10' />
            <table className='mt-6 text-[#878787] text-[16px] font-normal'>
                <thead>
                    <tr>
                        <th className="py-2 px-4"></th>
                        <th className="py-2 pr-10">Name</th>
                        <th className="py-2 px-10">Time</th>
                        <th className="py-2 px-10">Calories</th>
                        <th className="py-2 px-10"></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th className="py-2 px-4">1</th>
                        <th className="py-2 pr-10">Name</th>
                        <th className="py-2 px-10">Time</th>
                        <th className="py-2 px-10">Calories</th>
                        <th className="py-2 px-4">Button</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FoodTable;