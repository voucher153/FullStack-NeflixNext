import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "../../../../public/google.svg"
import { AuthForm } from "@/components/ui/authForm/auth-form";

export default function Login() {

    return (
        // <div className="absolute mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
        //     <form>
        //         <h1 className="text-3xl font-semibold text-white">
        //             Log in
        //         </h1>
        //         <div className="space-y-4 mt-5">
        //             <Input 
        //                 type="email" 
        //                 name="email" 
        //                 placeholder="Email" 
        //                 className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block" 
        //             />
        //             <Button 
        //                 type="submit"
        //                 variant="destructive" 
        //                 className="w-full bg-[#e50914]"
        //             >
        //                 Log in
        //             </Button>
        //         </div>
        //     </form>
        //     <div className="text-gray-500 text-sm mt-2">
        //         New to Netflix?{' '}
        //         <Link className="text-white hover:underline" href="/sign-up">
        //             Sign up now
        //         </Link>
        //     </div>
        //     <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        //         <GitHubButton />
        //         <Button variant="outline" size="icon">
        //             <Image src={GoogleIcon} alt="google-icon" className="w-4 h-4" />
        //         </Button>
        //     </div>
        // </div>
        <>
            <AuthForm type="login" />
        </>
    )
}