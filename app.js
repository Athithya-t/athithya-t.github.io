async function gql(query) {
    const response = await fetch('https://api.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }), // Send the GraphQL query as JSON
    });
  
    const data = await response.json();
    const blogData = Array(data.data.user.publication.posts);
    const blogdiv = document.getElementById("blogs");
    for(let i=0;i<3;i++){
        const element = blogData[0][i];
        const p = document.createElement("p");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const a = document.createElement("a");
        a.href = `https://athithyat.hashnode.dev/${element.slug}`;
        a.target = "_blank"
        img.src = element.coverImage;
        p.textContent = element.title;
        div.setAttribute("class","");
        p.setAttribute("class","text-xl");
        img.setAttribute("class","w-[100%] h-[90%] xl:w-[100%]")
        div.appendChild(img);
        div.appendChild(p);
        a.appendChild(div);
        blogdiv.appendChild(a);
    };
  }

const GET_USER_BLOGS = `
query {
    user(username:"athithyat"){
      publication{
      posts(page:0){
        title
        coverImage
        slug
      }
    }
    }
  }
`;

gql(GET_USER_BLOGS);
