import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import GoogleIcon from "../../../../public/google.svg"
import Image from "next/image";
import { AuthForm } from "@/components/ui/authForm/auth-form";

export default function SignUp() {
    
    return (
        <>
            <AuthForm type="register" />
        </>
    )
}