/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useStateManage } from '../../Context/StateContext';
import { loadStripe } from '@stripe/stripe-js';
import { message } from 'antd';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

export default function SubscriptionPage() {
  const { API_URL } = useStateManage();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/get-subscription`);
        setData(response.data.message); 
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handlePurchase = async (subscriptionId) => {
    try {
      const token = localStorage.getItem('authToken');
      const stripe = await stripePromise;
      
      console.log('Sending request to purchase subscription:', subscriptionId);
      
      const response = await axios.post(`${API_URL}/purchase-subscription`, {
        subscriptionId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Server response:', response.data);

      if (!response.data || !response.data.message || !response.data.message.id) {
        throw new Error('Invalid response from server: missing session ID');
      }

      const sessionId = response.data.message.id;
      console.log(sessionId);
      

      console.log('Redirecting to Stripe checkout with sessionId:', sessionId);

      const result = await stripe.redirectToCheckout({
        sessionId: sessionId
      });

      if (result.error) {
        console.error('Stripe redirectToCheckout error:', result.error);
        message.error('Failed to redirect to checkout');
      }
    } catch (error) {
      console.error('Error in handlePurchase:', error);
      message.error('An error occurred while processing your purchase');
    }
  }

  const handlePurchaseClick = (subscriptionId) =>{
    handlePurchase(subscriptionId)
  }

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <>
      <div className='p-2'>
        <div className="flex justify-start flex-col items-start mb-6">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="lg:text-xl md:text-xl sm:text-sm text-sm text-gray-300">
            Select the perfect subscription tier for your needs
          </p>
        </div>
      </div>
      <div className="min-h-screen rounded-lg bg-gradient-to-br bg-blue-900 p-3">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mt-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
            {data.map((tier) => (
              <div
                key={tier.id}
                className={`${tier.name === 'Free'? 'bg-gray-100': tier.name === 'Bronze'? 'bg-yellow-100': tier.name === 'Gold'? 'bg-yellow-300': tier.name === 'Premium'? 'bg-purple-200': tier.name === 'Platinum'? 'bg-gray-300': tier.name === 'Enterprise'? 'bg-blue-100':'' } rounded-lg shadow-xl divide-y divide-gray-200`}
              >
                <div className="p-6">
                  <h2 className="text-2xl leading-6 font-semibold text-gray-900">{tier.name}</h2>
                  <p className="mt-4 text-3xl font-extrabold text-gray-900">${tier.price}</p>
                  <p className="mt-1 text-xl text-gray-500">{tier.name !== 'Enterprise' ? '/month' : ' pricing'}</p>
                  <ul className="mt-6 space-y-4">
                    {JSON.parse(tier.points).map((feature) => (  
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-base text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4">
                  <button
                  onClick={()=>{handlePurchaseClick(tier.id)}}
                    type="button"
                    className={`w-full ${tier.name === 'Free'? 'bg-gray-600 hover:bg-gray-700': tier.name === 'Bronze'? 'bg-yellow-600 hover:bg-yellow-700': tier.name === 'Gold'? 'bg-yellow-500 hover:bg-yellow-600': tier.name === 'Premium'? 'bg-purple-600 hover:bg-purple-700': tier.name === 'Platinum'? 'bg-gray-800 hover:bg-gray-900': tier.name === 'Enterprise'? 'bg-blue-600 hover:bg-blue-700':'' } text-white rounded-md px-4 py-2 text-base font-medium focus:outline-none`}
                  >
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
