import React, { useState } from 'react'
import UserHeader from './UserHeader'
import UserProfile from './UserProfile'

const usercards = [
  // Add more user objects here as needed
  {
    username: "Emma Stone",
    useremail: "emmastone@clikkmail.com",
    usercountry: "England",
    userip: "237.84.2.178",
    userdevice: "IOS",
    date: "01/01/2023",
    status: "Disabled",
    totalsubscription: "20",
  },
  {
    username: "Darnell Walsh",
    useremail: "darnellwalsh2@clikkmail.com",
    usercountry: "Germany",
    userip: "192.255.1.38",
    userdevice: "IOS",
    date: "11 - 12 - 2019",
    status: "Active",
    totalsubscription: "20",
  },
  {
    username: "Jason Hack",
    useremail: "jasonhack@clikkmail.com",
    usercountry: "France",
    userip: "192.168.1.44",
    userdevice: "Android Tablet",
    date: "02 - 05 - 2021",
    status: "Active",
    totalsubscription: "20",
  },
  {
    username: "Ted Bobby",
    useremail: "tedbobby@clikkmail.com",
    usercountry: "United States",
    userip: "192.168.1.30",
    userdevice: "Laptop",
    date: "06 - 02 - 2020",
    status: "Acctive",
    totalsubscription: "20",
  },
  {
    username: "Amina Hira",
    useremail: "aminahira@clikkmail.com",
    usercountry: "England",
    userip: "192.188.1.35",
    userdevice: "IOS",
    date: "19 - 04 - 2019",
    status: "Disabled",
    totalsubscription: "20",
  },
  {
    username: "Nathan Percy",
    useremail: "nathanpercy@clikkmail.com",
    usercountry: "France",
    userip: "192.168.1.33",
    userdevice: "IOS",
    date: "14 - 08 - 2018",
    status: "Disabled",
    totalsubscription: "20",
  },
  {
    username: "Adam Franklin",
    useremail: "adamfranklin@clikkmail.comm",
    usercountry: "Canada",
    userip: "192.255.1.63 ",
    userdevice: "IOS",
    date: "11 - 03 - 2022",
    status: "Active",
    totalsubscription: "20",
  },
  {
    username: "Jessica Stewart",
    useremail: "jessicastewart@clikkmail.com",
    usercountry: "Canada",
    userip: "192.168.1.78",
    userdevice: "IOS",
    date: "16 - 01 - 2020",
    status: "Active",
    totalsubscription: "20",
  },
  {
    username: "Emma Stone",
    useremail: "emmastone@clikkmail.com",
    usercountry: "England",
    userip: "237.84.2.178",
    userdevice: "IOS",
    date: "01/01/2023",
    status: "Disabled",
    totalsubscription: "20",
  }
]

const UserDetails = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  // If a card is clicked, show the UserProfile page and hide the cards
  if (selectedUser) {
    return (
      <div className="bg-black min-h-screen text-white p-4  font-sans">
        <button
          className="mb-4 right-8 px-4 py-2 absolute bg-red-600 rounded text-white"
          onClick={() => setSelectedUser(null)}
        >
          Back
        </button>
        <UserProfile user={selectedUser} />
      </div>
    );
  }

  return (
    <>
      <div className='border-1 ml-[5px] w-full border-[#292929] rounded-xl my-5'>
        <UserHeader />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:px-2 gap-3">
            {usercards.map((user, idx) => (
              <div key={idx} onClick={() => setSelectedUser(user)} className="cursor-pointer">
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
                        <h2 className="text-lg font-semibold">{user.username}</h2>
                        <p className="text-sm text-zinc-400">{user.useremail}</p>
                      </div>
                    </div>
                    <span className={`text-sm px-3 py-1 rounded-md ${user.status === "Disabled" ? "bg-red-900 text-red-100" : "bg-green-900 text-green-100"}`}>
                      {user.status}
                    </span>
                  </div>
                  {/* Location, IP, OS */}
                  <div className="flex justify-between items-center mt-6 text-sm">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://flagcdn.com/w40/gb.png"
                        alt={user.usercountry}
                        className="w-5 h-5 rounded-full"
                      />
                      <span>{user.usercountry}</span>
                    </div>
                    <span className="text-zinc-400">{user.userip}</span>
                    <span className="text-white">{user.userdevice}</span>
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
                    <span>{user.date}</span>
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
                    <span className="text-white font-medium">{user.totalsubscription}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-between p-3 '>
            <h1 className='text-white text-md p-3'>
              Showing Row 1-10 of {usercards.length}
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails