'use client'
import { FilledContentRelationshipField } from '@prismicio/client'
import { Content, LinkResolverFunction, PrismicDocument } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'
import {
  CollapsibleContent,
  CollapsibleTrigger,
  Root as CollapsibleRoot
} from '@radix-ui/react-collapsible'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger
} from '@radix-ui/react-navigation-menu'
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react'

export type MenuItemProps = SliceComponentProps<Content.MenuItemSlice>

const linkResolver: LinkResolverFunction = (doc: FilledContentRelationshipField) => {
  return doc?.url?.replaceAll?.('--', '/') ?? '/'
}

export default function MenuItem({ slice }: MenuItemProps) {
  const isDefaultVariation = slice.variation === 'default'
  const isSubmenuVariation = slice.variation === 'submenu'

  return (
    <>
      {/* Menu Desktop */}
      <NavigationMenuItem className="text-secondary font-semibold uppercase hidden xl:block">
        {isSubmenuVariation && (
          <>
            <NavigationMenuTrigger className="group flex items-center justify-center gap-2 h-16 pl-4 pr-2 transition-colors hover:text-primary uppercase">
              <span>{slice.primary.label}</span>
              <IconChevronDown className="w-4 h-4 group-data-[state=open]:rotate-180 duration-200 transition-transform" />
            </NavigationMenuTrigger>

            <NavigationMenuContent className="bg-white min-w-60 overflow-hidden shadow-md absolute top-20">
              <ul className="flex flex-col gap-2">
                {slice.items.map((item) => (
                  <li key={item.label}>
                    <NavigationMenuLink asChild>
                      <PrismicNextLink
                        field={item.link}
                        linkResolver={linkResolver}
                        prefetch={false}
                        className="py-3 px-6 block hover:text-primary transition-colors"
                      >
                        {item.label}
                      </PrismicNextLink>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </>
        )}

        {isDefaultVariation && (
          <>
            <NavigationMenuLink asChild>
              <PrismicNextLink
                field={slice.primary.item_link}
                prefetch={false}
                linkResolver={linkResolver}
                className="flex items-center justify-center h-16 px-4 transition-colors hover:text-primary"
              >
                {slice.primary.item_label}
              </PrismicNextLink>
            </NavigationMenuLink>
          </>
        )}
      </NavigationMenuItem>

      {/* Menu Mobile */}
      {isSubmenuVariation && (
        <NavigationMenuItem className="text-white font-medium text-lg uppercase xl:hidden">
          <CollapsibleRoot>
            <CollapsibleTrigger className="group flex items-center justify-between gap-2 w-full p-4 uppercase">
              <span>{slice.primary.label}</span>
              <IconChevronDown className="group-data-[state=open]:rotate-180 transition-transform duration-200" />
            </CollapsibleTrigger>

            <CollapsibleContent>
              <ul>
                {slice.items.map((item) => (
                  <li key={item.label}>
                    <NavigationMenuLink asChild>
                      <PrismicNextLink
                        field={item.link}
                        prefetch={false}
                        linkResolver={linkResolver}
                        className="p-4 flex items-center justify-between bg-black/20"
                      >
                        <span>{item.label}</span>
                        <IconChevronRight />
                      </PrismicNextLink>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </CollapsibleRoot>
        </NavigationMenuItem>
      )}

      {isDefaultVariation && (
        <NavigationMenuItem className="text-white font-medium text-lg uppercase xl:hidden">
          <NavigationMenuLink asChild>
            <PrismicNextLink
              field={slice.primary.item_link}
              prefetch={false}
              linkResolver={linkResolver}
              className="p-4 block"
            >
              {slice.primary.item_label}
            </PrismicNextLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      )}
    </>
  )
}
