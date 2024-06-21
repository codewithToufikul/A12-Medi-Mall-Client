import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className=" min-h-screen flex justify-center items-center flex-col">
            <h1 className=" text-6xl font-semibold text-custom-custom ">Welcome to Medi Mall</h1>
            <h1 className=" text-6xl font-semibold l text-blue-400 mt-4">{user.displayName}</h1>
        </div>
    );
};

export default UserHome;