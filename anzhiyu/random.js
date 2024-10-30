var posts=["2024/10/29/ADSIPC/","2024/10/29/BeckhoffSimulink/","2024/10/24/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };