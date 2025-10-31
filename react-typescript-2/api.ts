type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data.reduce( (acc, cur) => {
    if(cur.userId ==1) acc++;
    return acc;
  }, 0));
  data.forEach((post) => { 
    if(post.title.includes("dolorem")) console.log(post.body);
  } )
  const laborID = new Set();
  data.forEach((post) => {
    if(post.body.includes("labor")) laborID.add(post.userId);
  })
  console.log(laborID);
  
  return data;
}

const post = fetchPosts()
  .then((data) => {
    console.log(data[0]);
  })
  .catch((error) => {
    console.error(error);
  });


// userID가 1인 사용자가 작성한 글의 갯수
// title에 dolorem 라는 텍스트가 들어가 있는 글을 모두 출력
// body에 labor 라는 텍스트가 들어가있는 글의 userID를 모두 출력(중복X)