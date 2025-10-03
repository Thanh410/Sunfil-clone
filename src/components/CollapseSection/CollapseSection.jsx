import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
export default function CollapseSection({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col p-3 gap-3 border-t border-[#919EAB33]">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className="font-semibold text-[18px]">{title}</h2>
        {open ? (
          <ChevronDown size={18} className="text-gray-600" />
        ) : (
          <ChevronUp size={18} className="text-gray-600" />
        )}
      </div>

      {/* Nội dung */}
      {open && <div className="flex flex-col gap-2">{children}</div>}
    </div>
  );
}
