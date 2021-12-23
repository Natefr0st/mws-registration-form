import '../styles/globals.css'
import { NextPage } from "next";
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from "react";

import FormProvider from "../context/FormContext";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  )
}

export default MyApp
