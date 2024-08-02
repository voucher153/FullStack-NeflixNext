'use client'

import { useRouter } from "next/navigation"

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const router = useRouter()

    return (
        <div>
            {error.message}
            <span onClick={() => router.replace('/login')}>Go back</span>
        </div>
    )
}