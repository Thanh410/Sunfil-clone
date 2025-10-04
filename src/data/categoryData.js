import { filtersImg, productsImg } from "../assets";

export const categoryData = {
  "Bộ Lọc Dầu": {
    filters: [
      { name: "Bộ lọc dầu xe máy", img: filtersImg.Dau },
      { name: "Bộ lọc dầu ô tô", img: filtersImg.Dau },
      { name: "Lọc dầu thủy lực", img: filtersImg.Dau },
    ],
    products: [
      {
        id: 1,
        img: productsImg.Product1,
        title: "Lọc dầu động cơ Honda City",
        price: 250000,
        oldPrice: 290000,
        discount: "-14%",
      },
    ],
  },
  "Bộ Lọc Không Khí": {
    filters: [
      { name: "Bộ lọc không khí xe hơi", img: filtersImg.KhongKhi },
      { name: "Lọc gió điều hòa", img: filtersImg.KhongKhi },
      { name: "Lọc gió động cơ", img: filtersImg.KhongKhi },
    ],
    products: [
      {
        id: 2,
        img: productsImg.Product2,
        title: "Lọc không khí Toyota Fortuner",
        price: 299000,
        oldPrice: 329000,
        discount: "-10%",
      },
    ],
  },
  "Bộ Lọc Nhiên Liệu": {
    filters: [
      { name: "Lọc nhiên liệu dầu diesel", img: filtersImg.NhienLieu },
      { name: "Lọc nhiên liệu xăng", img: filtersImg.NhienLieu },
    ],
    products: [
      {
        id: 3,
        img: productsImg.Product1,
        title: "Lọc nhiên liệu Hyundai Tucson",
        price: 350000,
        oldPrice: 390000,
        discount: "-10%",
      },
    ],
  },
  "Bộ Lọc Trong Cabin": {
    filters: [
      { name: "Lọc cabin kháng khuẩn", img: filtersImg.Cabin },
      { name: "Lọc cabin carbon", img: filtersImg.Cabin },
    ],
    products: [
      {
        id: 4,
        img: productsImg.Product2,
        title: "Lọc cabin Mazda CX5",
        price: 320000,
        oldPrice: 360000,
        discount: "-11%",
      },
    ],
  },
};
