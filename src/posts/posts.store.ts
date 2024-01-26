import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PostsState {
  pagination: {
    pageNumber: number;
    pageSize: number;
    search: string;
  };
}

const initialState: PostsState = {
  pagination: {
    pageNumber: 1,
    pageSize: 10,
    search: '',
  },
};

export const postsStore = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPagination: (
      state,
      {
        payload,
      }: PayloadAction<{
        pageNumber: number;
        pageSize: number;
        search: string;
      }>,
    ) => {
      state.pagination = payload;
    },
  },
});
