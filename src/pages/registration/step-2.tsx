import React from 'react';

import Layout from "../../components/Layout";

const StepTwo = () => {
  return (
    <div>
      <h2>Step 2</h2>
    </div>
  );
};

StepTwo.getLayout = function getLayout(page: typeof StepTwo) {
  return <Layout>{page}</Layout>
};

export default StepTwo;