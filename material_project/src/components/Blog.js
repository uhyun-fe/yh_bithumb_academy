import React from "react";
import Grid from "@material-ui/core/Grid";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";

const mainFeaturedPost = {
   title: "2021 빗썸테크아카데미",
   description: "웹 프론트엔드 과정 최유현",
   image: "https://source.unsplash.com/random",
   imgText: "main image description",
   linkText: "[참고] Material-UI 공식문서",
};

const featuredPosts = [
   {
      title: "현황 대시보드",
      date: "2021. 09. 01",
      description: "현황 대시보드의 상세설명",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
      link: "#",
   },
   {
      title: "체크아웃",
      date: "2021. 09. 03",
      description: "체크아웃의 상세설명",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
      link: "#",
   },
   {
      title: "앨범",
      date: "2021. 09. 05",
      description: "앨범의 상세설명",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
      link: "#",
   },
   {
      title: "가격표",
      date: "2021. 09. 07",
      description: "가격표의 상세설명",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
      link: "#",
   },
];

export default function Blog() {
   return (
      <>
         <MainFeaturedPost post={mainFeaturedPost} />
         <Grid container spacing={4}>
            {featuredPosts.map((post) => (
               <FeaturedPost key={post.title} post={post} />
            ))}
         </Grid>
      </>
   );
}
