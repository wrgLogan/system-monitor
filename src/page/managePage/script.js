

var methods = {
    goTo(path) {
        this.$switchTo(path);
    },
    logOut() {
    },
    toggleClick () {
        if (this.spanLeft === 5) {
            this.spanLeft = 2;
            this.spanRight = 22;
        } else {
            this.spanLeft = 5;
            this.spanRight = 19;
        }
    },
    onMenuSelect(menuIndex) {
        if (menuIndex == 1) {
            this.goTo('/manage/index')
        } else if (menuIndex == 2) {
            this.goTo('/manage/systemerror')
        } else if (menuIndex == 3) {
            this.goTo('/manage/link')
        }
    }
};
    
export default {
    mounted() {
        var path = this.$route.path;
        if (path.indexOf('/manage/index') > -1) {
            this.activeName = '1';
        } else if (path.indexOf('/manage/systemerror') > -1) {
            this.activeName = '2';
        } else if (path.indexOf('/manage/link') > -1) {
            this.activeName = '3';
        }

        this.BreadcrumbArr = this.$route.matched;
    },
    data: function() {
        return {
            spanLeft: 5,
            spanRight: 19,
            systemName: '系统监测系统',
            activeName: "1",
            BreadcrumbArr: []
        };
    },
    methods: methods,
    computed: {
        'animation': function() {
            return this.$root.animation;
        },
        'iconSize' () {
            return this.spanLeft === 5 ? 14 : 24;
        }
    },
    watch: {
        '$route': function(to, from) {
            console.log(to);
            this.BreadcrumbArr = to.matched;
        }
    }
}
    
