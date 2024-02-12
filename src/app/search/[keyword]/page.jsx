import Header from "@/components/Header/page";
import { myApi } from "../../../../myApi";
import Berita from "@/components/Berita/page";

const page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURIComponent(keyword);

  const searchBeritaTerbaru = await myApi("/everything?", `q=${decodedKeyword}&language=en`);
  return (
    <div>
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}`} />
        <Berita api={searchBeritaTerbaru} />
      </section>
    </div>
  );
};
export default page;
