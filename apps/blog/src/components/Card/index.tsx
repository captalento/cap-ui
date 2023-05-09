import Link from "next/link";
import * as styles from './styles.css'
import { Heading, sprinkles } from "@captalento/design-system";
import clsx from "clsx";
interface CardProps {
  fields : {
    title: string
    slug: string
  }
}

export default function Card({ fields }: CardProps) {
  const {title, slug } = fields;

  return (
    <Link href={`/${slug}`}  className={clsx(styles.cardClass, sprinkles({
      marginY:"medium",
    }))}>
      <Heading size="sm" color="secondary">{title}</Heading>
    </Link>
  )
}