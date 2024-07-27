import { useEffect, useState } from "react";
import { useData } from "../context/ShopProvider"






const Card = ({id, qtyBought, image, name, category, price, inCart}) => {

  const { addToCart, increaseQty, decreaseQty }  = useData();

  const { mobile, desktop, tablet } = image;

  const [currentImage, setCurrentImage] = useState(mobile);
  
 


  useEffect(() => {
    const updateImage = () => {
      const screenSize = window.innerWidth;
      if (screenSize >= 1280) {
        setCurrentImage(desktop);
      } else if (screenSize >= 768) {
        setCurrentImage(tablet);
      } else {
        setCurrentImage(mobile);
      }
    };

    updateImage();

    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, [mobile, tablet, desktop]);
















  return (
    <div className="w-full flex flex-col gap-10">
        <div 
        className={`relative md:h-[380px]
           transition-all rounded-xl bg-cover bg-top bg-no-repeat w-full  h-[230px]
            ${inCart ? "border-[2px] border-red-500" : "border-0"}
          `}
        style={{backgroundImage: `url(${currentImage})`}}
        >
        {
           inCart

            ? (
              <div className="text-md  px-3 font-medium cursor-pointer text-rose-900 absolute -translate-x-[50%] left-[50%] -bottom-[20px] bg-red-500  w-[160px] h-[45px] rounded-3xl inline-flex justify-between items-center gap-2">
               <button 
               className="transition-all group hover:bg-white flex items-center size-[18px] justify-center rounded-full border-[1.5px] border-white"
               onClick={()=> decreaseQty(id)}
               >
                <svg xmlns="http://www.w3.org/2000/svg"
                className="hover:fill-red-500" 
                width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff"
                className="group-hover:fill-red-500 transition-all"
                 d="M0 .375h10v1.25H0V.375Z"/></svg>
               </button>

                 <span className="inline-block text-white">
                   {qtyBought}
                 </span>


                 <button className="group transition-all hover:*:fill-red-500 hover:bg-white flex items-center size-[18px] justify-center rounded-full border-[1.5px] border-white"
                  onClick={()=> increaseQty(id)}
                  >
                 <svg xmlns="http://www.w3.org/2000/svg"
                 width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" 
                  className="group-hover:fill-red-500 transition-all"
                 d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
               </button>

              </div>
             )

              : (
            
               <button className="transition-all hover:text-red-500 hover:border-red-500 text-sm font-semibold cursor-pointer text-rose-900 absolute -translate-x-[50%] left-[50%] -bottom-[20px] bg-white border border-rose-500   w-[160px] h-[45px] rounded-3xl inline-flex justify-center items-center gap-2"
                onClick={() => addToCart(id)}
               >
                <svg xmlns="http://www.w3.org/2000/svg"
                 width="21" height="20" fill="none" viewBox="0 0 21 20">
                   <g fill="#C73B0F" clipPath="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
                   Add To Cart
                </button> 
               )
   
            }
        </div>

        <div className="flex flex-col gap-1">
            <span className="text-md inline-block text-rose-500 font-thin">
               {category}
            </span>
            <span className="text-md inline-block font-semibold text-rose-900">
               {name}
            </span> 
            <span className="text-md inline-block text-red-500 font-medium">
               ${price.toFixed(2).padEnd(3, "0")}
            </span>
        </div>

    </div>
  )
}

export default Card