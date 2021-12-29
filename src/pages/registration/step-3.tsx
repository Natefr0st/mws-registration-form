import React from 'react';

import Layout from "../../components/Layout";

const StepThree = () => {
  return (
    <div>
      <h2>Step 3</h2>
    </div>
  );
};

StepThree.getLayout = function getLayout(page: typeof StepThree) {
  return <Layout>{page}</Layout>
}

export default StepThree;