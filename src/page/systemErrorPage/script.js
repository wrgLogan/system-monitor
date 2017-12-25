export default {
    data() {
        return {
            //  配置Table的参数
            columns: [
                {
                    title: '链路ID',
                    key: 'traceId'
                },
                {
                    title: '阶段ID',
                    key: 'spanId'
                },
                {
                    title: '阶段',
                    key: 'spanName'
                },
                {
                    title: '报错时间',
                    key: 'errorTime',
                    render: (h, params) => {
                        return h('Span', {}, new Date(params.row.errorTime).toLocaleString())
                    }
                },
                {
                    title: '是否通知',
                    key: 'notify',
                    render: (h, params) => {
                        return h('Span', {}, params.row.notify ? '是' : '否')
                    }
                },
                {
                    title: '操作',
                    key: 'action',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.row);
                                    }
                                }
                            }, '详情')
                        ])
                    }
                }
            ],
            errList: [],  // 错误列表
            modal: false,  // 是否现实modal
            loading: false,
            pagination: {
                pageNumber: 1,
                pageSize: 10,
                totalCount: 0
            },
            errorStackTrace: ''
        }
    },
    methods: {
        show (errItem) {
            console.log(errItem);
            this.modal = true;
            this.errorStackTrace = errItem.errorStackTrace;
        },
        toLoading() {
            var _this = this;
            this.loading = true;
            this.getErrors().then( res => {
                this.loading = false;
            });
        },
        getErrors() {
            var _this = this;

            return new Promise((resolve, reject) => {
                this.axios.get(`/v0/trace/errors/${this.pagination.pageNumber}`).then(res => {
                    console.log(res);
                    if (res.status == 200) {
                        this.errList = res.data.data;
                        this.pagination = {
                            pageNumber: res.data.pageNumber,
                            pageCount: res.data.pageCount,
                            pageSize: res.data.pageSize,
                            totalCount: res.data.totalCount
                        }
                        resolve(res);
                    } else {
                        reject(res)
                    }
                }).catch( err => {
                    reject(err);
                })
            })
            
        },
        onPageChange(page) {
            console.log(page);
            this.loading = true;
            this.pagination.pageNumber = page;
            this.getErrors().then( res => {
                this.loading = false;
            });
        }
    },
    mounted: function(){
        // console.log(this);
        this.getErrors();
    }
}