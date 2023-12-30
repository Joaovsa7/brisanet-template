import { Metadata } from 'next'
import { Container } from '~/components/container'
import { Text } from '~/components/text'

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
	return (
		<Container size="lg" className="grid gap-10 py-4 sm:py-6 md:py-12">
			<Text className="max-w-full">
				<h1>Bem-vindo ao Portal das Operadoras</h1>
				<p>
					Descubra conosco um mundo de possibilidades e economia! No Portal das
					Operadoras, nós te guiamos na jornada para encontrar os planos de
					saúde e telecomunicação mais vantajosos do mercado. Com nossa ajuda,
					escolher um plano que se encaixa perfeitamente em seu orçamento e
					necessidades é mais fácil do que nunca.
				</p>

				<h2>Nossa Missão</h2>
				<p>
					Facilitar a sua vida é o nosso objetivo. Queremos que você economize
					tempo e dinheiro sem a dor de cabeça de buscar e comparar inúmeras
					opções por conta própria. No Portal das Operadoras, reunimos as
					informações mais importantes para ajudá-lo a tomar decisões
					inteligentes e bem-informadas.
				</p>

				<h2>Nossa Visão</h2>
				<p>
					Sonhamos alto! Queremos ser mais do que um site: nosso desejo é ser
					seu parceiro confiável na busca por serviços essenciais. Nosso
					compromisso é estar sempre um passo à frente, oferecendo soluções
					inovadoras que atendam às suas necessidades de hoje e do futuro.
				</p>

				<h2>Nossos Valores</h2>
				<ul>
					<li>
						<strong>Autenticidade:</strong> Aqui, você encontra transparência
						total. Nossas informações são claras e diretas.
					</li>
					<li>
						<strong>Foco no Cliente:</strong> Você é a razão de nossa
						existência. Tudo que fazemos é pensando em sua satisfação.
					</li>
					<li>
						<strong>Inovação Constante:</strong> Estamos sempre em busca de
						novas formas de aprimorar nossos serviços.
					</li>
					<li>
						<strong>Qualidade Garantida:</strong> Comprometemo-nos em oferecer
						somente o que há de melhor no mercado.
					</li>
				</ul>

				<h2>Como Trabalhamos</h2>
				<p>
					Navegar pelo nosso portal é um passeio tranquilo. Comparamos
					detalhadamente uma vasta gama de planos de saúde e telecomunicação
					para você. Preços, coberturas, avaliações e muito mais: tudo ao seu
					alcance e sempre atualizado.
				</p>

				<h2>Por que escolher o Portal das Operadoras?</h2>
				<ul>
					<li>
						<strong>Simplicidade e Eficiência:</strong> Encontrar o que você
						precisa é rápido e fácil.
					</li>
					<li>
						<strong>Variedade de Opções:</strong> Diversas escolhas para todos
						os gostos e bolsos.
					</li>
					<li>
						<strong>Atendimento Excepcional:</strong> Estamos aqui para
						responder suas dúvidas e oferecer apoio sempre que precisar.
					</li>
					<li>
						<strong>Informação Atualizada:</strong> Fique por dentro das últimas
						novidades e oportunidades do mercado.
					</li>
				</ul>

				<h2>Venha Conosco!</h2>
				<p>
					Faça parte da nossa comunidade. Aqui no Portal das Operadoras, estamos
					sempre prontos para ajudá-lo a encontrar o melhor plano, economizando
					seu tempo e seu dinheiro. Explore conosco um mundo de possibilidades!
				</p>
			</Text>
		</Container>
	)
}
