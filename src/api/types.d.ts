export type PageResult = {
  data?: {
    /** 列表数据 */
    list: Array<any>;
    /** 总数 */
    total?: number;
    /** 分页 */
    pageSize: number;
    /** 总数 */
    pageNum: number;
  };
};

export type ListResult = {
  data?: Array<any>;
};
