export class Component {
    constructor(id) {
        this.$el = document.getElementById(id);
        this.init()
    }

    init() {

    }

    show(elem) {
        elem.classList.remove('hide')
    }
    hide(elem) {
        elem.classList.add('hide')
    }
}