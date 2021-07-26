import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FormAddNote } from '../Form/FormAddNote';

interface ModalAddImageProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalAddNote({
  isOpen,
  onClose,
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
          <FormAddNote closeModal={handleCloseModal} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
