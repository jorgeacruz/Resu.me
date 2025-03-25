/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/styles`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(stack)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(stack)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(stack)'}/lostPass` | `/lostPass`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home/perfil` | `/home/perfil`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home/qrcode_page` | `/home/qrcode_page`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home/styles` | `/home/styles`; params?: Router.UnknownInputParams; } | { pathname: `/components/headerHome`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/styles`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(stack)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(stack)'}/login` | `/login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(stack)'}/lostPass` | `/lostPass`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/home/perfil` | `/home/perfil`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/home/qrcode_page` | `/home/qrcode_page`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/home/styles` | `/home/styles`; params?: Router.UnknownOutputParams; } | { pathname: `/components/headerHome`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/styles${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(stack)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(stack)'}/login${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `${'/(stack)'}/lostPass${`?${string}` | `#${string}` | ''}` | `/lostPass${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/home/perfil${`?${string}` | `#${string}` | ''}` | `/home/perfil${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/home/qrcode_page${`?${string}` | `#${string}` | ''}` | `/home/qrcode_page${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/home/styles${`?${string}` | `#${string}` | ''}` | `/home/styles${`?${string}` | `#${string}` | ''}` | `/components/headerHome${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/styles`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(stack)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(stack)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(stack)'}/lostPass` | `/lostPass`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home/perfil` | `/home/perfil`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home/qrcode_page` | `/home/qrcode_page`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home/styles` | `/home/styles`; params?: Router.UnknownInputParams; } | { pathname: `/components/headerHome`; params?: Router.UnknownInputParams; };
    }
  }
}
