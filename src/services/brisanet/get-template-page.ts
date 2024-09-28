import { getTemplatePageMock } from "./get-template-page-mock"

export const getTemplatePage = async ({ id, slug, state, name }: { id: number, slug: string, state: string, name: string }) => {
    return getTemplatePageMock({ id, slug, state, name })
}
