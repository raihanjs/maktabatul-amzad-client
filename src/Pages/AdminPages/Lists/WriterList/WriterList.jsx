import React from "react";

export default function WriterList() {
  return (
    <div>
      <div className="text-center p-5 border-b-2">
        <h3 className="text-2xl font-bold">All Books</h3>
        <p>See All Books</p>
      </div>

      {/* Allbooks Table */}
      <div className="flex justify-center mt-5 mx-5 h-screen">
        <div className="overflow-x-auto">
          <div style={{ width: "max-content" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="p-2 border border-black">Sl</th>
                  <th className="p-2 border border-black">Image</th>
                  <th className="p-2 border border-black">Title</th>
                  <th className="p-2 border border-black">Category</th>
                  <th className="p-2 border border-black">Sub Category</th>
                  <th className="p-2 border border-black">Writer</th>
                  <th className="p-2 border border-black">Translator</th>
                  <th className="p-2 border border-black">Editor</th>
                  <th className="p-2 border border-black">Publisher</th>
                  <th className="p-2 border border-black">Imported</th>
                  <th className="p-2 border border-black">Price</th>
                  <th className="p-2 border border-black">Pages</th>
                  <th className="p-2 border border-black">Stock</th>
                  <th className="p-2 border border-black">Sold</th>
                  <th className="p-2 border border-black">Edit</th>
                  <th className="p-2 border border-black">Delete</th>
                </tr>
              </thead>

              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
