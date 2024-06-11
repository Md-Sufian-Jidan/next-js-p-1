import Link from 'next/link';
import React from 'react';

const HistoryPage = () => {
    return (
        <div>
            <p className='text-xl mt-5 text-lime-300'>This is History Page</p>
            <Link className='mt-5' href={'/about/history/vision'}>Vision</Link>
        </div>
    );
};

export default HistoryPage;