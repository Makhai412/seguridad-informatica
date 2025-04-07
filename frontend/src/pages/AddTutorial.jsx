import React, { useState } from "react";
import TutorialService from "../services/tutorial.service";
 
function AddTutorial() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
 
  const saveTutorial = () => {
    const data = { title, description };
    TutorialService.create(data)
      .then((response) => {
        console.log(response.data);
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };
 
  const newTutorial = () => {
    setTitle("");
    setDescription("");
    setSubmitted(false);
  };
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="max-w-sm w-full p-4 bg-white rounded shadow">
    {submitted ? (
      <div className="text-center">
        <h4 className="font-bold text-green-600 mb-4">
          Tutorial submitted successfully!
        </h4>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={newTutorial}
        >
          Add Another
        </button>
      </div>
    ) : (
      <div>
        <h4 className="font-bold text-xl mb-4 text-center">Add Tutorial</h4>

        <div className="mb-2">
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full px-2 py-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1 font-medium">Description</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full px-2 py-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          className="bg-green-500 text-white px-3 py-1 rounded mt-2 w-full"
          onClick={saveTutorial}
        >
          Submit
        </button>
      </div>
    )}
  </div>
</div>

  );
}
 
export default AddTutorial;