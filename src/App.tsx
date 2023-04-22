import React from 'react'
import ImageSkeleton from './Skeleton'
import './styles.module.css'

// import { BasicLoader } from './components/loaders/BasicLoader'

const App = () => {
  return (
    <ImageSkeleton
      src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDI4fHxkZXZlbG9wbWVudHxlbnwwfHx8fDE2NzQ5NDg4NzA&ixlib=rb-4.0.3'
      alt=''
      height='90vh'
    />
  )
}
export default App
