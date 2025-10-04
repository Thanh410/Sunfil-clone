export const tabs = [
  { id: "related", label: "Liên quan" },
  { id: "bestseller", label: "Bán chạy" },
  { id: "newest", label: "Mới nhất" },
  { id: "featured", label: "Nổi bật" },
];

export const filtersConfig = {
  category: {
    title: "Danh mục sản phẩm",
    type: "checkbox",
    options: [
      { label: "Lọc gió Động cơ - Air Filter", count: 24 },
      { label: "Lọc Nhiên Liệu - Fuel Filter", count: 24 },
      { label: "Bộ lọc dầu", count: 24 },
      { label: "Chưa phân loại", count: 24 },
      { label: "Khác", count: 24 },
    ],
  },
  priceRange: {
    title: "Khoảng giá",
    type: "button",
    options: [
      { label: "Dưới 100,000 đ", value: "below100" },
      { label: "100,000 đ - 300,000 đ", value: "100-300" },
      { label: "300,000 đ - 500,000 đ", value: "300-500" },
      { label: "Trên 500,000 đ", value: "above500" },
    ],
  },
  brand: {
    title: "Thương hiệu",
    type: "checkbox",
    options: [
      { label: "Asakashi", count: 24 },
      { label: "Bosch", count: 24 },
      { label: "Hyundai", count: 24 },
    ],
  },
  year: {
    title: "Năm sản xuất",
    type: "checkbox",
    options: [
      { label: "2021", count: 24 },
      { label: "2020", count: 24 },
      { label: "2019", count: 24 },
      { label: "2018", count: 24 },
    ],
  },
  origin: {
    title: "Xuất xứ",
    type: "checkbox",
    options: [
      { label: "Đức", count: 24 },
      { label: "Nhật Bản", count: 24 },
      { label: "Trung Quốc", count: 24 },
    ],
  },
};