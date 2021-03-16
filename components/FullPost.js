// import { HeadPost } from './HeadPost'

export default function FullPost({ children, meta}) {
  return (
    <>
      {/* <HeadPost meta={meta} isBlogPost /> */}
      <article>{children}</article>
    </>
  )
}
