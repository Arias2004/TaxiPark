import Link from "next/link";

interface FooterProps {
    description: string,
    textLink: string,
    link: string,
}

export function Footer({ description, textLink, link }: FooterProps) {
    return ( 
        <div className="flex text-white text-center gap-1">
            <p className="text-sm">{description}</p>
            <Link className="text-sm font-semibold" href={link}>{textLink}</Link>
        </div>
    )
}