import { Metadata } from 'next'

import { About } from '~/templates/About'

export const metadata: Metadata = {
	title: 'Portal das Operadoras | Quem somos',
	description:
		'Descubra conosco um mundo de possibilidades e economia! No Portal das Operadoras, nós te guiamos na jornada para encontrar os planos de saúde e telecomunicação mais vantajosos do mercado. Com nossa ajuda, escolher um plano que se encaixa perfeitamente em seu orçamento e necessidades é mais fácil do que nunca.',
	robots: 'index, follow',
	alternates: {
		canonical: 'https://portaldasoperadoras.com.br/sobre'
	}
}

export default function AboutPage() {
	return <About />
}
