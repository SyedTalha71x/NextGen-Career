/* eslint-disable no-unused-vars */
import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    features: ['Basic access', '1 user', '100 API calls/month', 'Community support'],
    color: 'bg-gray-100',
    buttonColor: 'bg-gray-600 hover:bg-gray-700',
  },
  {
    name: 'Bronze',
    price: '$9.99',
    features: ['Everything in Free', '5 users', '1,000 API calls/month', 'Email support'],
    color: 'bg-yellow-100',
    buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
  },
  {
    name: 'Gold',
    price: '$29.99',
    features: ['Everything in Bronze', '10 users', '10,000 API calls/month', 'Priority email support'],
    color: 'bg-yellow-300',
    buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
  },
  {
    name: 'Premium',
    price: '$59.99',
    features: ['Everything in Gold', '25 users', '50,000 API calls/month', '24/7 phone support'],
    color: 'bg-purple-200',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
  },
  {
    name: 'Platinum',
    price: '$99.99',
    features: ['Everything in Premium', '50 users', '100,000 API calls/month', 'Dedicated account manager'],
    color: 'bg-gray-300',
    buttonColor: 'bg-gray-800 hover:bg-gray-900',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Custom solutions', 'Unlimited users', 'Unlimited API calls', '24/7 premium support'],
    color: 'bg-blue-100',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
  },
]

export default function SubscriptionPage() {
  return (
    <>
    <div className='p-2'>
    <div className="flex justify-start flex-col items-start mb-6 ">
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
        

        <div className=" space-y-4 mt-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
            key={tier.name}
              className={`${tier.color} rounded-lg shadow-xl divide-y divide-gray-200`}
            >
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-semibold text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">{tier.price}</p>
                <p className="mt-1 text-xl text-gray-500">{tier.name !== 'Enterprise' ? '/month' : ' pricing'}</p>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
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
                  type="button"
                  className={`w-full ${tier.buttonColor} text-white rounded-md px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
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
  )
}