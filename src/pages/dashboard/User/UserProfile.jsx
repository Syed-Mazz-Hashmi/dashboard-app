import { useState } from 'react';
import { MoreVertical, CheckCircle, XCircle, Clock } from 'lucide-react';

const subscriptions = [
  { name: 'Swiprr', usage: '1.33 GB Used' },
  { name: 'Clikkle Ads', usage: '0.96 GB Used' },
  { name: 'Clikkle Campaigns', usage: '3.33 GB Used' },
  { name: 'Clikkle E-sign', usage: '784 MB Used' },
  { name: 'Clikkle Files', usage: '2.40 GB Used' },
];

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
  },
  {
    username: "Emma Stone",
    useremail: "emmastone@clikkmail.com",
    usercountry: "England",
    userip: "237.84.2.178",
    userdevice: "Android",
    date: "01/01/2023",
    status: "Disabled",
    totalsubscription: "20",
  },
]

function ActionMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded hover:bg-gray-700 transition"
      >
        <MoreVertical className="w-5 h-5 text-white" />
      </button>
      {open && (
        <div className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-[#1e1e1e] shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1 text-white">
            <button className="flex items-center w-full px-4 py-2 hover:bg-gray-600">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Activate
            </button>
            <button className="flex items-center w-full px-4 py-2 hover:bg-gray-600">
              <XCircle className="w-4 h-4 mr-2 text-red-400" /> Deactivate
            </button>
            <button className="flex items-center w-full px-4 py-2 hover:bg-gray-600">
              <Clock className="w-4 h-4 mr-2 text-yellow-400" /> Overdue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function UserProfile() {
  return (
    <div className="bg-black min-h-screen text-white  font-sans">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">User Profile</h1>

      {/* User Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 font-bold gap-4  bg-[#121212] p-4 rounded-lg mb-6">
        <div >
          <p className='text-[#838383]'>Email :</p>
          <p className="text-blue-400 break-all">danielsillivan@clikkmail.com</p>
          <p className='text-[#838383]'>Date of Birth :</p>
          <p> 27/03/1990</p>
        </div>
        <div>
          <p className='text-[#838383]'>Phone Number :</p>
          <p className="text-blue-400">(229) 655 0109</p>
          <p className='text-[#838383]'>Country :</p>
          <p> United States</p>
        </div>
        <div className="md:text-left">
          <p className='text-[#838383]'>IP Address : </p>
          <p>192.168.66455</p>
          <p className='text-[#838383]'>Home Address : </p>
          <p className="break-all">6301 Elgin St. Celina, Delaware, 10299</p>
        </div>
      </div>

      {/* Subscriptions Table */}
      <div className="bg-[#121212] p-4 rounded-lg mb-6 overflow-x-auto">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Subscriptions</h2>
        <table className="w-full text-left min-w-[400px]">
          <thead>
            <tr>
              <th className="py-2">Product</th>
              <th className="py-2">Storage Used</th>
              <th className="py-2">Action</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((item, i) => (
              <tr key={i} className="border-t border-gray-700">
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.usage}</td>
                <td className="py-2"><ActionMenu /></td>
                <td className="py-2"><span className="bg-green-600 px-2 py-1 rounded text-sm">Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Storage & Account Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#121212] p-4 rounded-lg mb-4 md:mb-0">
          <h3 className="mb-2 text-base md:text-lg">Storage Upgrade</h3>
          <div className="flex flex-wrap gap-2">
            {["100 GB", "200 GB", "500 GB", "1000 GB", "UNLIMITED"].map((size, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded text-xs md:text-sm ${size === "100 GB" ? "bg-green-600" : "bg-gray-800"}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#121212] p-4 rounded-lg">
          <h3 className="mb-2 text-base md:text-lg">Account Action</h3>
          <div className="flex flex-wrap gap-2">
            <button className="bg-green-600 px-4 py-1 rounded text-xs md:text-sm">Activate</button>
            <button className="bg-red-600 px-4 py-1 rounded text-xs md:text-sm">Disable</button>
            <button className="bg-yellow-600 px-4 py-1 rounded text-xs md:text-sm">Suspend</button>
            <button className="bg-red-800 px-4 py-1 rounded text-xs md:text-sm">Delete</button>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 flex flex-col md:flex-row justify-end gap-4">
        <button className="px-4 py-2 border border-red-600 text-red-600 rounded">Cancel</button>
        <button className="px-4 py-2 bg-blue-600 rounded text-white">Save</button>
      </div>
    </div>
  );
}
//  <p className="text-lg font-semibold">Darnell Walsh</p>
//           <p className="text-sm">QA Tester</p>
//           <p className="text-green-500 font-semibold">Active</p>
//           <p>Registration Date: 15/02/22</p>
//           <p>Subscriptions: 12</p>
//           <p><span className="text-yellow-400">11.25 GB</span> / <span className="text-white">100 GB</span></p>
        