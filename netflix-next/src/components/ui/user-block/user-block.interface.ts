import { IUser } from "@/types/auth.types";

export interface IUserBlockProps {
    location: "settings" | "profile",
    data: IUser
}