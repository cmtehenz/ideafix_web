import { Box, Button, Stack, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import { api } from '../../services/api';
import { TextInput } from '../Input/TextInput';

interface FormAddImageProps {
  closeModal: () => void;
}

interface NewNoteData {
  title: string;
  description: string;
}

export function FormAddNote({ closeModal }: FormAddImageProps): JSX.Element {
  const toast = useToast();

  const formValidations = {
    title: {
      required: 'Título obrigatório',
      minLength: {
        value: 2,
        message: 'Mínimo de 2 caracteres',
      },
      maxLength: {
        value: 20,
        message: 'Máximo de 20 caracteres',
      },
    },
    description: {
      required: 'Descrição obrigatória',
      maxLength: {
        value: 65,
        message: 'Máximo de 65 caracteres',
      },
    },
  };

  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (note: NewNoteData) => {
      await api.post('/notes', {
        ...note,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('notes');
      },
    }
  );

  const { register, handleSubmit, reset, formState, setError, trigger } =
    useForm();
  const { errors } = formState;

  const onSubmit = async (data: NewNoteData): Promise<void> => {
    try {
      await mutation.mutateAsync(data);
      toast({
        title: 'Nota cadastrada',
        description: 'Sua nota foi cadastrada com sucesso.',
        status: 'success',
      });
    } catch {
      toast({
        title: 'Falha no cadastro',
        description: 'Ocorreu um erro ao tentar cadastrar a sua nota.',
        status: 'error',
      });
    } finally {
      reset();
      closeModal();
    }
  };

  return (
    <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <TextInput
          placeholder="Título da nota..."
          {...register('title', formValidations.title)}
          error={errors.title}
        />

        <TextInput
          placeholder="Descrição da nota..."
          {...register('description', formValidations.description)}
          error={errors.description}
        />
      </Stack>

      <Button
        my={6}
        isLoading={formState.isSubmitting}
        isDisabled={formState.isSubmitting}
        type="submit"
        w="100%"
        py={6}
      >
        Enviar
      </Button>
    </Box>
  );
}
