import React, { useState } from "react";
import { assets, filtersImg, productsImg } from "../../assets";

export const Header = () => {
  const [cart, setCart] = useState(false);
  return (
    <div className="flex flex-col gap-3 pb-4">
      {/* header top */}
      <div className="flex justify-between items-center p-2 bg-gradient-to-l from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6] px-30 py-1 text-white text-sm">
        <div className="flex items-center gap-2">
          <i>
            <img src={assets.MoneyIcon} alt="Call Icon" />
          </i>
          <p>
            Nhập mã{" "}
            <span className="font-bold  pr-1" style={{ color: "#FFD666" }}>
              NEWBIE
            </span>
            giảm ngay 10% cho lần đầu mua hàng.
          </p>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <i>
              <img src={assets.CallIcon} alt="Money Icon" />
            </i>
            <p className="">
              Hotline:{" "}
              <span className="font-bold" style={{ color: "#FFD666" }}>
                0283 760 7607
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <i>
              <img src={assets.DeviceIcon} alt="Device Icon" />
            </i>
            <span>Tải ứng dụng</span>
          </div>
        </div>
      </div>
      <div className="px-30">
        {/* Line */}
        <div className="border border-[#FFFFFF33] "></div>
        {/* header middle */}
        <div className="flex justify-between items-center pb-4 gap-8 ng-white">
          <div>
            <a href="/">
              <img src={assets.Logo} alt="Logo" />
            </a>
          </div>
          <div className="w-1/2">
            <div className="flex items-center border-2 border-[#0373F3] rounded-full pr-2 pl-5 py-2 bg-white">
              <input
                type="text"
                placeholder="Tìm sản phẩm"
                className=" h-[32px] w-full focus:outline-none bg-transparent border-none"
              />
              <button className="flex items-center justify-center bg-transparent mr-2 p-0 cursor-pointer">
                <img src={assets.Capture} alt="Capture" className="" />
              </button>
              <button className="flex items-center justify-center bg-[#0373F3] hover:bg-blue-600 transition-colors cursor-pointer text-white rounded-full ml-2 px-6 py-3">
                <img src={assets.Search} alt="Search" className="" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer h-9">
              <i>
                <img src={assets.FlatVn} alt="FlatVn" />
              </i>
              <p>VI</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer relative group">
              <i>
                <img src={assets.Cart} alt="Cart Icon" />
              </i>
              <p>Giỏ hàng</p>
              <div
                className="absolute top-[100%] left-0 w-[214px] mt-4 bg-white border border-gray-200 rounded-lg shadow-lg
               opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200
               before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4 z-index-10"
              >
                {!cart && (
                  <div className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <div className="p-2">
                      <img
                        src={productsImg.Product2}
                        alt="Product1"
                        className="rounded-t-lg w-[214px] cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col gap-4 px-3 pb-5 pt-2">
                      <img
                        src={assets.Badge}
                        alt="Badge"
                        className="w-[124px]"
                      />
                      <h2
                        className="font-semibold line-clamp-2"
                        title="Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)"
                      >
                        Lọc gió động cơ Air Filter – Chevrolet Colorado,
                        Trailblazer (52046262)
                      </h2>
                      <div className="flex flex-col gap-2">
                        <p className="text-[#B71D18] text-[20px] font-semibold">
                          299,000 <span className="underline">đ</span>
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="text-[#919EAB] text-[14px] line-through">
                            329,000 <span className="underline">đ</span>
                          </p>
                          <p className="text-[#B71D18]">-10%</p>
                        </div>
                        <button className="rounded-sm bg-[#E6F1FF] px-3 py-3 w-full text-[#025FCA] font-semibold hover:bg-blue-200 transition-colors cursor-pointer">
                          Mua ngay
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* <div className="p-4">
                  <p className="font-bold">Giỏ hàng của bạn</p>
                  <p className="text-sm text-gray-500">
                    Bạn chưa có sản phẩm nào trong giỏ hàng.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <i>
                <img src={assets.User} alt="User Icon" />
              </i>
              <p>Tài khoản</p>
            </div>
          </div>
        </div>
        {/* Line */}
        <div className="border border-[#FFFFFF33]"></div>
        {/* header bottom */}
        <div className="flex items-center gap-6 w-full">
          <div className="relative inline-block text-left group">
            <button className="flex items-center gap-2 bg-[#0155C6] rounded-lg px-4 py-3 text-white font-bold cursor-pointer">
              <img src={assets.Menu} alt="Menu" />
              <span className="pr-4">Danh mục sản phẩm</span>
              <img src={assets.Dropdown} alt="Dropdown" />
            </button>
            <div
              className="absolute left-0 mt-2 w-[900px] md:w-[1000px] lg:w-[1200px] bg-white border border-gray-200 rounded-br-md rounded-bl-md shadow-lg
               opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200
               before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-2"
            >
              <div className="grid grid-cols-[300px_1fr]">
                <div className="pb-10 ">
                  <ul>
                    <li className="flex items-center gap-2 px-4 py-1 hover:bg-[#F4F6F8] hover:border-l-[4px] hover:border-l-[#0373F3] cursor-pointer hover:font-bold hover:text-[#0373F3]">
                      <img src={filtersImg.Dau} alt="Dau" className="w-10" />
                      Bộ Lọc Dầu
                      <img src={assets.ArrowRight} alt="" className="ml-auto" />
                    </li>
                    <li className="flex items-center gap-2 px-4 py-1 hover:bg-[#F4F6F8] hover:border-l-[4px] hover:border-l-[#0373F3] cursor-pointer hover:font-bold hover:text-[#0373F3]">
                      <img
                        src={filtersImg.KhongKhi}
                        alt="KhongKhi"
                        className="w-10"
                      />
                      Bộ Lọc Không Khí
                      <img src={assets.ArrowRight} alt="" className="ml-auto" />
                    </li>
                    <li className="flex items-center gap-2 px-4 py-1 hover:bg-[#F4F6F8] hover:border-l-[4px] hover:border-l-[#0373F3] cursor-pointer hover:font-bold hover:text-[#0373F3]">
                      <img
                        src={filtersImg.NhienLieu}
                        alt="NhienLieu"
                        className="w-10"
                      />
                      Bộ Lọc Nhiên Liệu
                      <img src={assets.ArrowRight} alt="" className="ml-auto" />
                    </li>
                    <li className="flex items-center gap-2 px-4 py-1 hover:bg-[#F4F6F8] hover:border-l-[4px] hover:border-l-[#0373F3] cursor-pointer hover:font-bold hover:text-[#0373F3]">
                      <img src={filtersImg.Cabin} alt="Cabin" className="w-10" />
                      Bộ Lọc Trong Cabin
                      <img src={assets.ArrowRight} alt="" className="ml-auto" />
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-between items-center gap-4 p-6 bg-[#F4F6F8]">
                  <div className="grid grid-cols-3 gap-4 w-full pb-7 border-b border-[#919EAB3D]">
                    <div className="flex items-center gap-4 bg-white px-4 py-3 rounded-lg cursor-pointer">
                      <img
                        src={filtersImg.KhongKhi}
                        alt="KhongKhi"
                        className="w-10"
                      />
                      Bộ lọc không khí
                    </div>
                    <div className="flex items-center gap-4 bg-white px-4 py-3 rounded-lg cursor-pointer">
                      <img
                        src={filtersImg.NhienLieu}
                        alt="NhienLieu"
                        className="w-10"
                      />
                      Bộ lọc nhiên liệu
                    </div>
                    <div className="flex items-center gap-4 bg-white px-4 py-3 rounded-lg cursor-pointer">
                      <img src={filtersImg.Cabin} alt="Cabin" className="w-10" />
                      Bộ lọc trong cabin
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center w-full">
                    <div className="flex justify-between items-center w-full">
                      <h2 className="text-lg font-semibold">
                        Sản Phẩm Bán Chạy
                      </h2>
                      <a
                        href="/"
                        className="flex items-center gap-2 text-[#0373F3] font-semibold"
                      >
                        Xem tất cả
                        <img
                          src={assets.ArrowDoubleRight}
                          alt="ArrowDoubleRight"
                          className=""
                        />
                      </a>
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                      <div className="flex flex-col bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow">
                        <div className="p-2">
                          <img
                            src={productsImg.Product1}
                            alt="Product1"
                            className="rounded-t-lg w-[184px]"
                          />
                        </div>
                        <div className="flex flex-col gap-4 px-3 pb-5 pt-2">
                          <h2
                            className="font-semibold line-clamp-2"
                            title="Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)"
                          >
                            Lọc gió động cơ Air Filter – Chevrolet Colorado,
                            Trailblazer (52046262)
                          </h2>
                          <div>
                            <p className="text-[#B71D18] text-[20px] font-semibold">
                              299,000 <span className="underline">đ</span>
                            </p>
                            <div className="flex items-center gap-2">
                              <p className="text-[#919EAB] text-[14px] line-through">
                                329,000 <span className="underline">đ</span>
                              </p>
                              <p className="text-[#B71D18]">-10%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-between gap-10">
            <div>
              <ul className="flex items-center gap-4">
                <li>
                  <a href="" className="font-medium">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="" className="font-medium">
                    Bài viết
                  </a>
                </li>
                <li>
                  <a href="" className="font-medium">
                    Catalog
                  </a>
                </li>
                <li>
                  <a href="" className="font-medium">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                <li>
                  <a href="" className="font-medium flex items-center gap-2">
                    <img src={assets.Times} alt="Times" />
                    Hỗ trợ 24/7
                  </a>
                </li>
                <li>
                  <a href="" className="font-medium flex items-center gap-2">
                    <img src={assets.Hand_Icon} alt="Hand_Icon" />
                    Miễn phí vận chuyển
                  </a>
                </li>
                <li>
                  <a href="" className="font-medium flex items-center gap-2">
                    <img src={assets.Truck_Icon} alt="Truck_Icon" />
                    Giao hàng nhanh 2h
                  </a>
                </li>
                <li>
                  <a href="" className="font-medium flex items-center gap-2">
                    <img src={assets.Subtract} alt="Subtract" />
                    30 ngày đổi trả
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
