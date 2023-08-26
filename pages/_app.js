import '../styles/global.scss'
import Head from "next/head";
import CartProvider from "../components/CartProvider";
function MyApp({ Component, pageProps }) {
    return  (
        <CartProvider>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Passion+One&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"/>
            </Head>
           <Component {...pageProps} />
        </CartProvider>
    )
}
export default MyApp
