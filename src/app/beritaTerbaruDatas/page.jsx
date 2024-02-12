import { myApi } from "../../../myApi";
import Berita from "@/components/Berita/page";
import Header from "@/components/Header/page";

const Page = async () => {
  // Hit Api From myApi
  const getBeritaTerbaru = await myApi("/everything?", `q=apple&sortBy=publishedAt&language=en`);

  return (
    <div>
      <Header title={"Lihat Semua Berita Terbaru"} />
      <Berita api={getBeritaTerbaru} />
    </div>
  );
};
export default Page;
