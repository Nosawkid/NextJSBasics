import Image from "next/image"
import Link from "next/link"



const BlogPostCard = ({ data }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
            <Link href={`/post/${data.id}`} className="block w-full h-full">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image className="object-cover" src={data.imageUrl} alt="image for block" fill />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{data.title}</h3>
                    <p className="mb-4 text-sm text-gray-600 line-clamp-2">{data.content}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="relative size-8 overflow-hidden rounded-full">
                                <Image src={data.authorImg} alt="author profile" fill className="object-cover"/>
                            </div>
                            <p className="text-sm font-medium text-gray-700">{data.authorName}</p>
                        </div>
                        <time className="text-xs text-gray-500">{new Intl.DateTimeFormat("en-IN",{
                            year:"numeric",
                            month:"short",
                            day:"numeric"
                        }).format(data.createdAt)
                        }</time>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default BlogPostCard