import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left: Name */}
          <div className="text-xl font-bold text-gray-800">
            <span>Form</span>
            <span className="text-blue-700">Ezy</span>
          </div>

          {/* Middle: Search Bar */}
          <div className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right: Profile Image */}
          <div>
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" // Replace with your profile image URL
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      </nav>
      <div className="bg-[rgb(241,243,244)] h-60">
        <div className="pl-64 pr-64 pt-4 ">
          <div>
            <h6 className="text-xm pb-4  text-gray-800">
              Start new form
            </h6>
          </div>
          <Link to="/form" className="w-42 cursor-pointer h-36 mb-1 rounded-xl flex flex-col bg-white justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-12 w-12 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </Link>
          <div className="text-sm font-semibold pb-4  text-gray-800">
            Create Form
          </div>
        </div>
      </div>
      <div className=" min-h-screen">
        <div className=" pl-64 pr-64 ">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Recent forms
          </h1>

          {/* No Forms Message */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-600 mb-4">No forms yet</p>
            <p className="text-gray-500 text-sm">
              Select a blank form or choose another template above to get
              started
            </p>
          </div>

          {/* Ownership Info */}
          <div className="mt-6 text-center text-gray-500 text-sm">
            Built By Tech Titans
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
