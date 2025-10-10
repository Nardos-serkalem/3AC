import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminNews = () => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [paragraphs, setParagraphs] = useState([""]);
  const [submitting, setSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleParagraphChange = (index, value) => {
    const copy = [...paragraphs];
    copy[index] = value;
    setParagraphs(copy);
  };

  const addParagraph = () => setParagraphs((p) => [...p, ""]);
  const removeParagraph = (index) => {
    if (paragraphs.length === 1) return;
    setParagraphs((p) => p.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!imageFile) {
      toast.error("Please upload an image");
      return;
    }

    setSubmitting(true);

    try {
      // Build form data
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", imageFile);
      // Join paragraphs into an array field as JSON
      formData.append(
        "paragraphs",
        JSON.stringify(paragraphs.filter((p) => p.trim()))
      );

      // POST to backend admin endpoint (adjust URL if different)
      // The backend should accept multipart/form-data and handle image upload
      const res = await axios.post("/api/news", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("News uploaded successfully");

      // Reset form
      setTitle("");
      setImageFile(null);
      setImagePreview(null);
      setParagraphs([""]);

      // Optional: do something with response
      console.log("News created:", res.data);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Upload failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Create News Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 text-black bg-gray-100 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter news title"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Image
          </label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="order w-full md:w-1/4 text-black bg-gray-100 border-gray-300 p-2 rounded cursor-pointer" />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="preview"
              className="mt-3 w-full max-h-60 object-cover rounded"
            />
          )}
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Content
          </label>
          {paragraphs.map((p, idx) => (
            <div key={idx} className="mb-3">
              <textarea
                value={p}
                onChange={(e) => handleParagraphChange(idx, e.target.value)}
                className="w-full border rounded px-3 py-2 text-black bg-gray-100 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none min-h-[80px]"
                placeholder={`Paragraph ${idx + 1}`}
              />
              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => removeParagraph(idx)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Remove
                </button>

                {idx === paragraphs.length - 1 && (
                  <button
                    type="button"
                    onClick={addParagraph}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Add paragraph
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={submitting}
            className={`px-5 py-2 rounded bg-blue-600 text-white ${
              submitting ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {submitting ? "Uploading..." : "Create News"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminNews;
