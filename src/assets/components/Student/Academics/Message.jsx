import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function Message() {
  return (
    <>
      <div className="rounded-md border-l-4 border-green-500 bg-green-100 p-4 w-full h-fit">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <ExclamationCircleIcon className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-center text-green-600">
              This is some informational text that you can use to show some
              success content
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
