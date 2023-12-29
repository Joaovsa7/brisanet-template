import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { createClient, fetchLinks } from '~/libs/prismicio'

import { Button } from '~/components/button'
import { Container } from '~/components/container'
import { PageInfo } from '~/components/page-info'

export default async function Home() {
	try {
		const client = createClient()

		const document = await client.getSingle('home', { fetchLinks })

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
								Portal das Operadoras simplifica a sua busca pela operadora
								ideal e conecta você com os melhores especialistas.
							</p>
						</div>
						<Button size="lg" variant="secondary" asChild>
							<Link href="/">Conhecer Operadoras</Link>
						</Button>
					</Container>
				</section>

				<main className="py-10 md:py-16">
					<Container size="lg" asChild>
						<section>
							<h2 className="text-2xl md:text-3xl font-bold flex items-center tracking-tight gap-2 mb-6 before:w-2 before:h-10 before:bg-primary-500 before:block">
								Operadoras de Internet
							</h2>

							<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
								<div className="p-6 border border-neutral-200 rounded-lg flex items-center justify-center">
									<Image
										src="/claro.svg"
										alt=""
										width={144}
										height={144}
										className="aspect-video"
									/>
								</div>
								<div className="p-6 border border-neutral-200 rounded-lg flex items-center justify-center">
									<Image
										src="/sky.svg"
										alt=""
										width={144}
										height={144}
										className="aspect-video"
									/>
								</div>
								<div className="p-6 border border-neutral-200 rounded-lg flex items-center justify-center">
									<Image
										src="/tim.svg"
										alt=""
										width={144}
										height={144}
										className="aspect-video"
									/>
								</div>
								<div className="p-6 border border-neutral-200 rounded-lg flex items-center justify-center">
									<Image
										src="/vivo.svg"
										alt=""
										width={144}
										height={144}
										className="aspect-video"
									/>
								</div>
								<div className="p-6 border border-neutral-200 rounded-lg flex items-center justify-center">
									<Image
										src="/hughesnet.svg"
										alt=""
										width={144}
										height={144}
										className="aspect-video"
									/>
								</div>
							</div>
						</section>
					</Container>

					<Container size="lg" asChild>
						<section>
							<h2 className="text-2xl md:text-3xl font-bold flex items-center tracking-tight gap-2 mb-6 before:w-2 before:h-10 before:bg-primary-500 before:block mt-16">
								Operadoras de Saúde
							</h2>

							<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
								<div className="p-6 border border-neutral-200 rounded-lg flex items-center justify-center">
									<Image
										src="/claro.svg"
										alt=""
										width={144}
										height={144}
										className="aspect-video"
									/>
								</div>
								<div className="p-6 border border-neutral-200 rounded-lg flex items-center justify-center">
									<Image
										src="/sky.svg"
										alt=""
										width={144}
										height={144}
										className="aspect-video"
									/>
								</div>
								<div className="p-6 border border-neutral-200 rounded-lg flex items-center justify-center">
									<Image
										src="/tim.svg"
										alt=""
										width={144}
										height={144}
										className="aspect-video"
									/>
								</div>
								<div className="p-6 border border-neutral-200 rounded-lg flex items-center justify-center">
									<Image
										src="/vivo.svg"
										alt=""
										width={144}
										height={144}
										className="aspect-video"
									/>
								</div>
								<div className="p-6 border border-neutral-200 rounded-lg flex items-center justify-center">
									<Image
										src="/hughesnet.svg"
										alt=""
										width={144}
										height={144}
										className="aspect-video"
									/>
								</div>
							</div>
						</section>
					</Container>
				</main>
			</>
		)
	} catch {
		return notFound()
	}
}
