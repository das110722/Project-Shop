import React from 'react';
import classNames from 'classnames/bind';
import styles from './NotFoundPage.module.scss';

const cx = classNames.bind(styles);

const NotFoundPage = () => {
  return (
    <div className={cx('container')}>
      <h1 className={cx('title')}>404</h1>
      <p className={cx('subtitle')}>Oops! Page not found</p>
      <p className={cx('description')}>
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <a href="/" className={cx('button')}>Go to Homepage</a>
    </div>
  );
};

export default NotFoundPage;
