import Link from "next/link";
import * as styles from './styles.css'
import { Heading } from "@captalento/design-system";
interface CardProps {
  fields : {
    title: string
    slug: string
  }
}

export default function Card({ fields }: CardProps) {
  const {title, slug } = fields;

  return (
    <div className={styles.cardClass}>
      <Heading size="sm" color="secondary">{title}</Heading>
      <Link href={`/${slug}`}>{slug}</Link>
    </div>
  )
}
