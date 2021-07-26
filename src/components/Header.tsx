import { Box, Flex, Button, useDisclosure, Image } from '@chakra-ui/react';

import { ModalAddNote } from './Modal/AddNote';

export function Header(): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgColor="pGray.800">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxW={1120}
          mx="auto"
          px={20}
          py={6}
        >
          <Image src="logo.png" h={10} />
          <Button onClick={() => onOpen()}>Adicionar nota</Button>
        </Flex>
      </Box>

      <ModalAddNote isOpen={isOpen} onClose={onClose} />
    </>
  );
}
