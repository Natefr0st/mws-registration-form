import React from 'react';

import Layout from "../../components/Layout";
import Input from "../../components/input/Input";
import Link from "next/link";

const StepOne = () => {
  return (
    <div className="w-full mt-6">
      <Input
        type="text"
        name="email"
        placeholder="Email"
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
      />
      <div className="text-center mt-8">
        <button className="w-[15rem] px-4 py-3 text-white bg-slate-500 rounded-3xl">
          <Link href="/registration/step-2">
            Continue
          </Link>
        </button>
      </div>
    </div>
  );
};

StepOne.getLayout = function getLayout(page: typeof StepOne) {
  return <Layout>{page}</Layout>
}

export default StepOne;