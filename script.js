function slugify(text){
return text.toLowerCase()
.replace(/[^a-z0-9 ]/g,'')
.replace(/\s+/g,'-') + "-" + Date.now()
}

function savePost(){

let title=document.getElementById("nama").value

let slug=slugify(title)

let post={
title:title,
slug:slug
}

let posts=JSON.parse(localStorage.getItem("posts")||"[]")

posts.push(post)

localStorage.setItem("posts",JSON.stringify(posts))

alert("Artikel berhasil dibuat")
const hasil = "post.html?id="+slug;
window.open(hasil, '_blank')

}

function loadPosts(){

let posts=JSON.parse(localStorage.getItem("posts")||"[]")

let html=""

posts.forEach(p=>{
html+=`
<div class="button">
            <a href="post.html?id=${p.slug}">${p.title}</a> 
        </div>
`
})

let el=document.getElementById("posts")

if(el) el.innerHTML=html

}

function loadPost(){

let params=new URLSearchParams(window.location.search)

let slug=params.get("id")

let posts=JSON.parse(localStorage.getItem("posts")||"[]")

let post=posts.find(p=>p.slug==slug)

if(post){

document.getElementById("nama").innerText=post.title

}

}

loadPosts()
loadPost()