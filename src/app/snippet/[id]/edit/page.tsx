import EditSnippet from "@/app/components/EditSnippet"
import prismaInstance from "../../../../../prismaClient"



const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = parseInt((await params).id) 
  
  const snippet = await prismaInstance.snippet.findUnique({
    where:  {id} ,
  })
  console.log(snippet)
  return (
    <div>
      <EditSnippet snippet={snippet} />
    </div>
  )
}

export default Page
