import React, { useState } from "react";
import useForm from "../hooks/useForm";

function EventRegistrationForm() {
  const initialState = {
    name: "",
    email: "",
    age: "",
    attendingWithGuest: "No",
    guestName: "",
  };
  //State for submitted data

  const [submittedData, setSubmittedData] = useState(null);
  //State for submitted data

  //Destructring
  const { formData, errors, handleChange, handleSubmit } =
    useForm(initialState);

  //Destructring

  //for submit and display
  const onSubmit = (e) => {
    const formResponse = handleSubmit(e);
    if (formResponse) {
      setSubmittedData(formResponse);
    }
  };

  return (
    <div className="flex justify-center items-center  min-h-screen bg-gray-100 gap-x-4">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md "
        onSubmit={onSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">Event Registration Form</h1>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Age:
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        <div className="mb-4">
          <label
            htmlFor="attendingWithGuest"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Are you attending with a guest?
          </label>
          <select
            name="attendingWithGuest"
            id="attendingWithGuest"
            value={formData.attendingWithGuest}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          {errors.attendingWithGuest && (
            <p className="text-red-500 text-sm">{errors.attendingWithGuest}</p>
          )}
        </div>
        {formData.attendingWithGuest === "Yes" ? (
          <div>
            <label
              htmlFor="guestname"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Guest Name:
            </label>
            <input
              type="text"
              id="guestName"
              name="guestName"
              value={formData.guestName}
              onChange={handleChange}
              placeholder="Enter guest name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            {errors.guestName && (
              <p className="text-red-500 text-sm">{errors.guestName}</p>
            )}
          </div>
        ) : null}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-center">Submitted Data</h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> {submittedData.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{" "}
              {submittedData.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Age:</span> {submittedData.age}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Attending with Guest:</span>{" "}
              {submittedData.attendingWithGuest}
            </p>
            {submittedData.attendingWithGuest === "Yes" && (
              <p className="text-gray-700">
                <span className="font-semibold">Guest Name:</span>{" "}
                {submittedData.guestName}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default EventRegistrationForm;
