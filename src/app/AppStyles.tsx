import theme from "app/theme";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {CacheProvider, Global, SerializedStyles} from "@emotion/react";
import {ReactNode, useMemo} from "react";
import createEmotionCache from "utils/createEmotionCache";
import {EmotionCache} from "@emotion/cache";

const clientSideEmotionCache = createEmotionCache();

interface Props {
  globals?: SerializedStyles[];
  emotionCache?: EmotionCache;
  children: ReactNode;
}

const AppStyles = ({
  globals,
  emotionCache = clientSideEmotionCache,
  children
}: Props) => {
  const globalStyles = useMemo(() => {
    return (globals || []).map((style) => (
      <Global styles={style} key={style.name} />
    ));
  }, [globals]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {globalStyles}
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppStyles;
