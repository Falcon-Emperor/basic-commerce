import { client } from "@/lib/sanityClient"
import { Image as IImage } from "sanity";
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product']{
    price,
    _id,
    title,
    image,
    category -> {
      name
    }
    
  }`);
  return res
}

interface IProduct {
  title: string,
  _id: string,
  price: number
  description: string,
  image: IImage,
  category: {
    name: string
  }
}


export default async function Home() {
  const data: IProduct[] = await getProductData()
  
  return (
    <div className="grid grid-cols-[auto,auto,auto] justify-center gap-x-10 py-10 px-6">
      {data.map((item) => (
        <>
      <div>
        <Image 
        width={200}
        height={200}
        className="max-h-[110px] object-cover object-top"
        src={urlForImage(item.image).url() } alt="falcon-emperor" />
        <h3>${item.price}</h3>
        <h2>{item.description}</h2>
        <button className="border py-2 px-6 rounded bg-blue-600 text-white">Add to Cart</button>
      </div>
      </>
      ))}
    </div>
  )
}