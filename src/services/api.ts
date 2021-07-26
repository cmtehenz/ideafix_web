import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const removeNote = async (id: string): Promise<boolean> => {
  const response = await api.delete(`/notes/${id}`);
  if (!response) {
    return false;
  }

  return true;
};
