import axios from "axios";
import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = () => {
    axios
      .get("http://localhost:5000/api/stores")
      .then((response) => {
        setStores(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stores:", error);
      });
  };

  const handleRating = (storeId, rating) => {
    axios
      .post(`http://localhost:5000/api/stores/${storeId}/rate`, {
        userId: "1234", // Replace with actual user ID
        rating: rating,
      })
      .then(() => {
        fetchStores(); // Re-fetch updated store data after rating
      })
      .catch((error) => console.error("Error submitting rating:", error));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        User Dashboard
      </h1>

      {stores.length === 0 ? (
        <p className="text-center text-gray-600">No stores available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div key={store.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {store.name} - {store.location}
              </h2>
              <p className="text-gray-600 mt-2">
                <strong>Owner:</strong> {store.owner}
              </p>
              <p className="mt-2 text-yellow-500 text-lg">
                ⭐ <strong>Avg Rating:</strong> {store.avgRating} / 5
              </p>

              <div className="mt-4">
                <p className="text-gray-600 font-medium">Rate this store:</p>
                <div className="flex space-x-2 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRating(store.id, star)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded transition"
                    >
                      {star} ⭐
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
