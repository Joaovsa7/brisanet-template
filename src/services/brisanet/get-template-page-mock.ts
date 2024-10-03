import { env } from "~/config/env";

export const getTemplatePageMock = ({ state = '', slug, id, name }: { state?: string, slug?: string, id?: number, name?: string }) => {
	const stateName = state?.charAt(0)?.toUpperCase?.() + state?.slice?.(1);
	const phoneNumber = "0800 281 3017";
	const whatsappNumber = '+55 84 98111-8525';

	switch (env.PRISMIC_REPOSITORY_NAME) {
		case 'telefone-da-brisanet':
			return {
				"id": "${id}",
				"uid": `cobertura--${state}--${slug}`,
				"url": `/cobertura/${state}/${slug}`,
				"type": "cobertura",
				"href": `https://whitelabel-brisanet.cdn.prismic.io/api/v2/documents/search?ref=ZvcoNxAAACEA4OR-&q=[[d = at(document.id, "${id}")]]`,
				"tags": [],
				"first_publication_date": "2024-04-01T10:00:00+0000",
				"last_publication_date": "2024-04-01T10:00:00+0000",
				"slugs": [`cobertura-${state}-${slug}`],
				"linked_documents": [],
				"lang": "pt-br",
				"alternate_languages": [],
				"data": {
					"slices": [
						{
							"variation": "default",
							"version": "initial",
							"items": [],
							"primary": {
								"title": [
									{
										"type": "heading1",
										"text": `Brisanet ${name}`,
										"spans": [],
										"direction": "ltr"
									}
								]
							},
							"id": "slice1",
							"slice_type": "banner",
							"slice_label": null
						},
						{
							variation: "default",
							version: "initial",
							items: [],
							primary: {
								title: [
									{
										type: "heading2",
										text: `Planos da Brisanet em ${name}`,
										spans: [],
										direction: "ltr"
									}
								],
								cityid: `${id}`
							},
							id: "products_carousel$851923fe-5ge5-55b8-9g5d-99895a4be7d1",
							slice_type: "products_carousel",
							slice_label: null
						},
						{
							variation: "default",
							version: "initial",
							items: [],
							primary: {
								content: [
									{
										type: "paragraph",
										text: `A Brisanet oferece diversos números de contato em ${name}, ${state}, facilitando o acesso aos nossos serviços e suporte. Seja para assistência técnica, dúvidas sobre planos ou novas contratações, temos a linha certa para você.`,
										spans: [],
										direction: "ltr"
									},
									{
										type: "heading3",
										text: `Números de Contato da Brisanet ${name}`,
										spans: [
											{
												start: 0,
												end: 35,
												type: "strong"
											}
										],
										direction: "ltr"
									},
									{
										type: "paragraph",
										text: `Conheça os principais números de contato da Brisanet ${name} para facilitar a sua comunicação conosco:`,
										spans: [],
										direction: "ltr"
									},
									{
										type: "o-list-item",
										text: "Suporte Técnico: 0800 281 3017",
										spans: [
											{
												start: 20,
												end: 32,
												type: "hyperlink",
												data: {
													link_type: "Web",
													url: "tel:08002813017",
													target: "_self"
												}
											}
										],
										direction: "ltr"
									},
									{
										type: "o-list-item",
										text: "Atendimento Comercial: 0800 281 3020",
										spans: [
											{
												start: 25,
												end: 37,
												type: "hyperlink",
												data: {
													link_type: "Web",
													url: "tel:08002813020",
													target: "_self"
												}
											}
										],
										direction: "ltr"
									},
									{
										type: "o-list-item",
										text: "WhatsApp: 84 98111-8525",
										spans: [
											{
												start: 11,
												end: 27,
												type: "hyperlink",
												data: {
													link_type: "Web",
													url: "https://wa.me/84891118525",
													target: "_blank"
												}
											}
										],
										direction: "ltr"
									},
									{
										type: "heading2",
										text: "Vantagens de Utilizar os Números da Brisanet em ${name}",
										spans: [
											{
												start: 0,
												end: 62,
												type: "strong"
											}
										],
										direction: "ltr"
									},
									{
										type: "paragraph",
										text: `Ao utilizar os números de contato da Brisanet em ${name}, você garante atendimento rápido e eficiente, com profissionais capacitados para resolver qualquer questão. Nossos canais de comunicação estão disponíveis para atender às suas necessidades de forma ágil e personalizada.`,
										spans: [],
										direction: "ltr"
									}
								],
								banner: {
									id: "ZdOLlRAAAO8DwhO_2",
									type: "sidebar_banner",
									tags: [],
									lang: "pt-br",
									slug: "-",
									first_publication_date: "2024-02-19T17:11:00+0000",
									last_publication_date: "2024-02-19T17:11:00+0000",
									uid: "600-mega-netflix",
									data: {
										banner: {
											dimensions: {
												width: 1080,
												height: 1920
											},
											alt: "Anúncio de Contato Brisanet 500 Mega + Netflix por 104,90 reais",
											copyright: null,
											url: "https://images.prismic.io/numero-da-brisanet/75e39c657ef930e32098f329_banner-netflix-500mb.jpg?auto=format,compress",
											id: "ZdOLVG34KdIZl_Mp2",
											edit: {
												x: 0,
												y: 0,
												zoom: 1,
												background: "transparent"
											}
										},
										link: {
											link_type: "Web",
											url: "https://assine.numero-da-brisanet.com.br/assine/?resellerId=10563",
											target: "_blank"
										}
									},
									link_type: "Document",
									isBroken: false
								}
							},
							id: "content_block$482ded40-5f5e-5a1a-cd77-db8dd93879cc",
							slice_type: "content_block",
							slice_label: null
						},
						{
							"variation": "default",
							"version": "initial",
							"items": [],
							"primary": {
								"content": [
									{
										"type": "paragraph",
										"text": `A **Brisanet ${stateName}** orgulha-se de oferecer uma cobertura ampla e confiável na cidade de **${name}**, garantindo que os moradores tenham acesso aos melhores serviços de internet e telefonia do mercado. Com uma infraestrutura de fibra óptica de última geração, a Brisanet assegura uma conexão estável e velocidades impressionantes, perfeitas para atender às diversas necessidades digitais da comunidade local.`,
										"spans": [],
										"direction": "ltr"
									},
									{
										"type": "paragraph",
										"text": `Além da excelência em conectividade, a **Brisanet ${stateName}** oferece um atendimento ao cliente de alta qualidade através do **telefone da Brisanet ${stateName}** ${phoneNumber} e do WhatsApp ${whatsappNumber}. Nossa equipe de suporte está sempre pronta para resolver dúvidas, solucionar problemas técnicos e auxiliar na escolha do plano ideal para cada cliente.`,
										"spans": [],
										"direction": "ltr"
									},
									{
										"type": "paragraph",
										"text": `A variedade de **planos Brisanet ${stateName}** disponíveis em ${name} é outro diferencial que nos destaca no mercado. Desde planos básicos para navegação e e-mails até pacotes avançados para usuários que demandam alta velocidade para download e upload, ideais para streaming em 4K, jogos online sem lag e conferências de vídeo sem interrupções.`,
										"spans": [],
										"direction": "ltr"
									},
									{
										"type": "paragraph",
										"text": `**Contratar Brisanet ${stateName}** é um processo simples e rápido. Você pode realizar a contratação diretamente pelo nosso site oficial, ligando para o **número da Brisanet ${stateName}** ${phoneNumber}, ou enviando uma mensagem via WhatsApp para ${whatsappNumber}. Nossa equipe está preparada para guiá-lo durante todo o processo, desde a escolha do plano ideal até a instalação rápida e sem complicações.`,
										"spans": [],
										"direction": "ltr"
									},
									{
										"type": "paragraph",
										"text": `A **Brisanet ${stateName}** possui cobertura em várias cidades, garantindo que você tenha acesso aos melhores serviços de internet, independentemente de onde esteja. Nossa rede de fibra óptica está em constante expansão, permitindo que cada vez mais moradores e empresas se beneficiem de uma conexão de alta qualidade.`,
										"spans": [],
										"direction": "ltr"
									},
									{
										"type": "paragraph",
										"text": `Optar pela **Brisanet ${stateName}** significa escolher qualidade, confiança e inovação. Com tecnologia de ponta em fibra óptica, a Brisanet garante uma conexão estável e rápida, perfeita para atender às demandas crescentes de conectividade no mundo moderno.`,
										"spans": [],
										"direction": "ltr"
									},
									{
										"type": "paragraph",
										"text": `Além disso, oferecemos suporte técnico 24/7, instalação rápida e sem custo adicional, e a possibilidade de adicionar serviços complementares como TV a cabo e telefonia fixa, garantindo uma experiência completa e satisfatória para todos os clientes da **Brisanet ${stateName}** em **${name}**.`,
										"spans": [],
										"direction": "ltr"
									},
									{
										"type": "paragraph",
										"text": `A **Brisanet ${stateName}** está comprometida em proporcionar uma experiência digital excepcional para os moradores de ${name}. Nosso foco é oferecer serviços que não apenas atendam, mas superem as expectativas dos nossos clientes. Com uma equipe dedicada e uma infraestrutura robusta, estamos sempre prontos para inovar e melhorar nossos serviços, garantindo que você tenha acesso às melhores soluções de conectividade disponíveis no mercado.`,
										"spans": [],
										"direction": "ltr"
									}
								],
								"banner": {
									"id": "banner1",
									"type": "sidebar_banner",
									"tags": [],
									"lang": "pt-br",
									"slug": "-",
									"first_publication_date": "2024-04-01T10:00:00+0000",
									"last_publication_date": "2024-04-01T10:00:00+0000",
									"uid": "banner-brisanet-barro",
									"data": {
									}
								}
							},
							"id": "content_block1",
							"slice_type": "content_block",
							"slice_label": null
						},
						{
							"variation": "default",
							"version": "initial",
							"items": [
								{
									"question": `Qual o telefone da Brisanet em ${name}?`,
									"anwser": [
										{
											"type": "paragraph",
											"text": `O telefone Brisanet em ${name} é ${phoneNumber} e o WhatsApp ${whatsappNumber}. Nossa equipe está pronta para atender suas necessidades e esclarecer todas as suas dúvidas.`,
											"spans": [
												{
													"start": 35,
													"end": 35 + phoneNumber.length,
													"type": "hyperlink",
													"data": {
														"link_type": "Web",
														"url": `tel:${phoneNumber.replace(/\D/g, '')}`,
														"target": "_self"
													}
												},
												{
													"start": 56,
													"end": 56 + whatsappNumber.length,
													"type": "hyperlink",
													"data": {
														"link_type": "Web",
														"url": `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`,
														"target": "_blank"
													}
												}
											],
											"direction": "ltr"
										}
									]
								},
								{
									"question": `Tem suporte telefônico em ${name}?`,
									"anwser": [
										{
											"type": "paragraph",
											"text": `Sim, a Brisanet oferece suporte telefônico dedicado em ${name}, garantindo que você receba assistência rápida e eficiente para qualquer questão relacionada aos nossos serviços de telefonia.`,
											"spans": [],
											"direction": "ltr"
										}
									]
								},
								{
									"question": `Como funciona o atendimento telefônico da Brisanet em ${name}?`,
									"anwser": [
										{
											"type": "paragraph",
											"text": `O atendimento telefônico da Brisanet em ${name} é realizado por uma equipe especializada, pronta para ajudar com instalação, manutenção, planos e qualquer outro serviço que você necessite. Basta ligar para ${phoneNumber} e falar com um de nossos atendentes.`,
											"spans": [
												{
													"start": 68,
													"end": 68 + phoneNumber.length,
													"type": "hyperlink",
													"data": {
														"link_type": "Web",
														"url": `tel:${phoneNumber.replace(/\D/g, '')}`,
														"target": "_self"
													}
												}
											],
											"direction": "ltr"
										}
									]
								}
							],
							"primary": {
								"title": [
									{
										"type": "paragraph",
										"text": "Perguntas Frequentes",
										"spans": [],
										"direction": "ltr"
									}
								]
							},
							"id": "faq1",
							"slice_type": "faq",
							"slice_label": null
						}
					],
					"meta_image": {},
					"meta_title": `Cobertura Brisanet ${name} ${stateName} | Internet e Telefonia`,
					"meta_description": `A Brisanet oferece cobertura em ${name}, ${stateName} com planos de internet de alta velocidade, suporte dedicado e atendimento personalizado. Contrate agora e aproveite os melhores serviços de telefonia e internet.`,
					"robots_index": true,
					"robots_follow": true,
					"google_structured_data": null
				}
			}

		case 'numero-da-brisanet':
			return {
				id: "ZdaurBEAAHoUKvq2",
				uid: `cobertura--${state}--${slug}`,
				url: `/cobertura/${state}/${slug}`,
				type: "page",
				href: `https://numero-da-brisanet.cdn.prismic.io/api/v2/documents/search?ref=ZvcoNxAAACEA4OR-&q=[[d = at(document.id, "${id}")]]`,
				tags: [],
				first_publication_date: "2024-02-22T02:17:20+0000",
				last_publication_date: "2024-09-27T11:29:13+0000",
				slugs: [],
				linked_documents: [],
				lang: "pt-br",
				alternate_languages: [],
				data: {
					slices: [
						{
							"variation": "default",
							"version": "initial",
							"items": [],
							"primary": {
								"title": [
									{
										"type": "heading1",
										"text": `Brisanet ${name}`,
										"spans": [],
										"direction": "ltr"
									}
								]
							},
							"id": "slice1",
							"slice_type": "banner",
							"slice_label": null
						},
						{
							variation: "default",
							version: "initial",
							items: [],
							primary: {
								title: [
									{
										type: "heading2",
										text: `Número da Brisanet em ${name}`,
										spans: [],
										direction: "ltr"
									}
								],
								cityid: `${id}`
							},
							id: "products_carousel$851923fe-5ge5-55b8-9g5d-99895a4be7d1",
							slice_type: "products_carousel",
							slice_label: null
						},
						{
							variation: "default",
							version: "initial",
							items: [],
							primary: {
								content: [
									{
										type: "paragraph",
										text: `A Brisanet oferece diversos números de contato em ${name}, ${state}, facilitando o acesso aos nossos serviços e suporte. Seja para assistência técnica, dúvidas sobre planos ou novas contratações, temos a linha certa para você.`,
										spans: [],
										direction: "ltr"
									},
									{
										type: "heading3",
										text: "Números de Contato da Brisanet em ${name}",
										spans: [
											{
												start: 0,
												end: 35,
												type: "strong"
											}
										],
										direction: "ltr"
									},
									{
										type: "paragraph",
										text: `Conheça os principais números de contato da Brisanet em ${name} para facilitar a sua comunicação conosco:`,
										spans: [],
										direction: "ltr"
									},
									{
										type: "o-list-item",
										text: "Suporte Técnico: 0800 281 3017",
										spans: [
											{
												start: 20,
												end: 32,
												type: "hyperlink",
												data: {
													link_type: "Web",
													url: "tel:08002813017",
													target: "_self"
												}
											}
										],
										direction: "ltr"
									},
									{
										type: "o-list-item",
										text: "Atendimento Comercial: 0800 281 3020",
										spans: [
											{
												start: 25,
												end: 37,
												type: "hyperlink",
												data: {
													link_type: "Web",
													url: "tel:08002813020",
													target: "_self"
												}
											}
										],
										direction: "ltr"
									},
									{
										type: "o-list-item",
										text: "WhatsApp: 84 98111-8525",
										spans: [
											{
												start: 11,
												end: 27,
												type: "hyperlink",
												data: {
													link_type: "Web",
													url: "https://wa.me/84891118525",
													target: "_blank"
												}
											}
										],
										direction: "ltr"
									},
									{
										type: "heading2",
										text: "Vantagens de Utilizar os Números da Brisanet em ${name}",
										spans: [
											{
												start: 0,
												end: 62,
												type: "strong"
											}
										],
										direction: "ltr"
									},
									{
										type: "paragraph",
										text: `Ao utilizar os números de contato da Brisanet em ${name}, você garante atendimento rápido e eficiente, com profissionais capacitados para resolver qualquer questão. Nossos canais de comunicação estão disponíveis para atender às suas necessidades de forma ágil e personalizada.`,
										spans: [],
										direction: "ltr"
									}
								],
								banner: {
									id: "ZdOLlRAAAO8DwhO_2",
									type: "sidebar_banner",
									tags: [],
									lang: "pt-br",
									slug: "-",
									first_publication_date: "2024-02-19T17:11:00+0000",
									last_publication_date: "2024-02-19T17:11:00+0000",
									uid: "600-mega-netflix",
									data: {
										banner: {
											dimensions: {
												width: 1080,
												height: 1920
											},
											alt: "Anúncio de Contato Brisanet 500 Mega + Netflix por 104,90 reais",
											copyright: null,
											url: "https://images.prismic.io/numero-da-brisanet/75e39c657ef930e32098f329_banner-netflix-500mb.jpg?auto=format,compress",
											id: "ZdOLVG34KdIZl_Mp2",
											edit: {
												x: 0,
												y: 0,
												zoom: 1,
												background: "transparent"
											}
										},
										link: {
											link_type: "Web",
											url: "https://assine.numero-da-brisanet.com.br/assine/?resellerId=10563",
											target: "_blank"
										}
									},
									link_type: "Document",
									isBroken: false
								}
							},
							id: "content_block$482ded40-5f5e-5a1a-cd77-db8dd93879cc",
							slice_type: "content_block",
							slice_label: null
						},
						{
							variation: "default",
							version: "initial",
							items: [
								{
									question: `Qual o número de suporte técnico da Brisanet em ${name}?`,
									anwser: [
										{
											type: "paragraph",
											text: `O número de suporte técnico da Brisanet em ${name} é 0800 281 3017. Ligue para resolver qualquer problema relacionado aos nossos serviços de telefonia e internet.`,
											spans: [
												{
													start: 49,
													end: 62,
													type: "hyperlink",
													data: {
														link_type: "Web",
														url: "tel:08002813017",
														target: "_self"
													}
												}
											],
											direction: "ltr"
										}
									]
								},
								{
									question: `Como contratar um plano através do número da Brisanet em ${name}?`,
									anwser: [
										{
											type: "paragraph",
											text: `Para contratar um plano através do número da Brisanet em ${name}, basta ligar para 0800 281 3020 e falar com um de nossos atendentes. Eles irão auxiliá-lo na escolha do melhor plano para suas necessidades.`,
											spans: [
												{
													start: 49,
													end: 62,
													type: "hyperlink",
													data: {
														link_type: "Web",
														url: "tel:08002813020",
														target: "_self"
													}
												}
											],
											direction: "ltr"
										}
									]
								},
								{
									question: `A Brisanet em ${name} possui WhatsApp?`,
									anwser: [
										{
											type: "paragraph",
											text: `Sim, a Brisanet em ${name} possui WhatsApp. Você pode entrar em contato pelo número 84 98111-8525 para assistência rápida e eficiente.`,
											spans: [
												{
													start: 33,
													end: 48,
													type: "hyperlink",
													data: {
														link_type: "Web",
														url: "https://wa.me/84891118525",
														target: "_blank"
													}
												}
											],
											direction: "ltr"
										}
									]
								}
							],
							primary: {
								title: [
									{
										type: "paragraph",
										text: "Perguntas Frequentes",
										spans: [],
										direction: "ltr"
									}
								]
							},
							id: "faq$1e1cd385-5979-4d9b-aa31-c642f40603c1",
							slice_type: "faq",
							slice_label: null
						}
					],
					meta_image: {},
					meta_title: `Número da Brisanet ${name} | Contato | WhatsApp`,
					meta_description: `Acesse os números de contato da Brisanet em ${name}, ${state}. Fale conosco via telefone ou WhatsApp para suporte e contratação de planos de internet e telefonia.`,
					robots_index: true,
					robots_follow: true,
					google_structured_data: null
				}
			};

		case 'planobrisanet':
			return {
				id: "ZdaurBEAAHoUKvq3",
				uid: `cobertura--${state}--${slug}`,
				url: `/cobertura/${state}/${slug}`,
				type: "page",
				href: `https://planobrisanet.cdn.prismic.io/api/v2/documents/search?ref=ZvcoNxAAACEA4OR-&q=[[d = at(document.id, "${id}")]]`,
				tags: [],
				first_publication_date: "2024-02-22T02:17:20+0000",
				last_publication_date: "2024-09-27T11:29:13+0000",
				slugs: [],
				linked_documents: [],
				lang: "pt-br",
				alternate_languages: [],
				data: {
					slices: [
						{
							"variation": "default",
							"version": "initial",
							"items": [],
							"primary": {
								"title": [
									{
										"type": "heading1",
										"text": `Brisanet ${name}`,
										"spans": [],
										"direction": "ltr"
									}
								]
							},
							"id": "slice1",
							"slice_type": "banner",
							"slice_label": null
						},
						{
							variation: "default",
							version: "initial",
							items: [],
							primary: {
								title: [
									{
										type: "heading2",
										text: `Plano Brisanet em ${name}`,
										spans: [],
										direction: "ltr"
									}
								],
								cityid: `${id}`
							},
							id: "products_carousel$951923fe-6gf6-66c9-0h6e-10906b5cf8e2",
							slice_type: "products_carousel",
							slice_label: null
						},
						{
							variation: "default",
							version: "initial",
							items: [],
							primary: {
								content: [
									{
										type: "paragraph",
										text: `A Brisanet oferece uma ampla variedade de planos de internet em ${name}, ${state}, projetados para atender às diferentes necessidades dos nossos clientes. Seja para uso residencial ou empresarial, nossos planos garantem alta velocidade, estabilidade e atendimento personalizado.`,
										spans: [],
										direction: "ltr"
									},
									{
										type: "heading3",
										text: "Tipos de Planos Disponíveis",
										spans: [
											{
												start: 0,
												end: 26,
												type: "strong"
											}
										],
										direction: "ltr"
									},
									{
										type: "paragraph",
										text: `Conheça os diferentes tipos de planos que a Brisanet oferece em ${name}:`,
										spans: [],
										direction: "ltr"
									},
									{
										type: "o-list-item",
										text: "Plano Básico: Ideal para navegação e e-mails com velocidade de 100 Mbps.",
										spans: [],
										direction: "ltr"
									},
									{
										type: "o-list-item",
										text: "Plano Avançado: Perfeito para streaming em HD e jogos online com velocidade de 300 Mbps.",
										spans: [],
										direction: "ltr"
									},
									{
										type: "o-list-item",
										text: "Plano Premium: Suporte total para streaming em 4K, múltiplos dispositivos e videoconferências com velocidade de 500 Mbps.",
										spans: [],
										direction: "ltr"
									},
									{
										type: "heading2",
										text: "Vantagens dos Planos Brisanet em ${name}",
										spans: [
											{
												start: 0,
												end: 40,
												type: "strong"
											}
										],
										direction: "ltr"
									},
									{
										type: "paragraph",
										text: `Optar por um plano Brisanet em ${name} traz diversas vantagens, incluindo:`,
										spans: [],
										direction: "ltr"
									},
									{
										type: "o-list-item",
										text: "Instalação rápida e sem custo adicional.",
										spans: [],
										direction: "ltr"
									},
									{
										type: "o-list-item",
										text: "Suporte técnico 24/7 para garantir a melhor experiência.",
										spans: [],
										direction: "ltr"
									},
									{
										type: "o-list-item",
										text: "Possibilidade de personalizar seu plano com serviços adicionais.",
										spans: [],
										direction: "ltr"
									},
									{
										type: "paragraph",
										text: `Além disso, nossos planos são flexíveis e adaptáveis, permitindo que você ajuste sua assinatura conforme suas necessidades evoluem.`,
										spans: [],
										direction: "ltr"
									}
								],
								banner: {
									id: "ZdOLlRAAAO8DwhO_3",
									type: "sidebar_banner",
									tags: [],
									lang: "pt-br",
									slug: "-",
									first_publication_date: "2024-02-19T17:11:00+0000",
									last_publication_date: "2024-02-19T17:11:00+0000",
									uid: "700-mega-netflix",
									data: {
										banner: {
											dimensions: {
												width: 1080,
												height: 1920
											},
											alt: "Anúncio de Plano Brisanet 500 Mega + Netflix por 104,90 reais",
											copyright: null,
											url: "https://images.prismic.io/planobrisanet/85f40d658fg941f43009g329_banner-netflix-500mb.jpg?auto=format,compress",
											id: "ZdOLVG34KdIZl_Mp3",
											edit: {
												x: 0,
												y: 0,
												zoom: 1,
												background: "transparent"
											}
										},
										link: {
											link_type: "Web",
											url: "https://assine.planobrisanet.com.br/assine/?resellerId=10563",
											target: "_blank"
										}
									},
									link_type: "Document",
									isBroken: false
								}
							},
							id: "content_block$592ded40-6f6e-6b2b-dd88-db9ee93980dd",
							slice_type: "content_block",
							slice_label: null
						},
						{
							variation: "default",
							version: "initial",
							items: [
								{
									question: `Quais são os planos disponíveis da Brisanet em ${name}?`,
									anwser: [
										{
											type: "paragraph",
											text: `A Brisanet oferece uma variedade de planos de internet em ${name}, ${state}, incluindo o Plano Básico de 100 Mbps, Plano Avançado de 300 Mbps e Plano Premium de 500 Mbps. Cada plano é projetado para atender diferentes necessidades, desde navegação básica até streaming em alta definição e jogos online sem lag.`,
											spans: [],
											direction: "ltr"
										}
									]
								},
								{
									question: `Como contratar um plano da Brisanet em ${name}?`,
									anwser: [
										{
											type: "paragraph",
											text: `Contratar um plano da Brisanet em ${name} é simples. Basta acessar nosso site, selecionar a opção 'Assinar Agora', preencher seus dados e escolher o plano que melhor se adequa às suas necessidades. Também oferecemos atendimento presencial para facilitar o processo.`,
											spans: [
												{
													start: 35,
													end: 50,
													type: "hyperlink",
													data: {
														link_type: "Web",
														url: "https://planobrisanet.com.br/assinar",
														target: "_self"
													}
												}
											],
											direction: "ltr"
										}
									]
								},
								{
									question: `Qual a velocidade ideal para meu plano em ${name}?`,
									anwser: [
										{
											type: "paragraph",
											text: `A velocidade ideal depende do uso que você fará da internet. Se você utiliza para navegar e assistir vídeos em HD, o Plano Básico de 100 Mbps é suficiente. Para streaming em 4K, jogos online e múltiplos dispositivos simultaneamente, recomendamos o Plano Premium de 500 Mbps.`,
											spans: [],
											direction: "ltr"
										}
									]
								}
							],
							primary: {
								title: [
									{
										type: "paragraph",
										text: "Perguntas Frequentes",
										spans: [],
										direction: "ltr"
									}
								]
							},
							id: "faq$2f2cd385-6989-5e8c-bb32-dc9ff45091ee",
							slice_type: "faq",
							slice_label: null
						}
					],
					meta_image: {},
					meta_title: `Plano Brisanet ${name} | Internet | Alta Velocidade`,
					meta_description: `Conheça os planos de internet da Brisanet em ${name}, ${state}. Escolha entre planos de 100 Mbps, 300 Mbps ou 500 Mbps e aproveite uma conexão estável e rápida. Assine agora!`,
					robots_index: true,
					robots_follow: true,
					google_structured_data: null
				}
			};
	}
}
