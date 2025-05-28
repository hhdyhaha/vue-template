import axiosInstance from '@/utils/http/index'

// 查询栏目管理列表
export const getColumnManagementListApi = (platformType: string) => {
  return axiosInstance({
    url: `/website/content/list`,
    method: 'get',
    params: {
      platformType,
    },
  })
}

interface AllNewsListByIdParams {
  kindId: string
  pageNum: string
  pageSize: string
}

// 根据栏目编号 获取新闻列表
export const getAllNewsListByIdApi = (data: AllNewsListByIdParams) => {
  return axiosInstance({
    url: `/website/news/getNewsListById`,
    method: 'post',
    data: data,
  })
}
