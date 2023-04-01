// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      primaryHover: string;
      secondaryHover: string;
      tertiaryHover: string;
      primaryTransparent: string;
      secondaryTransparent: string;
      tertiaryTransparent: string;
      primarySub: string;
      secondarySub: string;
      tertiarySub: string;
    };
  }
}
