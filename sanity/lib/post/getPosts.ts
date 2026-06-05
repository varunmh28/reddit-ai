import { sanityFetch } from "../live";
import { defineQuery } from "groq";

export async function getPosts() {
    // get all the posts which are not deleted
  const getAllPostsQuery =
    defineQuery(`*[_type == "post" && isDeleted != true ] {    
    _id,
    title,
    "slug": slug.current,
    body,
    publishedAt,
    "author": author->
    ,
    "subreddit": subreddit->,
    image,
    isDeleted
  } | order(publishedAt desc)`);

  const posts = await sanityFetch({ query: getAllPostsQuery });
  return posts.data;
}