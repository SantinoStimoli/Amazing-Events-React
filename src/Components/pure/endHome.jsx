import React from 'react';

const EndHome = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-20 pt-10 mx-auto">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900">Some of our general statistics</h1>
                    <div className="flex flexWrap justify-center -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="px-4 py-6 roundedLg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="color-personalizado w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                                    <path d="M12 6v2m0 8v2" />
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">1,300M</h2>
                                <p className="leading-relaxed">Revenues</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="px-4 py-6 roundedLg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="color-personalizado w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">+15M</h2>
                                <p className="leading-relaxed">Assistance</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="px-4 py-6 roundedLg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="color-personalizado w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">+50</h2>
                                <p className="leading-relaxed">Events</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EndHome;
