import { useData } from "../context/ShopProvider";



const Lists = ({id, name, price, qtyBought}) => {

  const { removeFromCart } = useData();

  const qtyPriceTotal = qtyBought * price;


  return (
    <li className="flex w-full justify-between items-center">
    <div className="flex gap-1.5 flex-col">
        <span className="inline-block text-md font-bold text-rose-900">{name}</span>
        <div className="flex gap-3 w-full">
         <span className="inline-block font-medium text-md text-red-500">{qtyBought}x</span> 
         <span className="inline-block text-md text-rose-400 ">@ ${price.toFixed(2)}</span> 
         <span className="inline-block text-md text-rose-500 font-medium ">${qtyPriceTotal.toFixed(2).padEnd(3, 0)}</span>
        </div>
    </div>

    <button className="group transition-all hover:border-rose-900 bg-transparent border-[#CAAFA7] border-[1.5px] size-[18px] rounded-full flex justify-center items-center"
      onClick={() => removeFromCart(id)}
    >
     <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" 
     className="transition-all group-hover:fill-rose-900"
     d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
    </button>
   </li>
  )
}

export default Lists