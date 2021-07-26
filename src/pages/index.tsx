import { Box } from '@chakra-ui/react';

import { useQuery } from 'react-query';
import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const { isLoading, isError, data } = useQuery('notes', () =>
    fetch('http://localhost:3333/notes').then(res => res.json())
  );

  if (isLoading && !isError) {
    return <Loading />;
  }

  if (!isLoading && isError) {
    return <Error />;
  }

  return (
    <>
      <Header />
      <Box maxW={1120} px={[10, 15, 20]} mx="auto" my={[10, 15, 20]}>
        <CardList cards={data} />
      </Box>
    </>
  );
}
