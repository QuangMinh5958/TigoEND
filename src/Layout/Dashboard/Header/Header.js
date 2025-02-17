import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex">
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faTableColumns}
          className="w-10 text-1xl -ml-2"
        />
        <div className="leading-none ml-4">
          <p className="text-lg font-medium ">Dashboard</p>
          <p className="text-xs">March 12, THU</p>
        </div>
      </div>
      <div className="relative w-full max-w-96 ml-6">
        <input
          placeholder="Go to Search"
          className="border rounded-full w-full px-2 py-1 focus:outline-none"
        />
        <div className="absolute right-3 top-1">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  );
};

export default Header;
