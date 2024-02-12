import Berita from "@/components/Berita/page";
import Header from "@/components/Header/page";
import { myApi } from "../../myApi";

export default async function Home() {
  // Hit Api From myApi
  const beritaTerbaruApi = await myApi("/everything?", "q=apple&pageSize=6&sortBy=publishedAt&language=en");
  const beritaTerpopulerpi = await myApi("/everything?", "q=apple&pageSize=6&sortBy=popularity&language=en");
  return (
    <main>
      <section>
        <Header title="Berita Terbaru" linkHref="/beritaTerbaruDatas" linkTitle="Lihat Semua" />
        <Berita api={beritaTerbaruApi} />
      </section>
      <section>
        <Header title="Berita Terpopuler" linkHref="/beritaTerpopulerDatas" linkTitle="Lihat Semua" />
        <Berita api={beritaTerpopulerpi} />
      </section>
    </main>
  );
}
