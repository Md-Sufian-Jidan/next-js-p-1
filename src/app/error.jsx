'use client'
import Link from 'next/link';
import React from 'react';

const Error = () => {
    return (
        <div>
            <p>opps! This page is not avaliable</p>
            <div>
                <button><Link href={'/'}>Home</Link></button>
                {/* <button><Link >Take Back</Link></button> */}
            </div>
        </div>
    );
};

export default Error;