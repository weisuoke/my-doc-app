import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from "@mdx-js/react";
import {Header_1, Header_2, Header_3, Header_4, Header_5, Header_6} from "../components/MDX/Header/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CodeBlock from "../components/MDX/CodeBlock";

const components: any = {
  h1: Header_1,
  h2: Header_2,
  h3: Header_3,
  h4: Header_4,
  h5: Header_5,
  h6: Header_6,
  // pre: CodeBlock
}

const theme = createTheme({

})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
