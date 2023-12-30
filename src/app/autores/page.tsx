import { PrismicNextImage } from '@prismicio/next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import { Container } from '~/components/container'

import { createClient } from '~/libs/prismicio'

export default async function AuthorsPage() {
	try {
		const client = createClient()

		const authorDocuments = await client.getAllByType('author', {
			orderings: {
				field: 'document.first_publication_date',
				direction: 'desc'
			}
		})

		return (
      <main className="py-12">
        <Container size="lg">
          <section>
            <h2 className="mb-8 text-3xl font-bold tracking-tight">Conheça nossos autores</h2>

            <div className="grid gap-6 grid-cols-2 sm:lg-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {authorDocuments.map((author) => {
                return (
                  <Link
                    key={author.id}
                    href={`/autores/${author.uid}`}
                    className="bg-neutral-100 flex flex-col items-center justify-center text-center px-6 py-8 rounded-md hover:bg-neutral-200 transition-colors"
                  >
                    <PrismicNextImage field={author.data.avatar} width={88} height={88} className="rounded-full" />

                    <dl>
                      <dt className="text-xl font-bold mt-4">{author.data.name}</dt>
                      <dd className="font-medium">{author.data.position}</dd>
                    </dl>
                  </Link>
                )
              })}
            </div>
          </section>
        </Container>
      </main>
    )
	} catch {
		return notFound()
	}
}
