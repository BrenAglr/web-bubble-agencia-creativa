import BannerSlogan from "@/components/home/bannerSlogan";
import HomeClient from "@/components/home/homeClient";
import HomeContact from "@/components/home/homeContact";
import HomeService from "@/components/home/homeService";

export default function Home() {
  return (
    <div>
        <main>
          <BannerSlogan/>
          <HomeService/>
          <HomeClient />
          <HomeContact/>
     
        </main>
    </div>
  );
}
