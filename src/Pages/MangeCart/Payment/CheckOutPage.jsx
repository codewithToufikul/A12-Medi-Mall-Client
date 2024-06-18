import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import CheckoutForm from './CheckOutFrom';

const stripePromise = loadStripe('pk_test_51PNCFyEPhxEoR7aayPKRAIsWy0P7QgMqNC6uBEAnqSptC8MZ8hkdOTgDMXVH05C4s6u3Xw1YMuScrHOgkUV1JjYV00U30ZPWtf');

const CheckoutPage = () => {
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <Elements stripe={stripePromise}>
          <CheckoutForm totalAmount={totalAmount} />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutPage;
