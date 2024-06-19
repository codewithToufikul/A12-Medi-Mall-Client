import toast from 'react-hot-toast';
import usePaymentDetails from '../../../../Hooks/usePaymentDetails';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const ManagePayments = () => {
const [payments] = usePaymentDetails()
  const axiosSecure = useAxiosSecure();

 

  // Handle payment status update
  const handleAcceptPayment = async (paymentId) => {
    try {
      const res = await axiosSecure.put(`/payments/${paymentId}`, { status: 'paid' });
      if (res.data.modifiedCount > 0) {
        toast.success('Payment status updated to paid');
      } else {
        toast.error('Failed to update payment status');
      }
    } catch (error) {
      console.error('Failed to update payment status:', error);
      toast.error('Failed to update payment status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="text-center py-14">
        <h1 className="text-5xl">Manage Payments</h1>
      </div>
      <div className="mx-auto p-8 max-w-[1200px] mt-10 bg-white">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-custom-custom text-white">
                <th className="text-xl">Payment ID</th>
                <th className="text-xl">User</th>
                <th className="text-xl">Amount</th>
                <th className="text-xl">Status</th>
                <th className="text-center text-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment._id}>
                  <td>{payment.paymentIntentId}</td>
                  <td>{payment.email}</td>
                  <td>${payment.amount / 100}</td>
                  <td>{payment.status}</td>
                  <td className="flex justify-center space-x-4">
                    {payment.status === 'pending' && (
                      <button
                        onClick={() => handleAcceptPayment(payment._id)}
                        className="btn px-4 py-2 bg-green-300 text-white hover:bg-green-400"
                      >
                        Accept Payment
                      </button>
                    )}
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

export default ManagePayments;
