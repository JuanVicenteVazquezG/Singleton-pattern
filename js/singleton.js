
const Singleton = (() => {
    function _Singleton() {
        let name;
        this.getName = function () {
            return name;
        };
        this.setName = function (n) {
            name = n;
        }
    }

    let instance;
    return {
        getInstance: () => {
            if (!instance) {
                instance = new _Singleton();
            }
            return instance;
        }
    };
})();

const var1 = Singleton.getInstance();
const var2 = Singleton.getInstance();

if (var1 === var2) {
    console.log('They have de same instance');
}