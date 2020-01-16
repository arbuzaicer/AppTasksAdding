import {Component} from "../core/component";
import {sendPost} from "../services/api.service";
import {TransformData} from "../services/transform.data";

export class PostsComponent extends Component {
    constructor(id, {preloader}) {
        super(id);

        this.preloader = preloader;
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }

    async onShow() {
        this.preloader.show();
        const fbData = await sendPost.getPosts();
        const posts = TransformData.BDTransformData(fbData);
        const html = posts.map(item => {
            return renderPost(item)
        });
        this.$el.innerText = '';
        this.preloader.hide();
        this.$el.insertAdjacentHTML("afterbegin", html.join(' '))
    }

}

function renderPost(post) {
    let postType = post.type === 'news' ? `<li class="tag tag-blue tag-rounded">Новость</li>`: `<li class="tag tag-rounded">Заметка</li>`;
    const addToFavoriteButton = `<button class="button-round button-small button-primary" data-id="${post.id}">Сохранить</button>`;

    return `
<div class="panel" id=${post.id}>
      <div class="panel-head">
        <p class="panel-title">${post.title}</p>
        <ul class="tags">
          ${postType}
        </ul>      
        </div>
      <div class="panel-body">
        <p class="multi-line">${post.fulltext}</p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${post.date}</small>
        ${addToFavoriteButton}
      </div>
    </div>`
}

function buttonHandler(event) {
    if(event.target.dataset.id) {
        console.log(event.target.dataset.id)
    }

}