import { Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsStore } from 'src/posts/posts.store';
import { Dispatch, RootState } from 'src/store';

export function Search(): JSX.Element {
  const { pagination } = useSelector((state: RootState) => state.posts);
  const { setPagination } = postsStore.actions;
  const dispatch: Dispatch = useDispatch();

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setPagination({ ...pagination, search: e.target.value }));
  }

  return (
    <>
      <Input placeholder="search by title" onChange={onSearch} />
    </>
  );
}
