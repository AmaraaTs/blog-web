import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mainblog from "@/components/MainBlog";
import Trending from "@/components/Trending";
import AllBlog from "@/components/AllBlog";

export default function Home() {
  return (
    <>
      <Mainblog />
      <Trending />
      <AllBlog />
    </>
  );
}
