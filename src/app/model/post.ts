export class Post {

title: string;
body: string;

static convJson(json: any): Post {
  const post = new Post();

  post.title = json.title;
  post.body = json.body;

  return post;
  }

}
