import { Box, Heading, Text } from '@chakra-ui/react';

interface Card {
  id: string;
  title: string;
  description: string;
}

interface CardProps {
  data: Card;
}

export function Card({ data }: CardProps): JSX.Element {
  return (
    <Box key={data.id} borderRadius="md" bgColor="pGray.800">
      <Box pt={5} pb={4} px={6}>
        <Heading fontSize="2xl">{data.title}</Heading>
        <Text mt={2.5} fontSize="md">
          {data.description}
        </Text>
      </Box>
    </Box>
  );
}
