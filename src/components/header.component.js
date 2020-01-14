import {Component} from "../core/component";


export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        const btn = this.$el.querySelector('.js-btn');
        const btnBack = document.querySelector('.back-btn');
        btn.addEventListener('click', () => {
                this.hide(this.$el);
                this.show( document.querySelector('.w-container'));
            }
        );

        btnBack.addEventListener('click', () => {
            this.show(this.$el);
            this.$el.classList.remove('hide');
            this.hide( document.querySelector('.w-container'));
        })
    }
}
