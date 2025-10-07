import CollapseSection from "../CollapseSection/CollapseSection";

export const FilterGroup = ({ title, options, type = "checkbox", onSelect, selected }) => (
  <CollapseSection title={title}>
    <div className="flex flex-col gap-2">
      {options.map((opt, i) =>
        type === "checkbox" ? (
          <label key={i} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selected?.includes(opt.label)}
              onChange={() => onSelect(opt.label)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-[14px]">
              {opt.label}{" "}
              {opt.count && <span className="text-gray-500">({opt.count})</span>}
            </span>
          </label>
        ) : (
          <button
            key={i}
            onClick={() => onSelect(opt.label)}
            className={`p-2 w-full border text-[14px] rounded-md transition-all
              ${
                selected === opt.label
                  ? "border-[#0373F3] bg-[#EAF3FF] text-[#0373F3]"
                  : "border-[#919EAB3D] bg-white text-[#1C252E] hover:bg-[#F5F5F5]"
              }`}
          >
            {opt.label}
          </button>
        )
      )}
    </div>
  </CollapseSection>
);

