"use server"

import { redirect } from "next/navigation"
import { prisma } from "./utils/db"
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'



export async function handleSubmission(formData)
{
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    if(!user)
    {
        return redirect("/api/auth/login")
    }
    const title = formData.get("title")
    const content = formData.get("content")
    const imageUrl = formData.get("imageUrl")

     await prisma.BlogPost.create({
        data:{
            title,
            content,
            imageUrl,
            authorId: user.id,
            authorImg:user.picture,
            authorName: user.given_name

        }
    })
    return redirect("/dashboard")
}