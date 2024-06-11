import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            {/* navbar */}
            <div className='flex justify-between items-center bg-indigo-700/40 p-5'>
                <h2>Next hero</h2>
                <ul className='flex justify-between space-x-2'>
                    <li>Dashboard</li>
                    <li>User</li>
                    <li>Profile</li>
                </ul>
            </div>
            {/* dynamic routes */}
            <div>
                {children}
            </div>
            <footer className='bg-lime-800'>
                Dashboard Footer
            </footer>
        </div>
    );
};

export default DashboardLayout;