import toast from 'react-hot-toast';
import UseAdvice from '../../../../Hooks/UseAdvice';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const ManageAdvice = () => {
    const axiosSecure = useAxiosSecure();
    const [advices, refetch] = UseAdvice();

    const handleToggleVisibility = async (adviceId) => {
        try {
            const res = await axiosSecure.patch(`/advices/${adviceId}/toggle`);
            if (res.data.modifiedCount > 0) {
                toast.success('Advice visibility toggled successfully');
                refetch();
            } else {
                toast.error('Failed to toggle advice visibility');
            }
        } catch (error) {
            console.error('Failed to toggle advice visibility:', error);
            toast.error('Failed to toggle advice visibility');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="text-center py-14">
                <h1 className="text-5xl">Manage Advertisements</h1>
            </div>
            <div className="mx-auto p-8 max-w-[1200px] mt-10 bg-white">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="bg-custom-custom text-white">
                                <th className="text-xl">Medicine Image</th>
                                <th className="text-xl">Medicine Name</th>
                                <th className="text-xl">Description</th>
                                <th className="text-xl">Seller Email</th>
                                <th className="text-center text-xl">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {advices.map((advice) => (
                                <tr key={advice._id}>
                                    <td><img src={advice.image} alt={advice.name} className="w-20 h-20 object-cover" /></td>
                                    <td>{advice.name}</td>
                                    <td>{advice.description}</td>
                                    <td>{advice.sellerEmail}</td>
                                    <td className="flex justify-center space-x-4">
                                        <button
                                            onClick={() => handleToggleVisibility(advice._id)}
                                            className={`btn px-4 py-2 ${advice.isVisible ? 'bg-red-300' : 'bg-green-300'} text-white hover:${advice.isVisible ? 'bg-red-400' : 'bg-green-400'}`}
                                        >
                                            {advice.isVisible ? 'Remove from Slide' : 'Add to Slide'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAdvice;
