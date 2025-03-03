import { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/shared/lib/providers/query-client";
import { getPosts } from "@/shared/api";
import Posts from "@/components/posts";
import Comments from "@/components/comments";

const HomePage = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({ queryKey: ["posts"], queryFn: getPosts });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback="Loading Posts...">
        <Posts />
      </Suspense>
      ------------------------------------------------------------
      <Suspense fallback="Loading Comments...">
        <Comments />
      </Suspense>
    </HydrationBoundary>
  );
};

export default HomePage;
