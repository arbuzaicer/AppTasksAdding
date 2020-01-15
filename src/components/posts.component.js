import {Component} from "../core/component";
import {sendPost} from "../services/api.service";
import {TransformData} from "../services/transform.data";

export class PostsComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {

    }

    async onShow() {
        const fbData = await sendPost.getPosts();
        const posts = TransformData.BDTransformData(fbData);
        const html = posts.map(item => {
            return renderPost(item)
        });
        this.$el.innerText = '';
        this.$el.insertAdjacentHTML("afterbegin", html.join(' '))
    }

}

function renderPost(post) {
    return `
<div class="panel" id=${post.id}>
      <div class="panel-head">
        <p class="panel-title">${post.title}</p>
        <ul class="tags">
          <li class="tag tag-blue tag-rounded">${post.type}</li>
        </ul>      
        </div>
      <div class="panel-body">
        <p class="multi-line">${post.fulltext}</p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${post.date}</small>
      </div>
    </div>
`
}