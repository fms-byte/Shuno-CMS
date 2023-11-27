import { Link } from '../components/common/Links'
import Layout from '../components/layout'

function Index() {
  return (
    <header className="flex h-full flex-col items-center justify-center sm:max-lg:min-h-[85vh]">
      <h1 className="mb-3 text-3xl font-bold">Shuno CMS</h1>
      <p className="mb-2 text-sm text-gray-500">Manage Songs, Albums, Artist, Podcast etc</p>
       
      
    </header>
  )
}

export default Index

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
