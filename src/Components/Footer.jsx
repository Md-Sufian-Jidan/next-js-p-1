// import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/router';
// import React from 'react';

const Footer = () => {
    // const pathName = useRouter();
    // console.log('line 6 footer', pathName);
    // const dash = pathName.split('/')[1];
    // console.log('clg',pathName);
    // if (pathName?.includes('/dashboard')) {
    //     return (
    //         <footer className='bg-lime-800'>
    //             Dashboard Footer
    //         </footer>
    //     )
    // }
    return (
        <footer className="text-xl text-center p-5 mx-20 my-2 bg-orange-500 rounded-xl">
            This is my next js app
        </footer>
    );
};

export default Footer;