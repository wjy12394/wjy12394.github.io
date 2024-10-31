var posts=["2024/10/29/ADSIPC/","2024/10/24/hello-world/","2024/10/29/BeckhoffSimulink/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };