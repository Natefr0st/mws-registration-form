import React from 'react';

import Layout from "../../components/Layout";
import Input from "../../components/input/Input";

const StepOne = () => {
  return (
    <div className="mt-6">
      <Input
        type="text"
        name="email"
        placeholder="Email"
      />
    </div>
  );
};

StepOne.getLayout = function getLayout(page: typeof StepOne) {
  return <Layout>{page}</Layout>
}

export default StepOne;