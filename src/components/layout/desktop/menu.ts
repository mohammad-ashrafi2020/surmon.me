import { VALUABLE_LINKS } from '/@/config/app.config'
import { LanguageKey } from '/@/language'
import { RouteName, CategorySlug } from '/@/app/router'
import { getPageRoute, getCategoryFlowRoute } from '/@/transforms/route'
import { getTargetCDNURL } from '/@/transforms/url'

export interface MenuItem {
  id: string
  route?: string
  url?: string
  i18nKey: LanguageKey
  icon?: string
  imageIcon?: string
  divider?: boolean
  newWindow?: boolean
  hot?: boolean
}

export const menus: Array<MenuItem> = [
  {
    id: RouteName.Home,
    route: '/',
    icon: 'icon-home-fill',
    i18nKey: LanguageKey.PAGE_HOME
  },
  {
    id: CategorySlug.Code,
    route: getCategoryFlowRoute(CategorySlug.Code),
    icon: 'icon-code',
    i18nKey: LanguageKey.CATEGORY_CODE
  },
  {
    id: CategorySlug.Insight,
    route: getCategoryFlowRoute(CategorySlug.Insight),
    icon: 'icon-insight',
    i18nKey: LanguageKey.CATEGORY_INSIGHT
  },
  {
    id: 'github',
    url: VALUABLE_LINKS.GITHUB,
    icon: 'icon-github',
    i18nKey: LanguageKey.PAGE_GITHUB,
    newWindow: true
  },
  {
    id: RouteName.Lens,
    route: getPageRoute(RouteName.Lens),
    icon: 'icon-lens',
    i18nKey: LanguageKey.PAGE_LENS
  },
  {
    id: RouteName.About,
    route: getPageRoute(RouteName.About),
    icon: 'icon-swordsman',
    i18nKey: LanguageKey.PAGE_ABOUT
  },
  /*
  {
    id: RouteName.Job,
    route: getPageRoute(RouteName.Job),
    icon: 'icon-horse',
    i18nKey: LanguageKey.PAGE_JOB
  },
  {
    id: RouteName.Freelancer,
    route: getPageRoute(RouteName.Freelancer),
    icon: 'icon-coin-s',
    i18nKey: LanguageKey.PAGE_FREELANCER
  },
  */
  {
    id: RouteName.Guestbook,
    route: getPageRoute(RouteName.Guestbook),
    i18nKey: LanguageKey.PAGE_GUESTBOOK,
    icon: 'icon-comment'
  },
  {
    id: RouteName.App,
    route: getPageRoute(RouteName.App),
    imageIcon: getTargetCDNURL('/images/page-app/logo.png'),
    i18nKey: LanguageKey.PAGE_APP,
    divider: true
  },
  /*
  {
    id: 'opensea',
    url: VALUABLE_LINKS.OPENSEA,
    imageIcon: getTargetCDNURL('/images/third-party/opensea.svg'),
    i18nKey: LanguageKey.PAGE_OPENSEA,
    divider: true,
    newWindow: true
  },
  */
  {
    id: RouteName.Merch,
    route: getPageRoute(RouteName.Merch),
    i18nKey: LanguageKey.PAGE_MERCH,
    icon: 'icon-rubik',
    divider: true,
    hot: true
  }
]
