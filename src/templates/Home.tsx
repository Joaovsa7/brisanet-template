import { SliceZone } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '~/components/button'
import { Container } from '~/components/container'
import { PageInfo } from '~/components/page-info'
import { mainSlices } from '~/slices'

import { HomeDocument } from '../../prismicio-types'

export function Home({ document }: { document: HomeDocument }) {
	return (
		<>
			<PageInfo updatedAt={document.last_publication_date} />

			<section className="bg-gradient-to-r from-primary-500 to-primary-700 py-8">
				<Container
					size="lg"
					className="min-h-80 flex flex-col items-start justify-center"
				>
					<div className="max-w-2xl">
						<h1 className="text-4xl md:text-5xl text-white font-bold mb-6 tracking-tighter">
							Encontre a melhor operadora para o seu perfil
						</h1>
						<p className="text-white text-lg font-medium mb-8">
							Portal das Operadoras simplifica a sua busca pela operadora ideal
							e conecta você com os melhores especialistas.
						</p>
					</div>
					<Button size="lg" variant="secondary" asChild>
						<Link href="/">Conhecer Operadoras</Link>
					</Button>
				</Container>
			</section>

			<main className="py-10">
				<SliceZone slices={document.data.slices} components={mainSlices} />
			</main>
		</>
	)
}
