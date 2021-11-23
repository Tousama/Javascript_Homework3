// start of japan filter
const japan_btn = document.querySelector("#japan-btn");
japan_btn.addEventListener("click",()=>{
  japan_posts=document.querySelectorAll(".japan");
  all_posts=document.querySelectorAll(".all");
  let k=0;
  for(i=0; i<all_posts.length; i++){
    if (all_posts[i]!=japan_posts[k]){
      all_posts[i].style.display="none";
    } else if (all_posts[i]==japan_posts[k]){
      japan_posts[k].style.display="";
      k++;
    }
  }
})
// end of japan filter
// start of korea filter
const korea_btn = document.querySelector("#korea-btn");
korea_btn.addEventListener("click",()=>{
  korea_posts=document.querySelectorAll(".korea");
  all_posts=document.querySelectorAll(".all");
  let k=0;
  for(i=0; i<all_posts.length; i++){
    if (all_posts[i]!=korea_posts[k]){
      all_posts[i].style.display="none"
    } else if (all_posts[i]==korea_posts[k]){
      korea_posts[k].style.display="";
      k++;
    }
  }
})
// end of korea filter
// start of china filter
const china_btn = document.querySelector("#china-btn");
china_btn.addEventListener("click",()=>{
  china_posts=document.querySelectorAll(".china");
  all_posts=document.querySelectorAll(".all");
  let k=0;
  for(i=0; i<all_posts.length; i++){
    if (all_posts[i]!=china_posts[k]){
      all_posts[i].style.display="none"
    } else if (all_posts[i]==china_posts[k]){
      china_posts[k].style.display="";
      k++;
    }
  }
})
// end of china filter
// start of all filter
const all_btn = document.querySelector("#all-btn");
all_btn.addEventListener("click",()=>{
  all_posts=document.querySelectorAll(".all");
  for(i=0; i<all_posts.length; i++){
    all_posts[i].style.display="";
  }
})
// end of all filter