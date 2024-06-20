import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import useProducts from "../../../../Hooks/useProducts";


const ManageMedicine = () => {
    const {user} = useContext(AuthContext)
    const [products] = useProducts()
    const sellerMedicine = products.filter(medicine => medicine.sellerEmail === user.email)
    console.log(sellerMedicine);
    return (
        <div>
            <h1>manage medicine{sellerMedicine.length}</h1>
        </div>
    );
};

export default ManageMedicine;