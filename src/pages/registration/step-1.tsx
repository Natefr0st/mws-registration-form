import React from "react";
import Link from "next/link";

import Layout from "../../components/Layout";
import Input from "../../components/input/Input";
import useForm from "../../hooks/useForm";
import validate from "../../utils/validateInfo";

const StepOne = () => {
  const { handleChange, state, errors } = useForm(validate);

  return (
    <div className="w-full mt-6">
      <div className="email-input">
        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={state.email}
          changeHandler={handleChange}
        />
        {errors.email && (<p className="text-red-500">{errors.email}</p>)}
      </div>
      <div>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          changeHandler={handleChange}
        />
        {errors.password && (<p className="text-red-500">{errors.password}</p>)}
      </div>
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