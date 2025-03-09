import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/contact");
      setMessages(response.data || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
      setError("Failed to fetch messages. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/contact/${id}`);
      setMessages((prevMessages) => prevMessages.filter((msg) => msg._id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch =
      msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.profession.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate = startDate && endDate
      ? new Date(msg.submittedAt) >= new Date(startDate) && new Date(msg.submittedAt) <= new Date(endDate)
      : true;
    return matchesSearch && matchesDate;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-green-700 mb-6">Admin Dashboard</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl text-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Total Messages: {messages.length}</h2>
      </div>
      <div className="flex gap-4 mb-6 w-full max-w-4xl justify-center">
        <input
          type="text"
          placeholder="Search by subject or profession"
          className="border p-3 rounded w-1/3 text-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="date"
          className="border p-3 rounded text-lg"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="border p-3 rounded text-lg"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      {loading ? (
        <p className="text-gray-600 text-lg">Loading messages...</p>
      ) : error ? (
        <p className="text-red-600 text-lg">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl justify-center">
          {filteredMessages.length > 0 ? (
            filteredMessages.map((msg) => (
              <div key={msg._id} className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col text-left">
                <h2 className="text-2xl font-bold text-green-800 mb-2">{msg.fullName}</h2>
                <p className="text-lg text-gray-700"><strong>Profession:</strong> {msg.profession}</p>
                <p className="text-lg text-gray-700"><strong>Subject:</strong> {msg.subject}</p>
                <p className="text-lg text-gray-700"><strong>Message:</strong> {msg.message}</p>
                <p className="text-gray-600 text-sm mt-3">{new Date(msg.submittedAt).toLocaleDateString()}</p>
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-xl"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg">No messages found.</p>
          )}
        </div>
      )}
    </div>
  );
}
