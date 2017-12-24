export default {
    data() {
        return {
            columns: [
                {
                    title: '链路ID',
                    key: 'linkID'
                },
                {
                    title: '阶段ID',
                    key: 'stageID'
                },
                {
                    title: '阶段',
                    key: 'stage'
                },
                {
                    title: '报错时间',
                    key: 'errorTime'
                },
                {
                    title: '是否通知',
                    key: 'isReport'
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
                linkID: '430001',
                stageID: '001',
                stage: '阶段一',
                errorTime: '2017/12/21 16:17',
                isReport: '是'
            },{
                linkID: '430001',
                stageID: '001',
                stage: '阶段一',
                errorTime: '2017/12/21 16:17',
                isReport: '是'
            },{
                linkID: '430001',
                stageID: '001',
                stage: '阶段一',
                errorTime: '2017/12/21 16:17',
                isReport: '是'
            },{
                linkID: '430001',
                stageID: '001',
                stage: '阶段一',
                errorTime: '2017/12/21 16:17',
                isReport: '是'
            },{
                linkID: '430001',
                stageID: '001',
                stage: '阶段一',
                errorTime: '2017/12/21 16:17',
                isReport: '是'
            },{
                linkID: '430001',
                stageID: '001',
                stage: '阶段一',
                errorTime: '2017/12/21 16:17',
                isReport: '是'
            },{
                linkID: '430001',
                stageID: '001',
                stage: '阶段一',
                errorTime: '2017/12/21 16:17',
                isReport: '是'
            },{
                linkID: '430001',
                stageID: '001',
                stage: '阶段一',
                errorTime: '2017/12/21 16:17',
                isReport: '是'
            },{
                linkID: '430001',
                stageID: '001',
                stage: '阶段一',
                errorTime: '2017/12/21 16:17',
                isReport: '是'
            },{
                linkID: '430001',
                stageID: '001',
                stage: '阶段一',
                errorTime: '2017/12/21 16:17',
                isReport: '是'
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