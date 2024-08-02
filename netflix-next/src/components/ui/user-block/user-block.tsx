import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { IUserBlockProps } from "./user-block.interface"

export const UserBlock = ({location, data }: IUserBlockProps) => {
    return (
        <>
            {location === "profile" ? (
                <div className="flex gap-x-7">
                    <Avatar className="h-28 w-28 rounded-sm">
                    {data?.user.userImage ? (
                        <AvatarImage src={data?.user.userImage!} />
                    ) : (
                        <AvatarFallback className="rounded-full text-4xl">
                        {data?.user.name!.charAt(0) || "A"}
                        </AvatarFallback>
                    )}
                    </Avatar>
                    <div className="text-2xl">
                        <div>{data?.user.email}</div>
                        <div>{data?.user.name}</div>
                    </div>
                </div>) : (
                    <div className="flex gap-x-3">
                        <Avatar className="h-10 w-10 rounded-sm">
                            {data!.user!.userImage ? (
                                <AvatarImage src={data?.user.userImage} />
                            ) : (
                                <AvatarFallback className="rounded-full">
                                    {data?.user.name!.charAt(0) || "A"}
                                </AvatarFallback>
                            )}
                        </Avatar>
                        <div className="text-sm">
                            <div>{data?.user.email}</div>
                            <div>{data?.user.name}</div>
                        </div>
                    </div>
            )}
        </>
    );
}