import React from 'react'
import TypeProduct from '@/components/TypeProduct/TypeProduct.jsx'
import classNames from 'classnames/bind'
import styles from './HomePage.module.scss'

const cx = classNames.bind(styles)

const HomePage = () => {
  const arr = ['TV','Laptop','Phone','Tablet','Watch']
  return (
    <div style={{ padding: '0 120px'}}>
      <div className={cx('wrapper')}>
        {arr.map((item) => {
        return (
          <TypeProduct name={item} key={item} />
        )
      })}
      </div>
    </div>
  )
}

export default HomePage