import Link from "next/link";

export const Redirect = ({type, text}: {type: string, text: string}) => {
    return (
        <div className="text-gray-500 text-sm mt-2">
            {text + " "}
            <Link className="text-white hover:underline" href={`/${type}`}>
                <span className="capitalize">{type + " "}</span>
                <span>now</span>
            </Link>
        </div>
    );
}