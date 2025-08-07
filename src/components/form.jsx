import { useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaIdCard,
  FaCreditCard,
  FaVenusMars,
  FaBalanceScale,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { GrDocument } from "react-icons/gr";
import useUploadForm from "../hooks/useUploadForm";
import axios from "axios";

const SelectableButton = ({ label, isSelected, onSelect, icon }) => {
  return (
    <button
      onClick={() => onSelect(label)}
      aria-label={`Select ${label}`}
      className={`w-24 h-24 flex flex-col items-center justify-center rounded-lg border-2 
                  ${
                    isSelected
                      ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-300"
                      : "border-gray-300 bg-white"
                  } 
                  text-gray-800 font-semibold transition-all hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      {icon}
      <span className="mt-2 text-sm">{label}</span>
    </button>
  );
};

const Form = () => {
  const [isNameEditingActive, setIsNameEditingActive] = useState(false);
  const [formName, setFormName] = useState("Untitled Form");
  const [selectedFields, setSelectedFields] = useState([]);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const { uploadForm } = useUploadForm();

  const fieldOptions = [
    { label: "Name", icon: <FaUser className="w-6 h-6" /> },
    { label: "Address", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
    { label: "Phone", icon: <FaPhone className="w-6 h-6" /> },
    { label: "Email", icon: <FaEnvelope className="w-6 h-6" /> },
    { label: "Aadhar Number", icon: <FaIdCard className="w-6 h-6" /> },
    { label: "PAN Number", icon: <FaCreditCard className="w-6 h-6" /> },
    { label: "Gender", icon: <FaVenusMars className="w-6 h-6" /> },
    { label: "Caste", icon: <FaBalanceScale className="w-6 h-6" /> },
    { label: "Income", icon: <FaMoneyBillAlt className="w-6 h-6" /> },
  ];

  const documentOptions = [
    { label: "Aadhar Card", icon: <GrDocument className="w-6 h-6" /> },
    { label: "PAN Card", icon: <GrDocument className="w-6 h-6" /> },
    { label: "Income Certificate", icon: <GrDocument className="w-6 h-6" /> },
    { label: "Caste Certificate", icon: <GrDocument className="w-6 h-6" /> },
    { label: "Driving License", icon: <GrDocument className="w-6 h-6" /> },
  ];

  const handleNameEditing = () => {
    setIsNameEditingActive(!isNameEditingActive);
  };

  const handlePublish = async () => {
    console.log("Selected Fields:", selectedFields);
    const formData = {};
    selectedFields.forEach((option) => (formData[option] = ""));

    try {
      await axios.post("http://192.168.0.106:5000/save-form/", formData);
      alert("Form saved successfully in MongoDB!");
      await axios.post("http://192.168.0.106:5000/save-documents/", {
        documents: selectedDocuments,
      });
      alert("Documents saved successfully in MongoDB!");

      navigator("/responses");
    } catch (error) {
      console.error("Error saving form:", error);
      alert("Failed to save form.");
    }
  };

  const handleFormNameChange = (e) => {
    setFormName(e.target.value);
  };

  const handleSelect = (label, selectedList, setSelectedList) => {
    if (selectedList.includes(label)) {
      setSelectedList(selectedList.filter((item) => item !== label));
    } else {
      setSelectedList([...selectedList, label]);
    }
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
            {isNameEditingActive ? (
              <input
                type="text"
                value={formName}
                onChange={handleFormNameChange}
                onBlur={handleNameEditing}
                className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                autoFocus
              />
            ) : (
              <span
                onClick={handleNameEditing}
                className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
              >
                {formName}
              </span>
            )}
          </div>

          {/* Publish Button and Profile */}
          <div className="flex items-center gap-4">
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              onClick={handlePublish}
            >
              Publish
            </button>
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-200"
            />
          </div>
        </div>
      </nav>

      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#ccc_10%,_transparent_10%)] bg-[size:25px_25px] opacity-50 pointer-events-none"></div>

      {/* Main Content */}
      <div className="container mx-auto pt-10 relative z-10">
        {/* Field Selection */}
        <h2 className="text-lg font-bold mb-4 text-center">Select Fields</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {fieldOptions.map((option) => (
            <SelectableButton
              key={option.label}
              label={option.label}
              isSelected={selectedFields.includes(option.label)}
              onSelect={() =>
                handleSelect(option.label, selectedFields, setSelectedFields)
              }
              icon={option.icon}
            />
          ))}
        </div>

        {/* Document Selection */}
        <h2 className="text-lg font-bold mt-8 mb-4 text-center">
          Select Required Documents
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {documentOptions.map((option) => (
            <SelectableButton
              key={option.label}
              label={option.label}
              isSelected={selectedDocuments.includes(option.label)}
              onSelect={() =>
                handleSelect(
                  option.label,
                  selectedDocuments,
                  setSelectedDocuments
                )
              }
              icon={option.icon}
            />
          ))}
        </div>

        {/* Selected Fields Display */}
        <div className="mt-6 w-full max-w-2xl mx-auto p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-lg font-bold mb-2">Selected Fields:</h2>
          {selectedFields.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selectedFields.map((field) => (
                <div
                  key={field}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg inline-block cursor-pointer"
                  onClick={() =>
                    handleSelect(field, selectedFields, setSelectedFields)
                  }
                >
                  {field} ❌
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No fields selected</p>
          )}
        </div>

        {/* Selected Documents Display */}
        <div className="mt-6 w-full max-w-2xl mx-auto p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-lg font-bold mb-2">Required Documents:</h2>
          {selectedDocuments.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selectedDocuments.map((doc) => (
                <div
                  key={doc}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-lg inline-block cursor-pointer"
                  onClick={() =>
                    handleSelect(doc, selectedDocuments, setSelectedDocuments)
                  }
                >
                  {doc} ❌
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No documents selected</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;