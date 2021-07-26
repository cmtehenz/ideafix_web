import { useQuery } from 'react-query';
import { api } from '../api';

type Note = {
  id: string;
  title: string;
  description: string;
}

type GetNotesResponse = {
  totalCount: number;
  notes: Note[];
}

export async function getNotes(page: number): Promise<GetNotesResponse>{
  const { data, headers } = await api.get('/notes', {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count'])

  const notes = data.users.map(note=> {
    return {
      id: note.id,
      title: note.title,
      description: note.description,
    }
  })

  return {
    notes,
    totalCount,
  }
};

export function useNotes(page: number) {
  return useQuery(['notes', page], () => getNotes(page), {
    staleTime: 60 * 60 * 24, // 24 hours
  })
}
