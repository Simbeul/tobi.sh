import React from "react";

export const Fun: React.FC<{
  experiment: string;
  description: string;
  url: string;
  tech: string;
}> = ({ url, tech, experiment, description }) => {
  return (
    <tr className="group bg-white hover:bg-gray-100 transform duration-150 border-b last:border-0">
      <td className="px-6 py-4 whitespace-no-wrap  border-gray-200">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium text-gray-900">
              {experiment}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-normal  border-gray-200 hidden lg:table-cell">
        <div className="text-sm leading-5 text-gray-800">{description}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap  border-gray-200 text-gray-600 text-sm">
        <span className="">{tech}</span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap  border-gray-200 text-gray-600 text-sm">
          <img
            className="text-red-200 ml-auto opacity-0 transform duration-200 group-hover:opacity-100 h-3"
            src="./arrow-right.svg"
          />
      </td>
    </tr>
  );
};
