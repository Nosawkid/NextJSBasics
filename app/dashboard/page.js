import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server'
import BlogPostCard from "@/components/general/BlogPostCard";

async function getData(userId) {
  // Simulate 2s wait

  const data = await prisma.BlogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}


export default async function Dashboard()
{

    const {getUser} = getKindeServerSession()
    const user = await getUser()

    const data = await getData(user.id)
    
    return(
        <div>
            <div className="flex w-full items-center justify-between mb-5 gap-2">
                <h2 className="text-xl font-medium">Your Blogs</h2>
                <Link className={buttonVariants({variant:"secondary"})} href={"/dashboard/create"}>Create Post</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data.map((item)=>(
                    <BlogPostCard key={item.id} data={item}/>
                ))
            }

            </div>
        </div>
    )
}