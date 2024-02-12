"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowCircleRight } from "@phosphor-icons/react";
import NotFound from "@/components/assets/NotFound.jpg";

const Berita = ({ api }) => {
  return (
    <div className="lg:max-w-7xl md:max-w-3xl max-w-xl mt-5 mx-auto bg-transparent">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {api.articles.length > 0 ? (
          api.articles.map((data, index) => (
            <div key={index} className="bg-primary shadow-md rounded-b-md">
              <figure className="flex items-center rounded-t-md">
                <Image
                  src={data.urlToImage || "https://media.istockphoto.com/id/1147544807/id/vektor/gambar-mini-grafik-vektor.jpg?s=612x612&w=0&k=20&c=YvQ_sA2Zckb1ZPxr5RnIvazf2bNo9t2nQtNCqCOPmn4="}
                  alt={index}
                  width={500}
                  height={45}
                  className="rounded-t-md"
                ></Image>
              </figure>
              <figcaption>
                <p className="p-2 text-sm">Author : {data.author ? data.author.charAt(0).toUpperCase() + data.author.slice(1).toLowerCase() : "Undefined"}</p>
                <p className="p-2 text-lg font-semibold border-b border-b-helper">{data.title}</p>
                <p className="p-2 text-justify text-md">{data.description}</p>
                <div className="flex items-center p-2 py-3">
                  <Link href={`${data.url}`} className="flex items-center bg-blue rounded-lg pl-2 p-2 text-sm text-primary shadow-lg">
                    Baca Selengkapnya
                    <ArrowCircleRight size={30} className="text-primary pl-1" />
                  </Link>
                </div>
              </figcaption>
            </div>
          ))
        ) : (
          <div className="col-span-3 lg:max-w-7xl md:max-w-3xl max-w-xl mt-[100px] mx-auto bg-transparent">
            <div className="">
              <Image src={NotFound}></Image>
              <p className="py-4 font-bold text-xl flex justify-center">Search Not Found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Berita;
