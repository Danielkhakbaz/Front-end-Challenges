import { SkeletonCard } from "@/shared/components/custom/skeleton-card";

const Loading = () => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8 m-8">
        {"abcdefghi".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
};

export default Loading;
