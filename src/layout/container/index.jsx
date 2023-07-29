import React from 'react'
import styles from './container.module.scss'
import classNames from 'classnames'

function Container(props) {
  return (
    <div className={classNames(styles.container,props.className)}>{props.children}</div>
  )
}

export default Container