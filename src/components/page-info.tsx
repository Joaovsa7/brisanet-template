interface IPageInfoProps {
  updatedAt: string
}

export function PageInfo({ updatedAt }: IPageInfoProps){
  const formattedUpdatedAt = new Date(updatedAt).toLocaleDateString('pt-BR', {
    dateStyle: 'long'
  })

  return (
    <time dateTime={updatedAt} className="sr-only">
      Atualizado em {formattedUpdatedAt}
    </time>
  )
}
