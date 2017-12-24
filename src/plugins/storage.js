var install = function(Vue, options) {
    
    Vue.prototype.$sessionStorage = {
        'setItem': function(key, value) {
            var valueStr = JSON.stringify(value);
            sessionStorage.setItem(key, valueStr);
        },
        'getItem': function(key) {
            var value = sessionStorage.getItem(key);
            var obj = null;

            try{
                obj = JSON.parse(value);
            } catch(e) {
                obj = value;
            }

            return obj;
        },
        'clear': function() {
            sessionStorage.clear();
        }
    }

    Vue.prototype.$localStorage = {
        'setItem': function(key, value) {
            var valueStr = JSON.stringify(value);
            localStorage.setItem(key, valueStr);
        },
        'getItem': function(key) {
            var value = localStorage.getItem(key);
            var obj = null;

            try{
                obj = JSON.parse(value);
            } catch(e) {
                obj = value;
            }

            return obj;
        },
        'clear': function() {
            localStorage.clear();
        }
    }
}

export default {
    install: install
}