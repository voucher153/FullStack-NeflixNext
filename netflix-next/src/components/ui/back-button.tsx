'use link'

import { ArrowLeftIcon } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export const BackButton = () => {

    const {back} = useRouter()

    return (
        <Button variant="outline" onClick={() => back()}>
            <ArrowLeftIcon className="mr-2" />
            Go back
        </Button>
    );
}