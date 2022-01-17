import axios from 'axios';

const url = 'http://localhost:5000/thoughts';

export const fetchThoughts = () => axios.get(url);
export const postThought = (newThought) => axios.post(url, newThought);
export const updateThought = (id, updatedThought) => axios.patch(`${url}/${id}`, updatedThought);
export const deleteThought = (id) => axios.delete(`${url}/${id}`);
export const likeThought = (id) => axios.patch(`${url}/${id}/likeThought`);