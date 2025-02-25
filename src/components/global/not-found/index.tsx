import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col min-h-[70vh] w-full justify-center items-center gap-12">

            <div className="flex flex-col items-center justify text-center">
                <p className="text-3xl font-semibold text-primary">
                    Nothing to see here
                </p>
                <p className="text-base font-normal text-secondary">
                    So here is random image generated by <span className="text-vivid"> Creative AI </span>
                </p>
            </div>
        </div>
    );
};

export default NotFound;