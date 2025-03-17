import "./bootstrap.min.css";
import "./globals.css";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import styles from "./homepage.module.css"
config.autoAddCss = false

export const metadata = {
  title: "Code Monkey",
  description: "This is online platform to solve and compiled modern problems online",
};

export default function RootLayout({ children }) {
  return (
    <>
    
    <html lang="en">
    <head>
    
    </head>
      <body> 
        <div className={styles.container}>

        <Navbar />
        {children}
        <Footer />
        </div>
      </body>
    </html>

    </>
  );
}
