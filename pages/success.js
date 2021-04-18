import Link from "next/link"
export default function Success() {
    return (
        <div>
            Form Submitted! Return to home page?
            <br/>
            <Link href="/">Home</Link>
        </div>
    )
}