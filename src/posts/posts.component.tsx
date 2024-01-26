import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { Post } from 'src/post/post.component';
import { Search } from 'src/search/search.component';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const defaultPagination = {
  pageNumber: 1,
  pageSize: 10,
  search: '',
};

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState<{
    pageNumber: number;
    pageSize: number;
    search: string;
  }>(defaultPagination);

  useEffect(() => {
    fetch(
      `${apiUrl}?_page=${pagination.pageNumber}&_limit=${pagination.pageSize}&title_like=${pagination.search}`,
    )
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  function onChange(pageNumber, pageSize) {
    setPagination({ ...pagination, pageNumber, pageSize });

    console.log(pagination);

    fetch(
      `${apiUrl}?_page=${pagination.pageNumber}&_limit=${pagination.pageSize}&title_like=${pagination.search}`,
    )
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }

  return (
    <div>
      <h2>Posts</h2>
      <Search />
      {posts.map((post) => (
        <Post post={post} />
      ))}
      <Pagination onChange={onChange} total={300} />
    </div>
  );
}
