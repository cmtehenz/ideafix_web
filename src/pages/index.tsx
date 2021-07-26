import { Box } from '@chakra-ui/react';

import { useEffect } from 'react';
import { useState } from 'react';
import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
// import { Loading } from '../components/Loading';
// import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    api.get('notes').then(response => {
      setNotes(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Box maxW={1120} px={[10, 15, 20]} mx="auto" my={[10, 15, 20]}>
        <CardList cards={notes} />
      </Box>
    </>
  );
}
