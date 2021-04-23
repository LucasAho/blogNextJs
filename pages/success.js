import Link from "next/link"
export default function Success() {
    return (
        <div>
            Form submitted! I will get back to you as soon 
            as possible, thank you.
            <br />
            <Link
                href="/"
                as={`/`}>
                    <a>Home</a>
            </Link>
        </div>
    )
}