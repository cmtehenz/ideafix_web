import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
