import { useState, useEffect } from "react";
import axios from "axios";

const Responses = ({ formName }) => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define the fields to display
  const fields = ["Name", "Address", "Phone", "Email"];

  // Function to fetch responses from the backend
  const fetchResponses = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://192.168.0.106:5000/get-respones");
      console.log(response.data)
      setResponses(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching responses:", err);
      setError("Failed to fetch responses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch responses on component mount
  useEffect(() => {
    fetchResponses();
  }, []);

  // Function to refresh data
  const handleRefresh = () => {
    fetchResponses();
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Branding */}
          <div className="text-xl font-bold text-gray-800">
            <span>Form</span>
            <span className="text-blue-600">Ezy</span>
          </div>

          {/* Form Name */}
          <div className="font-semibold">
            <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
              {formName}
            </span>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-4">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-200"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Form Responses
              </h2>
              {/* Refresh Button */}
              <button
                onClick={handleRefresh}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Refresh
              </button>
            </div>

            {loading ? (
              <p className="text-center text-gray-500">Loading responses...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : responses.length > 0 ? (
              <div className="space-y-6">
                {responses.map((response, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                  >
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">
                      Response #{index + 1}
                    </h3>
                    <div className="space-y-3">
                      {fields.map((field) => (
                        <div
                          key={field}
                          className="flex justify-between items-center"
                        >
                          <span className="text-sm font-medium text-gray-600">
                            {field}:
                          </span>
                          <span className="text-sm text-gray-800">
                            {response[field] || "N/A"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No responses available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Responses;