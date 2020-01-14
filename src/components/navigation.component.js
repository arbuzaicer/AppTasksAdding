import {Component} from "../core/component";


export class NavigationComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$el.addEventListener("click", (event) => {
            event.preventDefault();
            if (event.target.classList.contains('tab')) {
                const arr = Array.from(this.$el.querySelectorAll('.tab'));
                arr.forEach(tab=>{
                    tab.classList.remove('active');
                });
                event.target.classList.contains('active') || event.target.classList.add('active');
            }
        })
    }
}