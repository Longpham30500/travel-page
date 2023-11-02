import React from "react";
import { CiGlobe } from "react-icons/ci";
import { AiTwotoneEnvironment,AiFillHeart, AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";

const Home = () => {
  return (
    <div className="max-w-[1136px] w-full mr-auto ml-auto md:px-0 px-4">
      <div className="flex flex-col gap-[20px] md:flex-row md:gap-[80px] pt-6">
        <div className="md:w-1/3 flex flex-col gap-4 px-4 py-5 border border-[#ddd]">
          <h6 className="flex">
            <CiGlobe className="h-full mr-[9px]"/> Ngôn ngữ hướng dẫn viên
          </h6>{" "}

          <ul className="pt-4 pl-[25px]">
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">English</span>
            </li>
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">Tiếng Việt</span>
            </li>
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">한국어</span>
            </li>
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">日本語</span>
            </li>
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">中文</span>
            </li>
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">русский</span>
            </li>
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">廣東話</span>
            </li>
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">Español</span>
            </li>
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">Français</span>
            </li>
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">Deutsch</span>
            </li>
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">Bahasa Indonesia</span>
            </li>
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">Italiano</span>
            </li>
            <li className="mb-4	">
              <input type="checkbox" className="mr-[9px] w-4 h-4" />
              <span className="">ไทย</span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 w-full gap-10 md:grid-cols-3">
          <div className="justify-self-center">
            <div className="relative">
              <img className="rounded-xl" src="https://image.kkday.com/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_129554/20220518023906_wuY7x/jpg"/>
              <div className="w-full flex justify-between absolute top-[11px] px-[11px]">
                <div className="flex text-[#fff]">
                  <AiTwotoneEnvironment className="h-full text-lg mr-[1px]"/>
                  <span className="text-sm">Hà Nội</span>
                </div>
                <div className="">
                  <AiOutlineHeart className="h-full text-[hsla(0,0%,100%,.6)] text-lg"/>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <div className="">
                <h3 className="">Vé Sun World Fansipan Legend | Sapa</h3>{" "}
                <div className="cursor-pointer my-1.5">
                  <span
                    title=""
                    className="text-xs text-[#36a1fa] px-2 py-1 bg-[rgba(100,179,244,.1)]">
                    Đặt ngay, sử dụng ngay
                  </span>
                </div>{" "}
                <div className="text-[#666] text-sm flex">
                  <div>
                    <svg
                      className="w-4 h-full text-[#26bec9] fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm-1.29 15.29l-3.71-3.71 1.41-1.41 2.3 2.3 6.3-6.29 1.41 1.41-7.71 7.71z" />
                    </svg>
                  </div>
                  <div className="tracking-[.2px] before:pl-1 p">
                    <span className="">4.8</span>
                    <span className="">(205)</span>{" "}
                    <span className="before:content-['|'] before:pr-2 before:pl-1">
                      {" "}
                      100K+ đã đặt
                    </span>
                  </div>
                </div>
                <div className="text-[#212121] leading-4 font-bold mt-4">
                  <p>từ VND 150,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="relative">
              <img className="rounded-xl" src="https://image.kkday.com/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_129554/20220518023906_wuY7x/jpg"/>
              <div className="w-full flex justify-between absolute top-[11px] px-[11px]">
                <div className="flex text-[#fff]">
                  <AiTwotoneEnvironment className="h-full text-lg mr-[1px]"/>
                  <span className="text-sm">Hà Nội</span>
                </div>
                <div className="">
                  <AiOutlineHeart className="h-full text-[hsla(0,0%,100%,.6)] text-lg"/>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <div className="">
                <h3 className="">Vé Sun World Fansipan Legend | Sapa</h3>{" "}
                <div className="cursor-pointer my-1.5">
                  <span
                    title=""
                    className="text-xs text-[#36a1fa] px-2 py-1 bg-[rgba(100,179,244,.1)]">
                    Đặt ngay, sử dụng ngay
                  </span>
                </div>{" "}
                <div className="text-[#666] text-sm flex">
                  <div>
                    <svg
                      className="w-4 h-full text-[#26bec9] fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm-1.29 15.29l-3.71-3.71 1.41-1.41 2.3 2.3 6.3-6.29 1.41 1.41-7.71 7.71z" />
                    </svg>
                  </div>
                  <div className="tracking-[.2px] before:pl-1 p">
                    <span className="">4.8</span>
                    <span className="">(205)</span>{" "}
                    <span className="before:content-['|'] before:pr-2 before:pl-1">
                      {" "}
                      100K+ đã đặt
                    </span>
                  </div>
                </div>
                <div className="text-[#212121] leading-4 font-bold mt-4">
                  <p>từ VND 150,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="relative">
              <img className="rounded-xl" src="https://image.kkday.com/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_129554/20220518023906_wuY7x/jpg"/>
              <div className="w-full flex justify-between absolute top-[11px] px-[11px]">
                <div className="flex text-[#fff]">
                  <AiTwotoneEnvironment className="h-full text-lg mr-[1px]"/>
                  <span className="text-sm">Hà Nội</span>
                </div>
                <div className="">
                  <AiOutlineHeart className="h-full text-[hsla(0,0%,100%,.6)] text-lg"/>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <div className="">
                <h3 className="">Vé Sun World Fansipan Legend | Sapa</h3>{" "}
                <div className="cursor-pointer my-1.5">
                  <span
                    title=""
                    className="text-xs text-[#36a1fa] px-2 py-1 bg-[rgba(100,179,244,.1)]">
                    Đặt ngay, sử dụng ngay
                  </span>
                </div>{" "}
                <div className="text-[#666] text-sm flex">
                  <div>
                    <svg
                      className="w-4 h-full text-[#26bec9] fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm-1.29 15.29l-3.71-3.71 1.41-1.41 2.3 2.3 6.3-6.29 1.41 1.41-7.71 7.71z" />
                    </svg>
                  </div>
                  <div className="tracking-[.2px] before:pl-1 p">
                    <span className="">4.8</span>
                    <span className="">(205)</span>{" "}
                    <span className="before:content-['|'] before:pr-2 before:pl-1">
                      {" "}
                      100K+ đã đặt
                    </span>
                  </div>
                </div>
                <div className="text-[#212121] leading-4 font-bold mt-4">
                  <p>từ VND 150,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="relative">
              <img className="rounded-xl" src="https://image.kkday.com/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_129554/20220518023906_wuY7x/jpg"/>
              <div className="w-full flex justify-between absolute top-[11px] px-[11px]">
                <div className="flex text-[#fff]">
                  <AiTwotoneEnvironment className="h-full text-lg mr-[1px]"/>
                  <span className="text-sm">Hà Nội</span>
                </div>
                <div className="">
                  <AiOutlineHeart className="h-full text-[hsla(0,0%,100%,.6)] text-lg"/>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <div className="">
                <h3 className="">Vé Sun World Fansipan Legend | Sapa</h3>{" "}
                <div className="cursor-pointer my-1.5">
                  <span
                    title=""
                    className="text-xs text-[#36a1fa] px-2 py-1 bg-[rgba(100,179,244,.1)]">
                    Đặt ngay, sử dụng ngay
                  </span>
                </div>{" "}
                <div className="text-[#666] text-sm flex">
                  <div>
                    <svg
                      className="w-4 h-full text-[#26bec9] fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm-1.29 15.29l-3.71-3.71 1.41-1.41 2.3 2.3 6.3-6.29 1.41 1.41-7.71 7.71z" />
                    </svg>
                  </div>
                  <div className="tracking-[.2px] before:pl-1 p">
                    <span className="">4.8</span>
                    <span className="">(205)</span>{" "}
                    <span className="before:content-['|'] before:pr-2 before:pl-1">
                      {" "}
                      100K+ đã đặt
                    </span>
                  </div>
                </div>
                <div className="text-[#212121] leading-4 font-bold mt-4">
                  <p>từ VND 150,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="relative">
              <img className="rounded-xl" src="https://image.kkday.com/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_129554/20220518023906_wuY7x/jpg"/>
              <div className="w-full flex justify-between absolute top-[11px] px-[11px]">
                <div className="flex text-[#fff]">
                  <AiTwotoneEnvironment className="h-full text-lg mr-[1px]"/>
                  <span className="text-sm">Hà Nội</span>
                </div>
                <div className="">
                  <AiOutlineHeart className="h-full text-[hsla(0,0%,100%,.6)] text-lg"/>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <div className="">
                <h3 className="">Vé Sun World Fansipan Legend | Sapa</h3>{" "}
                <div className="cursor-pointer my-1.5">
                  <span
                    title=""
                    className="text-xs text-[#36a1fa] px-2 py-1 bg-[rgba(100,179,244,.1)]">
                    Đặt ngay, sử dụng ngay
                  </span>
                </div>{" "}
                <div className="text-[#666] text-sm flex">
                  <div>
                    <svg
                      className="w-4 h-full text-[#26bec9] fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm-1.29 15.29l-3.71-3.71 1.41-1.41 2.3 2.3 6.3-6.29 1.41 1.41-7.71 7.71z" />
                    </svg>
                  </div>
                  <div className="tracking-[.2px] before:pl-1 p">
                    <span className="">4.8</span>
                    <span className="">(205)</span>{" "}
                    <span className="before:content-['|'] before:pr-2 before:pl-1">
                      {" "}
                      100K+ đã đặt
                    </span>
                  </div>
                </div>
                <div className="text-[#212121] leading-4 font-bold mt-4">
                  <p>từ VND 150,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="relative">
              <img className="rounded-xl" src="https://image.kkday.com/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_129554/20220518023906_wuY7x/jpg"/>
              <div className="w-full flex justify-between absolute top-[11px] px-[11px]">
                <div className="flex text-[#fff]">
                  <AiTwotoneEnvironment className="h-full text-lg mr-[1px]"/>
                  <span className="text-sm">Hà Nội</span>
                </div>
                <div className="">
                  <AiOutlineHeart className="h-full text-[hsla(0,0%,100%,.6)] text-lg"/>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <div className="">
                <h3 className="">Vé Sun World Fansipan Legend | Sapa</h3>{" "}
                <div className="cursor-pointer my-1.5">
                  <span
                    title=""
                    className="text-xs text-[#36a1fa] px-2 py-1 bg-[rgba(100,179,244,.1)]">
                    Đặt ngay, sử dụng ngay
                  </span>
                </div>{" "}
                <div className="text-[#666] text-sm flex">
                  <div>
                    <svg
                      className="w-4 h-full text-[#26bec9] fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm-1.29 15.29l-3.71-3.71 1.41-1.41 2.3 2.3 6.3-6.29 1.41 1.41-7.71 7.71z" />
                    </svg>
                  </div>
                  <div className="tracking-[.2px] before:pl-1 p">
                    <span className="">4.8</span>
                    <span className="">(205)</span>{" "}
                    <span className="before:content-['|'] before:pr-2 before:pl-1">
                      {" "}
                      100K+ đã đặt
                    </span>
                  </div>
                </div>
                <div className="text-[#212121] leading-4 font-bold mt-4">
                  <p>từ VND 150,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="relative">
              <img className="rounded-xl" src="https://image.kkday.com/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_129554/20220518023906_wuY7x/jpg"/>
              <div className="w-full flex justify-between absolute top-[11px] px-[11px]">
                <div className="flex text-[#fff]">
                  <AiTwotoneEnvironment className="h-full text-lg mr-[1px]"/>
                  <span className="text-sm">Hà Nội</span>
                </div>
                <div className="">
                  <AiOutlineHeart className="h-full text-[hsla(0,0%,100%,.6)] text-lg"/>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <div className="">
                <h3 className="">Vé Sun World Fansipan Legend | Sapa</h3>{" "}
                <div className="cursor-pointer my-1.5">
                  <span
                    title=""
                    className="text-xs text-[#36a1fa] px-2 py-1 bg-[rgba(100,179,244,.1)]">
                    Đặt ngay, sử dụng ngay
                  </span>
                </div>{" "}
                <div className="text-[#666] text-sm flex">
                  <div>
                    <svg
                      className="w-4 h-full text-[#26bec9] fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm-1.29 15.29l-3.71-3.71 1.41-1.41 2.3 2.3 6.3-6.29 1.41 1.41-7.71 7.71z" />
                    </svg>
                  </div>
                  <div className="tracking-[.2px] before:pl-1 p">
                    <span className="">4.8</span>
                    <span className="">(205)</span>{" "}
                    <span className="before:content-['|'] before:pr-2 before:pl-1">
                      {" "}
                      100K+ đã đặt
                    </span>
                  </div>
                </div>
                <div className="text-[#212121] leading-4 font-bold mt-4">
                  <p>từ VND 150,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
