import * as React from 'react'
import style from './styles.module.css'

interface Props {
  imageProps?: React.HTMLProps<HTMLImageElement>
  props?: React.HTMLProps<HTMLDivElement>
  skeletonProps?: React.HTMLProps<HTMLDivElement>

  src: string
  alt: string
  height: string

  transition?: React.CSSProperties['transition']
  background?: React.CSSProperties['background']
  skeleton?: JSX.Element
}

/**
 * @param src Image URL
 * @param alt Alternative text to image when isn't available
 * @param height Height size by default (Acceptable all CSS units of measure available)
 *
 * @param imageProps Properties to HTMLImageElement
 * @param props Properties to components container in type HTMLDivElement
 * @param skeletonProps Properties to skeleton by default in type HTMLDivElement
 *
 * @param skeleton Component defined by user to be used as Skeleton
 *
 * @param transition CSS transition property to skeleton when is hidden
 * @param background CSS background property as animation (By default: linear-gradient(45deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 60%))
 *
 * @returns
 */
const ImageSkeleton = (props: Props) => {
  const [
    [imageClass, setImageClass],
    [propsClass, setPropsClass],
    [skeletonClass, setSkeletonClass]
  ] = [React.useState(''), React.useState(''), React.useState('')]

  const [[propsStyle, setPropsStyle], [skeletonStyle, setSkeletonStyle]] = [
    React.useState<React.CSSProperties>({}),
    React.useState<React.CSSProperties>({})
  ]

  const [isLoad, setIsLoad] = React.useState(false)

  React.useEffect(() => {
    if (props.imageProps?.className) {
      setImageClass(props.imageProps.className)
      delete props.imageProps.className
    }
    if (props.props?.className) {
      setPropsClass(props.props.className)
      delete props.props.className
    }
    if (props.skeletonProps?.className) {
      setSkeletonClass(props.skeletonProps.className)
      delete props.skeletonProps.className
    }

    //

    if (props.props?.style) {
      setPropsStyle(props.props.style)
      delete props.props.style
    }
    if (props.skeletonProps?.style) {
      setSkeletonStyle(props.skeletonProps.style)
      delete props.skeletonProps.style
    }
  }, [])
  return (
    <div
      style={
        {
          '--default_height_skeleton': props.height,
          ...propsStyle
        } as React.CSSProperties
      }
      className={`__component_skeleton__ ${propsClass} ${style.__component_skeleton__}`}
      {...props.props}
    >
      <img
        className={`__image__ ${imageClass} ${style.__image__}`}
        src={props.src}
        alt={props.alt}
        {...props.imageProps}
        onLoad={(ev) => {
          ev.preventDefault()

          setIsLoad(true)
        }}
      />

      {props.skeleton ? (
        React.createElement(
          'div',
          {
            style: {
              '--opacity': isLoad ? '0' : '1',
              '--transition': props.transition
                ? props.transition
                : 'opacity 0.5s ease-in-out',
              ...skeletonStyle
            },
            className: `__skeleton__ ${skeletonClass} ${style.__skeleton__} ${style.__skeleton_defined__}`,
            ...props.skeletonProps
          },
          props.skeleton
        )
      ) : (
        <div
          style={
            {
              '--opacity': isLoad ? '0' : '1',
              '--transition': props.transition
                ? props.transition
                : 'opacity 0.5s ease-in-out',
              '--background': props.background
                ? props.background
                : 'linear-gradient(45deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 60%)',
              ...skeletonStyle
            } as React.CSSProperties
          }
          className={`__skeleton__ ${skeletonClass} ${style.__skeleton__}`}
          {...props.skeletonProps}
        />
      )}
    </div>
  )
}

export default ImageSkeleton
