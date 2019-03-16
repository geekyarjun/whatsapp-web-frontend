import React from 'react';

const LoaderScreen = () => (
    <div className="loader">
        { /* Copied from its original website whatsappweb.com (not created by me) */ }
        <svg className="_1UDDE" width="50" height="50" viewBox="0 0 44 44">
            <circle className="_3GbTq _3AnXT" cx="22" cy="22" r="20" fill="none" strokeWidth="4" stroke="red" />
        </svg>
        <div className="loader__progress-bar">
            <div className="loader__subprogress-bar" />
        </div>
    </div>
);

export default LoaderScreen;
