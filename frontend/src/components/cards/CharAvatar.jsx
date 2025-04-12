import React from "react";
import { getInitials } from "../../utils/helpers";
const CharAvatar = ({ name, width, height, style }) => {
  return (
    <div
      className={`${width || w - 12} ${height || h - 12} ${
        style || ""
      } flex items-center justify-center rounded-full text-gray-900 font-medium bg-gray-100`}
    >
      {getInitials(name || "")}
    </div>
  );
};

export default CharAvatar;
