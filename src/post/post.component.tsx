import React from 'react';

import styles from './post.scss';

export function Post(props) {
  const { post } = props;

  return (
    <div className={styles.container}>
      {post.title}
      {post.body}
      <hr />
    </div>
  );
}
