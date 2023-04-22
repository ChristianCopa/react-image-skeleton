import React from 'react'
import ImageSkeleton from './Skeleton'
import './styles.module.css'
import { BasicLoader } from './components/loaders/BasicLoader'

// import { BasicLoader } from './components/loaders/BasicLoader'

const App = () => {
  return (
    <ImageSkeleton
      src='https://solucionesdata.com/api/img.php?k=image-example'
      alt=''
      height='90vh'
      skeleton={<BasicLoader mini dark />}
    />
  )
}
export default App
