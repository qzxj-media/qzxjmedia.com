import Image, { ImageProps } from 'next/image'
import { FC } from 'react'
import MyDivider from './my-divider'
import Paragraph from './paragraph'
import { MyHeading } from './typography/my-heading'

const ResponsiveImage: FC<ImageProps> = props => (
  <Image alt={props.alt} layout="responsive" {...props} />
)

const components = {
  img: ResponsiveImage,
  h1: MyHeading.H1,
  h2: MyHeading.H2,
  h3: MyHeading.H3,
  h4: MyHeading.H4,
  h5: MyHeading.H5,
  h6: MyHeading.H6,
  p: Paragraph,
  hr: MyDivider
}

export default components
