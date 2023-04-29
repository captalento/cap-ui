import Link from "next/link";

interface CardProps {
  fields : {
    title: string
    slug: string
  }
}

export default function Card({ fields }: CardProps) {
  const {title, slug } = fields;

  return (
    <div>
      {title}
      <Link href={`/${slug}`}>{slug}</Link>
    </div>
  )
}
