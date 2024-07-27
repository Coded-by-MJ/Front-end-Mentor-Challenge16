import { useState } from "react";
import { useData } from "../context/ShopProvider";
import CartSection from "./CartSection"
import Card from "./Card"
import ConfirmModal from "./ConfirmModal";



const Wrapper = () => {

  const [confirmModal, setConfirmModal] = useState(false);
  const { desserts } = useData();

  const handleShowModal = (value) => {
    setConfirmModal(value);
  }
  




  return (
    <div className="relative md:flex-row p-4 pt-9 w-full md:gap-3 gap-10 justify-between content-between flex flex-col bg-rose-100 min-h-screen">
        <div className="lg:grow w-full h-auto">
         <h1 className="text-4xl mb-7 text-rose-900 font-bold" >Desserts</h1>
         <div className="w-full  grid justify-start grid-auto-fill gap-6 md:gap-8">
            
            {
              desserts.map(dessert => (
                <Card key={dessert.id} {...dessert} /> 
              ))
            }
        
         </div>
        </div>

        {/* Cart Section */}
        <CartSection handleShowModal={handleShowModal}/>

        {
          confirmModal && <ConfirmModal handleShowModal={handleShowModal} />
        }
        
    </div>
  )
}

export default Wrapper