import React from 'react'
import styles from '../../styles/loader.module.css'
// eslint-disable-next-line no-unused-vars
import { LoaderProps } from '../../common/types'

/**
 * @param mini Reduce size of loader circle animated
 * @param dark Change background to dark gray and circle animated to light gray
 * @returns Basic Loader component in light and regular style by default
 */
export const BasicLoader = (props: LoaderProps) => {
  return (
    <div
      className={`
        ${styles.__loader__} 
        ${props.dark ? styles.light : styles.dark} 
        ${props.mini ? styles.mini : styles.regular} 
        ${props.className ? props.className : ''}
        `}
    >
      <span
        className={`${styles.__basic_loader__}`}
        style={props.style ? props.style : {}}
      />
    </div>
  )
}
