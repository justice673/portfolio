"use client";
import { useState, useRef } from "react";
import { Upload, Link, X, Save } from "lucide-react";
import { Toaster, toast } from "sonner";
import Image from "next/image";

export default function NewProduct() {
  const [imageUploadMode, setImageUploadMode] = useState("url");
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setFormData((prev) => ({ ...prev, image: file.name }));
    }
  };

  const handleImageUrlChange = (url) => {
    setImagePreview(url);
    setFormData((prev) => ({ ...prev, image: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        image: imagePreview,
        category: formData.category,
        // stock: parseInt(formData.stock),
      };

      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) throw new Error("Failed to create product");
      toast.success("Realization created successfully!");
      clearForm();
    } catch (err) {
      console.error("Failed to save product:", err);
      toast.error("Failed to save Realization. Please try again.");
    }
  };

  const clearForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      image: "",
      category: "",
    //   stock: "",
    });
    setImagePreview("");
    setImageUploadMode("url");
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="pt-20 pb-10 px-4">
          <div className="max-w-3xl mx-auto shadow-xl p-8 pt-40">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Add New Realization
              </h1>
              <p className="text-gray-600 mt-2">
                Fill in the details to add a new realization to your portfolio
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload Section */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Realization Image
                </label>

                {/* Image Preview */}
                {imagePreview && (
                  <div className="relative w-full h-64  overflow-hidden">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview("");
                        setFormData((prev) => ({ ...prev, image: "" }));
                      }}
                      className="absolute top-2 right-2 p-2 bg-red-500 text-white  hover:bg-red-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}

                {/* Image Input Options */}
                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    width="100%"
                    height="100%"
                    onClick={() => setImageUploadMode("url")}
                    className={`flex items-center gap-2 px-6 py-3  font-medium transition-all ${
                      imageUploadMode === "url"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Link size={20} />
                    URL
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageUploadMode("upload")}
                    className={`flex items-center gap-2 px-6 py-3  font-medium transition-all ${
                      imageUploadMode === "upload"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Upload size={20} />
                    Upload
                  </button>
                </div>

                {/* Image Input */}
                {imageUploadMode === "url" ? (
                  <input
                    type="url"
                    placeholder="Enter image URL"
                    className="w-full px-4 py-3 border  focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={formData.image}
                    onChange={(e) => handleImageUrlChange(e.target.value)}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full">
                    <label className="w-full flex flex-col items-center px-4 py-8 bg-gray-50 text-gray-500  border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-100 transition-all">
                      <Upload size={24} />
                      <span className="mt-2 text-base">
                        Click to upload image
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Realization(Project) Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Pet website"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technologies Used
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    placeholder="e.g. Next.js, React, Tailwind CSS"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    required
                    step="0.01"
                    className="w-full px-4 py-3 border text-black  focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Describe your product..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={clearForm}
                  className="px-6 py-3 text-gray-700 bg-gray-100  font-medium hover:bg-gray-200 transition-all"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-indigo-600  font-medium hover:opacity-90 transition-all flex items-center gap-2"
                >
                  <Save size={20} />
                  Save Realization
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


      {/* Sonner Toaster */}
      <Toaster position="top-right" />
    </>
  );
}
