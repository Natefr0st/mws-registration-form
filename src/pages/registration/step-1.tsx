import React from 'react';
import Layout from "../../components/Layout";

const StepOne = () => {
  return (
    <div>
      <h1>HELLO WORLD!</h1>
    </div>
  );
};

StepOne.getLayout = function getLayout(page: typeof StepOne) {
  return <Layout>{page}</Layout>
}

export default StepOne;