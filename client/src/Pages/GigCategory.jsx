import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { validCategories } from '../constants/validCategory'; 


const GigCategory = () => {
  const { category } = useParams();
   const navigate = useNavigate();
  const [sellers, setSellers] = useState([]);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {

    const decodedCategory = decodeURIComponent(category);

    if (!validCategories.includes(decodedCategory)) {
      setInvalid(true);
      navigate('/404');
      return;
    }

    const fetchSellers = async () => {
      try {
        const res = await fetch(`https://prolinker-backend.onrender.com/api/creategig/category/${category}`);
        const data = await res.json();
        setSellers(data.sellers || []);
      } catch (err) {
        alert('Failed to fetch sellers');
      }
    };

    fetchSellers();
  }, [category]);

  if (invalid) {
    return null;
  }


  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (description) => {
    setModalContent(description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  
  useEffect(() => {
    // Prevent background scroll when modal is open
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);





  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-white to-blue-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        <span className="text-green-600">{decodeURIComponent(category)}</span>
      </h2>

      {sellers.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No sellers found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-2 flex justify-center items-center">{seller.name}</h4>
              
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Email:</span> {seller.email}
              </p>

              <p className="text-gray-600 mb-1">
                <span className="font-medium">Contact Number:</span> {seller.number}
              </p>

              
              {seller.website && (
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Website:</span>{' '}
                  <a
                    href={seller.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {seller.website}
                  </a>
                </p>
              )}
              {seller.pdf && (
                <p className="text-gray-600">
                  <span className="font-medium">Portfolio:</span>{' '}
                  <a
                    href={`https://prolinker-backend.onrender.com/portfolios/portfolio-${seller.number}.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-600 underline hover:text-green-800"
                  >
                    View PDF
                  </a>
                </p>
              )}

              {seller.gigs
                .filter(gig => gig.category?.toLowerCase() === category?.toLowerCase())
                .map((gig, i) => (
                  <div key={i} className="bg-blue-50 rounded-md p-3 mt-3">
                    <p className="text-gray-700 mb-1">
                      <span className="font-semibold">Gig Price:</span> ₹{gig.price}
                    </p>
                    <p className="text-gray-700 mb-1">
                      <span className="font-semibold">Description:</span>{" "}
                      {gig.description.length > 150
                        ? gig.description.substring(0, 150) + "..."
                        : gig.description}
                    </p>
                    {gig.description.length > 150 && (
                      <button
                        onClick={() => openModal(gig.description)}
                        className="mt-2 text-sm text-blue-600 underline hover:text-blue-800"
                      >
                        View Full Description
                      </button>
                    )}
                  </div>
              ))}

              

            </div>

            
          ))}

      
        </div>

        

        

        
        
      )}

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
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
        )}

      

    </div>

    
  );
};

export default GigCategory;