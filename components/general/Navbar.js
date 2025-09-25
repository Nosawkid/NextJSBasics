"use client"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { RegisterLink, LoginLink,LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";


const Navbar =  () => {
    const { getUser } = useKindeBrowserClient()
    const user =  getUser()

    return (
        <nav className="py-5 flex items-center  gap-6">
            <div className="flex items-center gap-6 text-3xl font-semibold">
                <Link href={"/"}>
                    <h1 className="text-blue-500">Blog</h1>
                </Link>

                <div className="hidden sm:flex item-center gap-6">
                    <Link className="text-sm font-medium hover:text-blue-500 transistion-colors" href={"/"}>Home</Link>
                    <Link className="text-sm font-medium hover:text-blue-500 transistion-colors" href={"/dashboard"}>Dashboard</Link>
                </div>
            </div>
            {user ? (<div className="flex items-center gap-4">
                <p>{user.given_name}</p>
                <LogoutLink className={buttonVariants({variant:"destructive"})}>Logout</LogoutLink>
            </div>) : <div className="flex items-center gap-4">
                <LoginLink className={buttonVariants()}>Login</LoginLink>
                <RegisterLink className={buttonVariants({ variant: "secondary" })}>Sign Up</RegisterLink>
            </div>}
        </nav>
    )
}

export default Navbar