import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { themeDark } from "../src/theme/themes";
import Layout from "../src/components/UI/Layout";
import { AnimateSharedLayout } from "framer-motion";
import { RecoilExternalStatePortal } from "../src/components/Utils/RecoilExternalStatePortal";
import RecoilNexus from "recoil-nexus";

function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    return (
        <RecoilRoot>
            <RecoilNexus/>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider theme={themeDark}>
                    <Layout>
                        <AnimateSharedLayout>

                            <Component {...pageProps} />
                            
                        </AnimateSharedLayout>
                    </Layout>
                </ChakraProvider>
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default MyApp;
