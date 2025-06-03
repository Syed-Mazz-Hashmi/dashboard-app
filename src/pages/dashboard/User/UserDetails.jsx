import React from 'react'
import UserHeader from './UserHeader'

const UserDetails = () => {
  return (
    <>
      <div className='border-1 ml-[5px] w-full border-[#292929] rounded-xl'>
        <UserHeader />
        <div >
          <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:px-2 gap-3">
            <div>
              <div className="max-w-md w-full bg-zinc-900 text-white rounded-xl p-5 shadow-md relative">
                {/* Profile and status */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://i.pravatar.cc/60"
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">Emma Stone</h2>
                      <p className="text-sm text-zinc-400">emmastone@clikkmail.com</p>
                    </div>
                  </div>
                  <span className="bg-red-900 text-red-100 text-sm px-3 py-1 rounded-md">
                    Disabled
                  </span>
                </div>

                {/* Location, IP, OS */}
                <div className="flex justify-between items-center mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w40/gb.png"
                      alt="England"
                      className="w-5 h-5 rounded-full"
                    />
                    <span>England</span>
                  </div>
                  <span className="text-zinc-400">192.158.1.38</span>
                  <span className="text-white">iOS</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10m-6 4h2m-7 4h10M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                    />
                  </svg>
                  <span>01 - 11 - 2022</span>
                </div>

                {/* Icons row */}
                <div className="flex items-center gap-2 mt-4">
                  <img src="/icons/slack.svg" alt="Slack" className="w-5 h-5" />
                  <img src="/icons/paypal.svg" alt="PayPal" className="w-5 h-5" />
                  <img src="/icons/azure.svg" alt="Azure" className="w-5 h-5" />
                  <img src="/icons/docs.svg" alt="Docs" className="w-5 h-5" />
                  <span className="text-sm text-zinc-400">+15</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>28.30 GB Used of 100 GB</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "28.3%" }}
                    ></div>
                  </div>
                </div>

                {/* Total Subscriptions */}
                <div className="flex justify-between items-center text-sm mt-2 text-zinc-400">
                  <span>Total Subscriptions</span>
                  <span className="text-white font-medium">20</span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-md w-full bg-zinc-900 text-white rounded-xl p-5 shadow-md relative">
                {/* Profile and status */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://i.pravatar.cc/60"
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">Emma Stone</h2>
                      <p className="text-sm text-zinc-400">emmastone@clikkmail.com</p>
                    </div>
                  </div>
                  <span className="bg-red-900 text-red-100 text-sm px-3 py-1 rounded-md">
                    Disabled
                  </span>
                </div>

                {/* Location, IP, OS */}
                <div className="flex justify-between items-center mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w40/gb.png"
                      alt="England"
                      className="w-5 h-5 rounded-full"
                    />
                    <span>England</span>
                  </div>
                  <span className="text-zinc-400">192.158.1.38</span>
                  <span className="text-white">iOS</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10m-6 4h2m-7 4h10M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                    />
                  </svg>
                  <span>01 - 11 - 2022</span>
                </div>

                {/* Icons row */}
                <div className="flex items-center gap-2 mt-4">
                  <img src="/icons/slack.svg" alt="Slack" className="w-5 h-5" />
                  <img src="/icons/paypal.svg" alt="PayPal" className="w-5 h-5" />
                  <img src="/icons/azure.svg" alt="Azure" className="w-5 h-5" />
                  <img src="/icons/docs.svg" alt="Docs" className="w-5 h-5" />
                  <span className="text-sm text-zinc-400">+15</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>28.30 GB Used of 100 GB</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "28.3%" }}
                    ></div>
                  </div>
                </div>

                {/* Total Subscriptions */}
                <div className="flex justify-between items-center text-sm mt-2 text-zinc-400">
                  <span>Total Subscriptions</span>
                  <span className="text-white font-medium">20</span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-md w-full bg-zinc-900 text-white rounded-xl p-5 shadow-md relative">
                {/* Profile and status */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://i.pravatar.cc/60"
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">Emma Stone</h2>
                      <p className="text-sm text-zinc-400">emmastone@clikkmail.com</p>
                    </div>
                  </div>
                  <span className="bg-red-900 text-red-100 text-sm px-3 py-1 rounded-md">
                    Disabled
                  </span>
                </div>

                {/* Location, IP, OS */}
                <div className="flex justify-between items-center mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w40/gb.png"
                      alt="England"
                      className="w-5 h-5 rounded-full"
                    />
                    <span>England</span>
                  </div>
                  <span className="text-zinc-400">192.158.1.38</span>
                  <span className="text-white">iOS</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10m-6 4h2m-7 4h10M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                    />
                  </svg>
                  <span>01 - 11 - 2022</span>
                </div>

                {/* Icons row */}
                <div className="flex items-center gap-2 mt-4">
                  <img src="/icons/slack.svg" alt="Slack" className="w-5 h-5" />
                  <img src="/icons/paypal.svg" alt="PayPal" className="w-5 h-5" />
                  <img src="/icons/azure.svg" alt="Azure" className="w-5 h-5" />
                  <img src="/icons/docs.svg" alt="Docs" className="w-5 h-5" />
                  <span className="text-sm text-zinc-400">+15</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>28.30 GB Used of 100 GB</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "28.3%" }}
                    ></div>
                  </div>
                </div>

                {/* Total Subscriptions */}
                <div className="flex justify-between items-center text-sm mt-2 text-zinc-400">
                  <span>Total Subscriptions</span>
                  <span className="text-white font-medium">20</span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-md w-full bg-zinc-900 text-white rounded-xl p-5 shadow-md relative">
                {/* Profile and status */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://i.pravatar.cc/60"
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">Emma Stone</h2>
                      <p className="text-sm text-zinc-400">emmastone@clikkmail.com</p>
                    </div>
                  </div>
                  <span className="bg-red-900 text-red-100 text-sm px-3 py-1 rounded-md">
                    Disabled
                  </span>
                </div>

                {/* Location, IP, OS */}
                <div className="flex justify-between items-center mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w40/gb.png"
                      alt="England"
                      className="w-5 h-5 rounded-full"
                    />
                    <span>England</span>
                  </div>
                  <span className="text-zinc-400">192.158.1.38</span>
                  <span className="text-white">iOS</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10m-6 4h2m-7 4h10M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                    />
                  </svg>
                  <span>01 - 11 - 2022</span>
                </div>

                {/* Icons row */}
                <div className="flex items-center gap-2 mt-4">
                  <img src="/icons/slack.svg" alt="Slack" className="w-5 h-5" />
                  <img src="/icons/paypal.svg" alt="PayPal" className="w-5 h-5" />
                  <img src="/icons/azure.svg" alt="Azure" className="w-5 h-5" />
                  <img src="/icons/docs.svg" alt="Docs" className="w-5 h-5" />
                  <span className="text-sm text-zinc-400">+15</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>28.30 GB Used of 100 GB</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "28.3%" }}
                    ></div>
                  </div>
                </div>

                {/* Total Subscriptions */}
                <div className="flex justify-between items-center text-sm mt-2 text-zinc-400">
                  <span>Total Subscriptions</span>
                  <span className="text-white font-medium">20</span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-md w-full bg-zinc-900 text-white rounded-xl p-5 shadow-md relative">
                {/* Profile and status */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://i.pravatar.cc/60"
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">Emma Stone</h2>
                      <p className="text-sm text-zinc-400">emmastone@clikkmail.com</p>
                    </div>
                  </div>
                  <span className="bg-red-900 text-red-100 text-sm px-3 py-1 rounded-md">
                    Disabled
                  </span>
                </div>

                {/* Location, IP, OS */}
                <div className="flex justify-between items-center mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w40/gb.png"
                      alt="England"
                      className="w-5 h-5 rounded-full"
                    />
                    <span>England</span>
                  </div>
                  <span className="text-zinc-400">192.158.1.38</span>
                  <span className="text-white">iOS</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10m-6 4h2m-7 4h10M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                    />
                  </svg>
                  <span>01 - 11 - 2022</span>
                </div>

                {/* Icons row */}
                <div className="flex items-center gap-2 mt-4">
                  <img src="/icons/slack.svg" alt="Slack" className="w-5 h-5" />
                  <img src="/icons/paypal.svg" alt="PayPal" className="w-5 h-5" />
                  <img src="/icons/azure.svg" alt="Azure" className="w-5 h-5" />
                  <img src="/icons/docs.svg" alt="Docs" className="w-5 h-5" />
                  <span className="text-sm text-zinc-400">+15</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>28.30 GB Used of 100 GB</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "28.3%" }}
                    ></div>
                  </div>
                </div>

                {/* Total Subscriptions */}
                <div className="flex justify-between items-center text-sm mt-2 text-zinc-400">
                  <span>Total Subscriptions</span>
                  <span className="text-white font-medium">20</span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-md w-full bg-zinc-900 text-white rounded-xl p-5 shadow-md relative">
                {/* Profile and status */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://i.pravatar.cc/60"
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">Emma Stone</h2>
                      <p className="text-sm text-zinc-400">emmastone@clikkmail.com</p>
                    </div>
                  </div>
                  <span className="bg-red-900 text-red-100 text-sm px-3 py-1 rounded-md">
                    Disabled
                  </span>
                </div>

                {/* Location, IP, OS */}
                <div className="flex justify-between items-center mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w40/gb.png"
                      alt="England"
                      className="w-5 h-5 rounded-full"
                    />
                    <span>England</span>
                  </div>
                  <span className="text-zinc-400">192.158.1.38</span>
                  <span className="text-white">iOS</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10m-6 4h2m-7 4h10M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                    />
                  </svg>
                  <span>01 - 11 - 2022</span>
                </div>

                {/* Icons row */}
                <div className="flex items-center gap-2 mt-4">
                  <img src="/icons/slack.svg" alt="Slack" className="w-5 h-5" />
                  <img src="/icons/paypal.svg" alt="PayPal" className="w-5 h-5" />
                  <img src="/icons/azure.svg" alt="Azure" className="w-5 h-5" />
                  <img src="/icons/docs.svg" alt="Docs" className="w-5 h-5" />
                  <span className="text-sm text-zinc-400">+15</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>28.30 GB Used of 100 GB</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "28.3%" }}
                    ></div>
                  </div>
                </div>

                {/* Total Subscriptions */}
                <div className="flex justify-between items-center text-sm mt-2 text-zinc-400">
                  <span>Total Subscriptions</span>
                  <span className="text-white font-medium">20</span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-md w-full bg-zinc-900 text-white rounded-xl p-5 shadow-md relative">
                {/* Profile and status */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://i.pravatar.cc/60"
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">Emma Stone</h2>
                      <p className="text-sm text-zinc-400">emmastone@clikkmail.com</p>
                    </div>
                  </div>
                  <span className="bg-red-900 text-red-100 text-sm px-3 py-1 rounded-md">
                    Disabled
                  </span>
                </div>

                {/* Location, IP, OS */}
                <div className="flex justify-between items-center mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w40/gb.png"
                      alt="England"
                      className="w-5 h-5 rounded-full"
                    />
                    <span>England</span>
                  </div>
                  <span className="text-zinc-400">192.158.1.38</span>
                  <span className="text-white">iOS</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10m-6 4h2m-7 4h10M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                    />
                  </svg>
                  <span>01 - 11 - 2022</span>
                </div>

                {/* Icons row */}
                <div className="flex items-center gap-2 mt-4">
                  <img src="/icons/slack.svg" alt="Slack" className="w-5 h-5" />
                  <img src="/icons/paypal.svg" alt="PayPal" className="w-5 h-5" />
                  <img src="/icons/azure.svg" alt="Azure" className="w-5 h-5" />
                  <img src="/icons/docs.svg" alt="Docs" className="w-5 h-5" />
                  <span className="text-sm text-zinc-400">+15</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>28.30 GB Used of 100 GB</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "28.3%" }}
                    ></div>
                  </div>
                </div>

                {/* Total Subscriptions */}
                <div className="flex justify-between items-center text-sm mt-2 text-zinc-400">
                  <span>Total Subscriptions</span>
                  <span className="text-white font-medium">20</span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-md w-full bg-zinc-900 text-white rounded-xl p-5 shadow-md relative">
                {/* Profile and status */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://i.pravatar.cc/60"
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">Emma Stone</h2>
                      <p className="text-sm text-zinc-400">emmastone@clikkmail.com</p>
                    </div>
                  </div>
                  <span className="bg-red-900 text-red-100 text-sm px-3 py-1 rounded-md">
                    Disabled
                  </span>
                </div>

                {/* Location, IP, OS */}
                <div className="flex justify-between items-center mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w40/gb.png"
                      alt="England"
                      className="w-5 h-5 rounded-full"
                    />
                    <span>England</span>
                  </div>
                  <span className="text-zinc-400">192.158.1.38</span>
                  <span className="text-white">iOS</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10m-6 4h2m-7 4h10M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                    />
                  </svg>
                  <span>01 - 11 - 2022</span>
                </div>

                {/* Icons row */}
                <div className="flex items-center gap-2 mt-4">
                  <img src="/icons/slack.svg" alt="Slack" className="w-5 h-5" />
                  <img src="/icons/paypal.svg" alt="PayPal" className="w-5 h-5" />
                  <img src="/icons/azure.svg" alt="Azure" className="w-5 h-5" />
                  <img src="/icons/docs.svg" alt="Docs" className="w-5 h-5" />
                  <span className="text-sm text-zinc-400">+15</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>28.30 GB Used of 100 GB</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "28.3%" }}
                    ></div>
                  </div>
                </div>

                {/* Total Subscriptions */}
                <div className="flex justify-between items-center text-sm mt-2 text-zinc-400">
                  <span>Total Subscriptions</span>
                  <span className="text-white font-medium">20</span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-md w-full bg-zinc-900 text-white rounded-xl p-5 shadow-md relative">
                {/* Profile and status */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://i.pravatar.cc/60"
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">Emma Stone</h2>
                      <p className="text-sm text-zinc-400">emmastone@clikkmail.com</p>
                    </div>
                  </div>
                  <span className="bg-red-900 text-red-100 text-sm px-3 py-1 rounded-md">
                    Disabled
                  </span>
                </div>

                {/* Location, IP, OS */}
                <div className="flex justify-between items-center mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w40/gb.png"
                      alt="England"
                      className="w-5 h-5 rounded-full"
                    />
                    <span>England</span>
                  </div>
                  <span className="text-zinc-400">192.158.1.38</span>
                  <span className="text-white">iOS</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10m-6 4h2m-7 4h10M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                    />
                  </svg>
                  <span>01 - 11 - 2022</span>
                </div>

                {/* Icons row */}
                <div className="flex items-center gap-2 mt-4">
                  <img src="/icons/slack.svg" alt="Slack" className="w-5 h-5" />
                  <img src="/icons/paypal.svg" alt="PayPal" className="w-5 h-5" />
                  <img src="/icons/azure.svg" alt="Azure" className="w-5 h-5" />
                  <img src="/icons/docs.svg" alt="Docs" className="w-5 h-5" />
                  <span className="text-sm text-zinc-400">+15</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>28.30 GB Used of 100 GB</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "28.3%" }}
                    ></div>
                  </div>
                </div>

                {/* Total Subscriptions */}
                <div className="flex justify-between items-center text-sm mt-2 text-zinc-400">
                  <span>Total Subscriptions</span>
                  <span className="text-white font-medium">20</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between p-3 '>
            <h1 className='text-white text-md p-3'>
              Showing Row 1-10 of 20
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails
