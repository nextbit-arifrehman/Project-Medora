import React from "react";
import { useLoaderData } from "react-router";

const Blogs = () => {
  const data = useLoaderData();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Blog Questions & Answers
      </h1>

      <div className="grid gap-6">
        {data.map(({ id, question, answer }) => (
          <div
            key={id} 
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b">
                  <th className="py-2 pr-4 text-gray-600">Question:</th>
                  <td className="py-2 font-medium">{question}</td>
                </tr>
                <tr>
                  <th className="py-2 pr-4 text-gray-600">Answer:</th>
                  <td className="py-2">{answer}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
