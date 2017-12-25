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
                    key: 'PARENT_SPAN'
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
                                        this.show(params.row)
                                    }
                                }
                            }, '详情')
                        ])
                    }
                }
            ],
            spanList: [],
            modal: false,
            loading: false,
            spanDetail: {
                spanError: [],
                spanInfo: [],
                spanWarn: []
            }
        }
    },
    methods: {
        show (spanItem) {
            let spanKey = `SPAN:${spanItem.SPAN_ID}`;
            this.modal = true;
            // this.loadingBar.start();
            console.log(this);
            this.axios.get(`/v0/trace/span/logs/${this.traceKey}/${spanKey}`).then(res => {
                if (res.status === 200) {
                    console.log(res);
                    this.spanDetail = res.data;
                }
            })
        },
        toLoading() {
            var _this = this;
            this.loading = true;
            
            this.getSpans().then(res => {
                this.loading = false;
            });
        },
        getSpans() {

            return new Promise((resolve, reject) => {
                this.axios.get(`/v0/trace/spans/${this.traceKey}`).then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        this.spanList = res.data.filter(item => {
                            return Object.keys(item).length;
                        });
                        resolve(res);
                    } else {
                        reject(res)
                    }
                }).catch(err => {
                    reject(err);
                })
            })
            
        }
    },
    mounted: function(){
        this.loading = true;
        this.traceKey = `TRACE:${this.$route.params.traceId}`;
        this.getSpans().then(res => {
            this.loading = false;
        });
    }
}