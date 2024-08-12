/* eslint-disable react/prop-types */
// Modal.js
import { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, onAddCard, onEditCard, type, card }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [image, setImage] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [price, setPrice] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isOpen && type === "edit" && card) {
      setTitle(card.title);
      setName(card.name);
      setAvatar(card.avatar);
      setImage(card.image);
      setJobPosition(card.jobPosition);
      setPrice(card.price);
      setWorkplace(card.workplace);
      setDescription(card.description);
    } else if (!isOpen) {
      // Reset all fields when the modal is closed
      resetForm();
    }
  }, [type, card, isOpen]);

  const resetForm = () => {
    setTitle("");
    setName("");
    setAvatar("");
    setImage("");
    setJobPosition("");
    setPrice("");
    setWorkplace("");
    setDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: type === "add" ? Date.now().toString() : card.id,
      type: "cardProduct",
      title,
      name,
      avatar,
      image,
      jobPosition,
      price,
      workplace,
      description,
    };
    if (type === "add") {
      onAddCard(newCard);
    } else {
      onEditCard(newCard);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center z-50 overflow-auto">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">
          {type === "add" ? "Tambah Card" : "Edit Card"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Profile Image URL
            </label>
            <input
              type="text"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Card Image URL
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Job Position
            </label>
            <input
              type="text"
              value={jobPosition}
              onChange={(e) => setJobPosition(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Workplace</label>
            <input
              type="text"
              value={workplace}
              onChange={(e) => setWorkplace(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg text-gray-800 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              {type === "add" ? "Add Card" : "Update Card"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
