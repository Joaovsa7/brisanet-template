import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'

import { Breadcrumb } from '~/components/breadcrumb'
import { Container } from '~/components/container'

import type { AuthorDocument } from '../../../prismicio-types'

export function Authors({ authors }: { authors: AuthorDocument[] }) {
	return (
		<main className="py-12">
			<Container size="lg">
				<Breadcrumb className="mb-10" />

				<section>
					<h2 className="mb-8 text-3xl font-bold tracking-tight">
						Conheça nossos autores
					</h2>

					<div className="grid gap-6 grid-cols-2 sm:lg-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
						{authors.map((author) => {
							return (
								<Link
									key={author.id}
									href={`/autores/${author.uid}`}
									prefetch={false}
									className="bg-neutral-100 flex flex-col items-center justify-center text-center px-6 py-8 rounded-md hover:bg-neutral-200 transition-colors"
								>
									<PrismicNextImage
										field={author.data.avatar}
										width={88}
										height={88}
										className="rounded-full"
									/>

									<dl>
										<dt className="text-xl font-bold mt-4">
											{author.data.name}
										</dt>
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
}
