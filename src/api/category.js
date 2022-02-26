import request from "@/utils/axios";

/**
 * 获取所有分类(header-top 分类数据)
 * @returns Promise
 */
export const findAllcategory = () => {
  return request("home/category/head", "GET");
};
