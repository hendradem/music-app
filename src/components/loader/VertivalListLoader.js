import React from "react";

function VertivalListLoader({ addMarginTop }) {
  return (
    <div className={`space-y-2 animate-pulse ${addMarginTop ? "mt-2" : ""}`}>
      {addMarginTop && (
        <div class="flex h-[26px] bg-[#424242] rounded-full items-center w-[250px] space-x-2 mb-5"></div>
      )}

      <div class="p-2 rounded-lg bg-[#424242]">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#1f1f1f]"></div>
          </div>
          <div class="flex-1 min-w-0 space-y-2">
            <div class="bg-[#1f1f1f] w-[40%] h-3"></div>
            <div class="bg-[#1f1f1f] w-[30%] h-2"></div>
          </div>
        </div>
      </div>
      <div class="p-2 rounded-lg bg-[#424242] ">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#1f1f1f]"></div>
          </div>
          <div class="flex-1 min-w-0 space-y-2">
            <div class="bg-[#1f1f1f] w-[40%] h-3"></div>
            <div class="bg-[#1f1f1f] w-[30%] h-2"></div>
          </div>
        </div>
      </div>
      <div class="p-2 rounded-lg bg-[#424242] ">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#1f1f1f]"></div>
          </div>
          <div class="flex-1 min-w-0 space-y-2">
            <div class="bg-[#1f1f1f] w-[40%] h-3"></div>
            <div class="bg-[#1f1f1f] w-[30%] h-2"></div>
          </div>
        </div>
      </div>
      <div class="p-2 rounded-lg bg-[#424242] ">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#1f1f1f]"></div>
          </div>
          <div class="flex-1 min-w-0 space-y-2">
            <div class="bg-[#1f1f1f] w-[40%] h-3"></div>
            <div class="bg-[#1f1f1f] w-[30%] h-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VertivalListLoader;
