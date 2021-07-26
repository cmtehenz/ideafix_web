import { Box, Heading, Text, IconButton } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useMutation, useQueryClient } from 'react-query';
import { removeNote } from '../services/api';

interface Card {
  id: string;
  title: string;
  description: string;
}

interface CardProps {
  data: Card;
}

export function Card({ data }: CardProps): JSX.Element {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(removeNote);

  async function remove(): Promise<boolean> {
    const res = await mutateAsync(data.id);
    queryClient.invalidateQueries('notes');
    return res;
  }

  return (
    <Box key={data.id} borderRadius="md" bgColor="pGray.800">
      <Box p="4px" float="right">
        <IconButton
          size="sm"
          mr="8px"
          colorScheme="green"
          aria-label="Editar nota"
          icon={<EditIcon />}
        />
        <IconButton
          size="sm"
          colorScheme="red"
          aria-label="Deletar nota"
          onClick={remove}
          icon={<DeleteIcon />}
        />
      </Box>
      <Box pt={1} pb={4} px={6}>
        <Heading fontSize="2xl">{data.title}</Heading>
        <Text mt={2.5} fontSize="md">
          {data.description}
        </Text>
      </Box>
    </Box>
  );
}
