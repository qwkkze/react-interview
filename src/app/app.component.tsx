import 'antd/dist/antd.css';

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Pages } from 'shared/routing/routes';
import styles from 'src/app/app.scss';
import { Posts } from 'src/posts/posts.component';

const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={Pages.posts}>{Pages.posts}</Link>
      </header>
      <main>
        <Routes>
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
