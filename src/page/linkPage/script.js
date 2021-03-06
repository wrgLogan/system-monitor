export default {
    data() {
        return {
            columns: [
                {
                    title: '调用链路ID',
                    key: 'TRACE_ID'
                },
                {
                    title: '调用入口',
                    key: 'ENTRY_SPAN'
                },
                {
                    title: '开始时间',
                    key: 'START_TIME',
                    render: (h, params) => {
                        return h('Span', {}, new Date(params.row.START_TIME).toLocaleString())
                    }
                },
                {
                    title: '结束时间',
                    key: 'END_TIME',
                    render: (h, params) => {
                        return h('Span', {}, new Date(params.row.END_TIME).toLocaleString())
                    }
                },
                {
                    title: '耗时',
                    key: 'TIME_CONSUMING'
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
                                        // console.log(this);
                                        this.show(params.row);
                                    }
                                }
                            }, '查看')
                        ])
                    }
                }
            ],
            traceList: [],
            modal: false,
            loading: false,
            pagination: {
                pageNumber: 1,
                pageSize: 10,
                totalCount: 0
            },
        }
    },
    methods: {
        show (traceItem) {

            this.$switchTo(`/manage/linkinfo/${traceItem['TRACE_ID']}`);
        },
        toLoading() {
            var _this = this;
            this.loading = true;
            
            setTimeout(function() {
                _this.loading = false;
            }, 3000)
        },
        getTraces() {

            return new Promise((resolve, reject) => {
                this.axios.get(`/v0/trace/list/${this.pagination.pageNumber}`).then( res => {
                    console.log(res);
                    if (res.status === 200) {
                        this.traceList = res.data.data;
                        this.traceList = this.traceList.filter(item => {
                            return Object.keys(item).length;
                        })

                        console.log(this.traceList);
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
            this.getTraces().then( res => {
                this.loading = false;
            });
        }
    },
    mounted: function(){
        this.loading = true;
        this.getTraces().then(res => {
            this.loading = false;
        }).catch(err => {
            console.log(err);
        })
    }
}