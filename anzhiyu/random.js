var posts=["2019/04/21/hello-world/","2023/06/01/anzhiyu主题标签/","2026/01/01/通联日志/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };