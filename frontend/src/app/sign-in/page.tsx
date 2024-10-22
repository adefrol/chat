import { NextPage } from "next";
import React from "react";
import { SignInForm } from "./_components/sign-in-form";

const Page: NextPage = () => {
    return (
        <div className='flex items-center justify-center h-full'>
            <SignInForm />
        </div>
    );
};

export default Page;
