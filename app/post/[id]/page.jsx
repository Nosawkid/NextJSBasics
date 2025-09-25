import { prisma } from "@/app/utils/db"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

async function getData(id) {
    const data = await prisma.BlogPost.findUnique({
        where: {
            id: id
        }
    })

    if (!data) return notFound()

    return data
}


const IdPage = async ({ params }) => {
    const { id } = await params
    const data = await getData(id)
    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <Link className={buttonVariants({ variant: "secondary" })} href={"/dashboard"}>Back to Posts</Link>
            <div className="mb-8 mt-6">
                <p className="mb-6 text-4xl font-bold">{data.title}</p>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="relative size-10 overflow-hidden rounded-full">
                            <Image className="object-cover" src={data.authorImg} fill alt="bldfvevded"/>
                        </div> 
                        <p className="font-medium">{data.authorName}</p>                       
                    </div>
                    <p className="text-sm text-gray-500">{new Intl.DateTimeFormat("en-IN",{
                        year:"numeric",
                        month:"short",
                        day:"numeric"
                    }).format(data.createdAt)
                    }</p>
                </div>
            </div>
            <div className="relative h-[400px] w-full mb-8 overflow-hidden rounded-lg">
                <Image className="object-cover" src={data.imageUrl} alt="ok" fill priority/>
            </div>
            <Card>
                    <CardContent>
                        <p className="text-gray-700">{data.content}</p>
                    </CardContent>
                </Card>
        </div>
    )
}

export default IdPage