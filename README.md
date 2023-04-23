# react-image-skeleton

> Skeleton for images

[![NPM](https://img.shields.io/npm/v/react-image-skeleton.svg)](https://www.npmjs.com/package/react-image-skeleton) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-image-skeleton
```

## Usage

```tsx
[...]

import ImageSkeleton from 'react-image-skeleton'

function App () {
  return <ImageSkeleton
    src="URL from image"
    alt="Alternative descriptive text"
    height="5rem"
  />
}

[...]
```

## Documentation

The React Image Skeleton docs are published at [https://github.com/ChristianCopa/react-image-skeleton](https://github.com/ChristianCopa/react-image-skeleton)

### Props

> **ImageSkeleton** Component Props

> ***Required Props***
> 
>  - **src**
>    
>     Image URL
> 
>  - **alt**
>    
>     Alternative text to image when isn't available
> 
>  - **height**
>    
>     Height size by default (Acceptable all CSS units of measure available)

> ***Optional Props***
> 
>  - **imageProps**
>    
>     Properties to (HTMLImageElement) Img tag inside component
> 
>  - **props**
>    
>     Properties to components container in type (HTMLDivElement) Div tag parent of component
> 
>  - **skeletonProps**
>    
>     Properties to skeleton by default in type (HTMLDivElement) Div tag with skeleton animation
> 
>  - **skeleton**
>    
>     Component defined by user to be used as Skeleton, can be any JSX.Element
> 
>  - **transition**
>    
>     CSS transition property to skeleton when is hidding
> 
>  - **background**
>    
>     CSS background property as animation (By default: linear-gradient(45deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 60%))

---

### Skeleton with loaders

> **BasicLoader** Component Props
>
> ***Optional Props***
>
> - **mini** 
>    
>   Reduce size of loader circle animated
>
> - **dark** 
>   
>   Change background to dark gray and circle animated to light gray

## Examples

```tsx
// Simple skeleton
const App = () => {
  return (
    <ImageSkeleton
      src='https://solucionesdata.com/api/img.php?k=image-example'
      alt=''
      height='90vh'
    />
  )
}
export default App
```

![react-image-skeleton by default](https://solucionesdata.com/media/projects/libraries/react-image-skeleton-default.gif)

---

```tsx
// Custom styles and props
const App = () => {
  return (
    <ImageSkeleton
      src='https://solucionesdata.com/api/img.php?k=image-example'
      alt=''
      height='90vh'
      props={{
        style: {
          borderRadius: '1rem'
        }
      }}
      imageProps={{
        style: {
          filter: 'brightness(.5)'
        }
      }}
      skeletonProps={{
        style: {
          boxShadow: "inset 0rem 0rem 2rem black"
        }
      }}
      transition='opacity 2s ease-in-out'
      background='linear-gradient(45deg, #f08000 40%, #f15450 50%, #f08000 60%)'
    />
  )
}
export default App
```

![react-image-skeleton by default](https://solucionesdata.com/media/projects/libraries/react-image-skeleton-defined-styles.gif)

---

```tsx
// Skeleton with custom simple Loader

const App = () => {
  return (
    <ImageSkeleton
      src='https://solucionesdata.com/api/img.php?k=image-example'
      alt=''
      height='90vh'
      skeleton={<BasicLoader />}
    />
  )
}
export default App
```

![react-image-skeleton by default](https://solucionesdata.com/media/projects/libraries/react-image-skeleton-custom-loader.gif)

---

```tsx
// Skeleton with custom Loader with props (mini, dark)

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
```

![react-image-skeleton by default](https://solucionesdata.com/media/projects/libraries/react-image-skeleton-custom-loader-minidark.gif)

---

### Imports

```tsx
import ImageSkeleton, { BasicLoader } from 'react-image-skeleton'
```

---

## License

MIT © [Christian Copa](https://github.com/ChristianCopa)
