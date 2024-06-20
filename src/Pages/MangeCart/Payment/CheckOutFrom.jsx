import { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ totalAmount }) => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    try {
      const {
        data: { clientSecret },
      } = await axios.post("http://localhost:5000/create-payment-intent", {
        amount: totalAmount,
        email: userEmail,
      });

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (payload.error) {
        setError(`Payment failed: ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        console.log("Payment succeeded:", payload.paymentIntent);

        // Capture the current date
        const currentDate = new Date().toISOString();

        // Save payment details in the database
        await axios.post("http://localhost:5000/save-payment-details", {
          paymentIntent: payload.paymentIntent,
          userEmail: userEmail,
          status: 'pending',
          date: currentDate, // Add the current date here
        });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Payment Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/invoice", {
          state: { paymentIntent: payload.paymentIntent },
        });
      }
    } catch (error) {
      setError(`Payment failed: ${error.message}`);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <div className="flex justify-center mt-5">
        <button className="mt-8 btn text-lg bg-custom-custom text-white" disabled={processing || succeeded} type="submit">
          {processing ? "Processing..." : "Pay Now"}
        </button>
      </div>
      {error && <div className=" text-red-400">{error}</div>}
    </form>
  );
};

export default CheckoutForm;
