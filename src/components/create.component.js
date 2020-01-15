import {Component} from "../core/component";
import {Form} from "../core/form";
import {Validators} from "../core/validators";
import {sendPost} from "../services/api.service";

export class CreateComponent extends Component {

    init() {
        this.form = new Form(this.$el, {
            title: [Validators.requiredField],
            fulltext: [Validators.requiredField, Validators.checkLength(5)]
        });
        this.$el.addEventListener('submit', submitHandler.bind(this))
    }

}


async function submitHandler(event) {
    event.preventDefault();

    if(this.form.isFormValid()) {
        const formData = {
            type: this.$el.type.value,
            date: new Date().toLocaleDateString(),
            ...this.form.gettindFormValues()
        };

        await sendPost.createPost(formData);

        this.form.clear();
        alert('Пост добавлен')
    }

}