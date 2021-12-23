import React, { useContext } from 'react';
import Link from "next/link";

import Layout from "../../components/Layout";
import Input from "../../components/input/Input";
import { FormContext } from "../../context/FormContext";

const StepOne = () => {
  const [state, setState]: any = useContext(FormContext);

  return (
    <div className="w-full mt-6">
      <Input
        type="text"
        name="email"
        placeholder="Email"
        changeHandler={() => {}}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
      />
      <div className="text-center mt-8">
        <Link href="/registration/step-2">
          <a className="px-16 py-3 text-white bg-slate-500 rounded-3xl" role="button">
            Continue
          </a>
        </Link>
      </div>
    </div>
  );
};

StepOne.getLayout = function getLayout(page: typeof StepOne) {
  return <Layout>{page}</Layout>
}

export default StepOne;