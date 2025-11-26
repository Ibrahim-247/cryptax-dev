"use client"

import ErrorScreen from '@/components/common/error-screen';
import { ErrorProps } from '@/types';

const Error = ({ error, reset }: ErrorProps) => {

    console.log(error);

    // main render
    return (
        <div className='w-full h-screen flex justify-center items-center '>
            <ErrorScreen reset={reset} error={error} />
        </div>
    );
};

export default Error;