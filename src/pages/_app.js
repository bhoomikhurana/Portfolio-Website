import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import "../components/SkillsFolder/Skills.css"; 
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      
    </>
  );
}

export default MyApp;
