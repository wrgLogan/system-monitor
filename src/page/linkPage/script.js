export default {
    data() {
        return {
            columns: [
                {
                    title: '调用链路ID',
                    key: 'linkID'
                },
                {
                    title: '调用入口',
                    key: 'entrance'
                },
                {
                    title: '开始时间',
                    key: 'startTime'
                },
                {
                    title: '结束时间',
                    key: 'endTime'
                },
                {
                    title: '耗时',
                    key: 'duration',
                    render: (h, params) => {
                        // console.log(params)
                        return h('Span', {}, `${params.row.duration}ms`)
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
                                        // console.log(this);
                                        this.show(params.index)
                                    }
                                }
                            }, '详情')
                        ])
                    }
                }
            ],
            errList: [{
                linkID: '001',
                entrance: 'ABC',
                startTime: '2017/12/22 13:33',
                endTime: '2017/12/22 16:55',
                duration: '17'
            },{
                linkID: '001',
                entrance: 'ABC',
                startTime: '2017/12/22 13:33',
                endTime: '2017/12/22 16:55',
                duration: '17'
            },{
                linkID: '001',
                entrance: 'ABC',
                startTime: '2017/12/22 13:33',
                endTime: '2017/12/22 16:55',
                duration: '17'
            },{
                linkID: '001',
                entrance: 'ABC',
                startTime: '2017/12/22 13:33',
                endTime: '2017/12/22 16:55',
                duration: '17'
            },{
                linkID: '001',
                entrance: 'ABC',
                startTime: '2017/12/22 13:33',
                endTime: '2017/12/22 16:55',
                duration: '17'
            },{
                linkID: '001',
                entrance: 'ABC',
                startTime: '2017/12/22 13:33',
                endTime: '2017/12/22 16:55',
                duration: '17'
            },{
                linkID: '001',
                entrance: 'ABC',
                startTime: '2017/12/22 13:33',
                endTime: '2017/12/22 16:55',
                duration: '17'
            },{
                linkID: '001',
                entrance: 'ABC',
                startTime: '2017/12/22 13:33',
                endTime: '2017/12/22 16:55',
                duration: '17'
            },{
                linkID: '001',
                entrance: 'ABC',
                startTime: '2017/12/22 13:33',
                endTime: '2017/12/22 16:55',
                duration: '17'
            }],
            modal: false,
            loading: false
        }
    },
    methods: {
        show (index) {

            this.modal = true;
        },
        toLoading() {
            var _this = this;
            this.loading = true;
            
            setTimeout(function() {
                _this.loading = false;
            }, 3000)
        }
    },
    mounted: function(){
        // console.log(this);
    }
}