import HeadPost from './HeadPost'

export default function FullPost({ children, meta}) {
  return (
    <>
      <HeadPost meta={meta} />
      <article>{children}</article>
    </>
  )
}
