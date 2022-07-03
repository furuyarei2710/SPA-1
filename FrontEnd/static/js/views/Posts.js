import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }
    async getHTML() {
        return `
            <h1>Welcome to my posts</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nisi quaerat, animi fugiat sapiente adipisci reiciendis nam dolor facere esse rerum tenetur iusto? Voluptatibus dignissimos voluptates delectus, cum laborum quaerat?
                Modi voluptas inventore cum exercitationem illum pariatur ducimus tenetur, dolor dignissimos dolorem nisi deleniti nulla odio possimus incidunt ad quas. Sunt molestias nemo hic deserunt? Nihil doloribus error sapiente tempora!</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nisi quaerat, animi fugiat sapiente adipisci reiciendis nam dolor facere esse rerum tenetur iusto? Voluptatibus dignissimos voluptates delectus, cum laborum quaerat?
                Modi voluptas inventore cum exercitationem illum pariatur ducimus tenetur, dolor dignissimos dolorem nisi deleniti nulla odio possimus incidunt ad quas. Sunt molestias nemo hic deserunt? Nihil doloribus error sapiente tempora!
            </p>
        `
    }
}