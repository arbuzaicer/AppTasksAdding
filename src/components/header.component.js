import {Component} from "../core/component";


export class HeaderComponent extends Component {
    constructor(id) {
        super(id);

    }

    init() {
        const btn = this.$el.querySelector('.js-btn');
        const btnBack = document.querySelector('.back-btn');
        btn.addEventListener('click', () => {
                this.$el.classList.add('hide');
                document.querySelector('.w-container').classList.remove('hide')
            }
        );
        btnBack.addEventListener('click', () => {
            this.$el.classList.remove('hide');
            document.querySelector('.w-container').classList.add('hide')
        })
    }
}
