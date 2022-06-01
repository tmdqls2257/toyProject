import { NextPage } from 'next'
import { useRouter } from 'next/router'

const PostDetailPage: NextPage<{}> = () => {
  const router = useRouter()

  return <div>Post ID: {router.query.id}</div>
}
export default PostDetailPage
