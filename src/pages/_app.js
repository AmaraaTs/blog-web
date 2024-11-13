import Layout from "@/components/Layout";
import "@/styles/globals.css";
import SearchProvider from "@/provider/search-provider";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </SearchProvider>
  );
}
