import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FormUpdateNote } from '../Form/FormUpdateNote';

interface Note {
  id: string;
  title: string;
  description: string;
}

interface ModalAddImageProps {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
}

export function ModalUpdateNote({
  isOpen,
  onClose,
  note,
}: ModalAddImageProps): JSX.Element {
  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.900">
        <ModalHeader fontSize="4xl">Nova nota</ModalHeader>

        <ModalCloseButton />

        <ModalBody px={60}>
          <FormUpdateNote note={note} closeModal={handleCloseModal} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
