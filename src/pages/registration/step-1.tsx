import React, { MouseEvent } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import Input from "../../components/input/Input";
import useForm from "../../hooks/useForm";
import validate from "../../utils/validateInfo";

const StepOne = () => {
  const { handleChange, state, errors } = useForm(validate);
  const router = useRouter();

  /**
   * Changes route to /registration/step-2
   * @param {object} event Event Object
   * @returns {void}
   */
  const continueToStepTwo = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    router.push("/registration/step-2");
  }

  return (
    <div className="w-full mt-6">
      <div className="mb-4">
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
        <button
          className="px-16 py-3 text-white bg-slate-500 rounded-3xl"
          onClick={continueToStepTwo}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

StepOne.getLayout = function getLayout(page: typeof StepOne) {
  return <Layout>{page}</Layout>
};

export default StepOne;