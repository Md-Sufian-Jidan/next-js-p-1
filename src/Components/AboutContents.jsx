import Link from 'next/link';
import React from 'react';

const AboutContents = () => {
    return (
        <div>
            <h2 className='text-2xl text-center text-fuchsia-600'>This is about page</h2>
            <div>
                <Link href={'/about/history'}>History</Link>
                <Link href={'/about/mission'}>Mission</Link>
            </div>
        </div>
    );
};

export default AboutContents;