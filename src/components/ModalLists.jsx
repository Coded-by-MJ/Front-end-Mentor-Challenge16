
const ModalLists = ({name, price, qtyBought, image}) => {

  const { thumbnail } = image;
  
  const qtyPriceTotal = qtyBought * price;


  return (
    <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
            <img src={thumbnail} alt={name}
             className="rounded-md size-[50px] object-cover object-center"
            />

            <div className="flex gap-1.5 flex-col">
             <span className="inline-block text-md font-bold text-rose-900">{name}</span>
              <div className="flex gap-3 w-full">
              <span className="inline-block font-medium text-md text-red-500">{qtyBought}x</span> 
              <span className="inline-block text-md text-rose-400 ">@ ${price.toFixed(2).padEnd(3, "0")}</span> 
             </div>
            </div>
        </div>
         <span className="inline-block text-md text-rose-900 font-medium">
           ${qtyPriceTotal.toFixed(2).padEnd(3, 0)}
         </span>
    </div>
  )
}

export default ModalLists