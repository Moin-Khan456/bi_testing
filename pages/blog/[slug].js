import axios from "axios";
import Head from "next/head";
import dynamic from "next/dynamic.js";
import { rediss } from "../../utils/redis.js";
import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { throttle } from "lodash";

const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
const PopularBlogs = dynamic(() =>
  import("../../components/blog/PopularBlogs.jsx")
);
const Blogs = dynamic(() => import("../../components/blog/Blogs.jsx"), {
  ssr: false,
});
const Pagination = dynamic(
  () => import("../../components/blog/Pagination.jsx"),
  { ssr: false }
);
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"), {
  ssr: false,
});

const SkeletonLoader = () => {
  return (
    <div className="container">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="lg:w-[75%] flex flex-col lg:flex-row my-8 border-b-2 border-slate-600"
        >
          <div className="relative w-full max-w-[450px] h-48 bg-gray-300 rounded-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
          </div>

          <div className="lg:w-1/2 lg:pl-2 mt-4 lg:mt-0">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
            </div>

            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded w-5/6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded w-2/3 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
              </div>
            </div>

            <div className="h-4 bg-gray-300 rounded w-1/4 mt-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SkeletonPopularBlog = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-full relative overflow-hidden">
            <div className="w-full h-48 bg-gray-300 rounded-md mb-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home({ initialData, initialBlogs, totalPages, page }) {
  const [currentPage, setCurrentPage] = useState(page);

  const fetchBlogs = throttle(async (currentPage) => {
    const response = await axios.get(
      `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_fields=id,_embedded,slug,date,title,excerpt,_links&_embed&per_page=10&page=${currentPage}`
    );
    return response.data;
  }, 5000);

  // const {
  //   data: blogs,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["blogs", currentPage],
  //   queryFn: () => fetchBlogs(currentPage),
  //   staleTime: 600000,
  // });
  // const popularBlogs = blogs?.slice(0, 3) || [];

  return (
    <>
      <Head>
        <title>Insights and Innovations | Blogs by Brain Inventory</title>
        <meta
          name="description"
          content="Explore the latest insights, trends, and innovations in technology, development, and design on the Brain Inventory blog. Stay updated with us."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Insights and Innovations | Blogs by Brain Inventory "
        />
        <meta
          property="og:description"
          content=" Explore the latest insights, trends, and innovations in technology, development, and design on the Brain Inventory blog. Stay updated with us."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_blog.jpg"
        />
        <meta property="og:url" content="https://braininventory.in/blog/1" />
        <link
          rel="prev"
          href={`https://braininventory.in/blog/${
            currentPage > 1 ? currentPage - 1 : ""
          }`}
        />
        <link
          rel="next"
          href={`https://braininventory.in/blog/${
            currentPage !== totalPages ? Number(currentPage) + 1 : ""
          }`}
        />
        <link rel="canonical" href="https://braininventory.in/blog/1" />
      </Head>
      <main className="relative second-component">
        <Header />
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
          <div className="container padding-left-all-section-1">
            <h1 className="lg:text-4xl text-2xl pt-12 font-bold sm:leading-12">
              Welcome to the Brain Inventory Blogs: Insights, <br /> Trends, and
              Innovations Development
            </h1>
            <div>
              <h3 className="text-xl font-bold mt-8 mb-3 hidden lg:block">
                Popular Blogs
              </h3>
              <div className="pb-2 hidden lg:block">
                {/* {isLoading ? (
                  <SkeletonPopularBlog />
                ) : ( */}
                <PopularBlogs data={initialData} />
                {/* )} */}
              </div>
              {/* {isLoading ? <SkeletonLoader /> : <Blogs blogs={initialBlogs} />} */}
              <Blogs blogs={initialBlogs} />
              <Pagination
                itemsPerPage={10}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
        <KeepInTouch />
        <LocateUs />
        <LetsKick />
        <Footer />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  let totalBlogs = await rediss.get(`totalBlogs`);

  if (!totalBlogs) {
    const response = await axios.get(
      "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=1"
    );
    totalBlogs = response.headers["x-wp-total"];
    await rediss.set(`totalBlogs`, totalBlogs, "EX", 600);
  }

  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalBlogs / itemsPerPage);

  const paths = [];
  for (let i = 1; i <= totalPages; i++) {
    paths.push({
      params: { slug: i.toString() },
    });
  }

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  let totalPages = await rediss.get(`totalPages`);

  if (!totalPages) {
    const postsRes = await axios.get(
      "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=1"
    );
    totalPages = postsRes.headers["x-wp-totalpages"];
    await rediss.set(`totalPages`, totalPages, "EX", 600);
  }

  const cacheKey = `blog:${context.params.slug}`;
  const cachedBlog = await rediss.get(cacheKey);

  if (cachedBlog) {
    const blogs = JSON.parse(cachedBlog);
    return {
      props: {
        initialData: blogs.slice(0, 3),
        initialBlogs: blogs,
        totalPages: totalPages,
        page: context.params.slug,
      },
      revalidate: 600,
    };
  }

  const response = await axios.get(
    `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_fields=id,_embedded,slug,date,title,excerpt,_links&_embed&per_page=10&page=${context.params.slug}`,
    { next: { revalidate: 600 } }
  );

  const blogs = response.data;
  await rediss.set(cacheKey, JSON.stringify(blogs), "EX", 300);

  return {
    props: {
      initialData: blogs.slice(0, 3),
      initialBlogs: blogs,
      totalPages: totalPages,
      page: context.params.slug,
    },
    revalidate: 600,
  };
}
