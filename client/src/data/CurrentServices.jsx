import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CurrentServices = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const myNumber = query.get('contactnumber');

  const [gigs, setGigs] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ category: '', price: '', description: '' });

  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const res = await fetch(`https://prolinker-backend.onrender.com/api/creategig/${myNumber}`);
        const data = await res.json();
        setGigs(data.gigs);
      } catch (err) {
        alert('Failed to fetch gigs.');
      }
    };
    fetchGigs();
  }, [myNumber]);

  const handleEditClick = (index) => {
    setEditForm(true);
    setEditIndex(index);
    setFormData(gigs[index]);
  };

  const handleEditSave = async () => {
    const res = await fetch(`https://prolinker-backend.onrender.com/api/creategig/${myNumber}/${editIndex}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);

    const updatedGigs = [...gigs];
    updatedGigs[editIndex] = formData;
    setGigs(updatedGigs);
    setEditIndex(null);
    setEditForm(false);
  };

  const handleDelete = async (index) => {
    const res = await fetch(`https://prolinker-backend.onrender.com/api/creategig/${myNumber}/${index}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    alert(data.message);
    setGigs(gigs.filter((_, i) => i !== index));
  };

  const openModal = (desc) => {
    setModalContent(desc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6"> Your Services</h2>

      {gigs.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No services created yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gigs.map((gig, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 relative">
              <div className="text-gray-700 space-y-2">
                <p><strong>Category:</strong> {gig.category}</p>
                <p><strong>Price:</strong> ₹{gig.price}</p>
                <p><strong>Description:</strong>{' '}
                  {gig.description.length > 150
                    ? <>
                        {gig.description.substring(0, 150)}...
                        <button
                          onClick={() => openModal(gig.description)}
                          className="text-blue-600 underline text-sm ml-1 hover:text-blue-800"
                        >
                          View Full Description
                        </button>
                      </>
                    : gig.description}
                </p>
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleEditClick(index)}
                  className="bg-green-700 hover:bg-green-800 text-white px-4 py-1 rounded transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className=" border-2 border-red-700 hover:bg-red-100 text-red-700 px-4 py-1 rounded transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Scrollable Description Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full shadow-xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Full Description</h3>
            <div className="max-h-[60vh] overflow-y-auto pr-2">
              <p className="text-gray-700 whitespace-pre-line">{modalContent}</p>
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Popup */}
      {editForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-lg rounded-lg shadow-2xl p-6 space-y-4 relative">
            <h3 className="text-2xl font-semibold text-gray-800 text-center">Edit Service</h3>

            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a Category</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="Software Development">Software Development</option>
              <option value="Meta Ads">Meta Ads</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Graphic Designing">Graphic Designing</option>
            </select>

            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              placeholder="Price"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Description"
              rows={3}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <div className="flex gap-4 justify-end pt-2">
              <button
                onClick={handleEditSave}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
              <button
                onClick={() => setEditForm(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentServices;

