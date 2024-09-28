import { brisanetService } from ".";
import { getTemplatePage } from "./get-template-page-mock";

export async function fetchTemplateDocument(slugs: string[]) {
    const isCoberturaPath = slugs[0] === 'cobertura';

    if (!isCoberturaPath) return null;

    const cityNameSlug = slugs[2];
    if (!cityNameSlug) {
        console.warn('Slug da cidade não encontrado.');
        return null;
    }

    try {
        const coveredCities = await brisanetService.getCoveredCities();
        const templatePage = coveredCities.find(city => city.slug === cityNameSlug);

        if (!templatePage?.id) {
            console.warn(`Página template não encontrada para a cidade "${cityNameSlug}".`);
            return null;
        }

        return await getTemplatePage(templatePage);
    } catch (error) {
        console.error(`Erro ao buscar página template para a cidade "${cityNameSlug}":`, error);
        return null;
    }
}