import Link from "next/link"
export default function Success() {
    return (
        <div>
            Form Submitted
            <br />
            <Link
                href="/"
                as={`/`}>
                    <a>Home</a>
            </Link>
        </div>
    )
}