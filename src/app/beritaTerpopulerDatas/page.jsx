import { myApi } from "../../../myApi";
import Berita from "@/components/Berita/page";
import Header from "@/components/Header/page";

const Page = async () => {
  // Hit Api from myApi
  const getBeritaTerpopuler = await myApi("/everything?", `q=apple&sortBy=popularity&language=en`);

  return (
    <div>
      <Header title={"Lihat Semua Berita Terpopuler"} />
      <Berita api={getBeritaTerpopuler} />
    </div>
  );
};
export default Page;
