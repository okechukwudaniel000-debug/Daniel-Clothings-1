import { Theme } from '../types';

interface SkeletonProps {
  theme: Theme;
}

export function SkeletonHero({ theme }: SkeletonProps) {
  const bgClass = theme === 'dark' ? 'bg-[#111]' : 'bg-[#f7f7f7]';
  const shimmerClass = theme === 'dark' ? 'shimmer' : 'shimmer-light';

  return (
    <div className={`min-h-screen w-full flex flex-col justify-center px-6 md:px-20 py-24 ${bgClass} relative overflow-hidden`}>
      <div className="max-w-4xl space-y-8 z-10">
        <div className={`h-8 w-32 rounded ${shimmerClass} opacity-60`} />
        <div className="space-y-4">
          <div className={`h-16 md:h-24 w-full md:w-3/4 rounded ${shimmerClass}`} />
          <div className={`h-16 md:h-24 w-1/2 rounded ${shimmerClass} opacity-80`} />
        </div>
        <div className={`h-6 w-2/3 rounded ${shimmerClass} opacity-60`} />
        <div className="flex gap-4 pt-4">
          <div className={`h-12 w-40 rounded ${shimmerClass}`} />
          <div className={`h-12 w-44 rounded ${shimmerClass} opacity-70`} />
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[45%] h-[50vh] md:h-[70vh] flex items-center justify-center p-8 opacity-30 mt-12 md:mt-0">
        <div className={`w-full h-full rounded-full ${shimmerClass} opacity-40`} />
      </div>
    </div>
  );
}

export function SkeletonCard({ theme }: SkeletonProps) {
  const bgClass = theme === 'dark' ? 'bg-[#111] border-neutral-800' : 'bg-white border-neutral-200';
  const shimmerClass = theme === 'dark' ? 'shimmer' : 'shimmer-light';

  return (
    <div className={`rounded-xl border p-4 space-y-4 ${bgClass}`}>
      <div className={`aspect-3/4 w-full rounded-lg ${shimmerClass}`} />
      <div className="space-y-2">
        <div className={`h-6 w-2/3 rounded ${shimmerClass}`} />
        <div className={`h-4 w-full rounded ${shimmerClass} opacity-70`} />
        <div className={`h-4 w-5/6 rounded ${shimmerClass} opacity-70`} />
      </div>
      <div className="pt-2 flex justify-between items-center">
        <div className={`h-4 w-24 rounded ${shimmerClass} opacity-60`} />
        <div className={`h-8 w-8 rounded-full ${shimmerClass}`} />
      </div>
    </div>
  );
}

export function SkeletonReview({ theme }: SkeletonProps) {
  const bgClass = theme === 'dark' ? 'bg-[#111] border-neutral-800' : 'bg-white border-neutral-200';
  const shimmerClass = theme === 'dark' ? 'shimmer' : 'shimmer-light';

  return (
    <div className={`p-8 rounded-xl border max-w-lg mx-auto space-y-6 ${bgClass}`}>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`h-5 w-5 rounded-full ${shimmerClass}`} />
        ))}
      </div>
      <div className="space-y-3">
        <div className={`h-4 w-full rounded ${shimmerClass}`} />
        <div className={`h-4 w-11/12 rounded ${shimmerClass}`} />
        <div className={`h-4 w-4/5 rounded ${shimmerClass}`} />
      </div>
      <div className="flex items-center gap-4 pt-4">
        <div className={`h-12 w-12 rounded-full ${shimmerClass}`} />
        <div className="space-y-2 flex-1">
          <div className={`h-4 w-1/3 rounded ${shimmerClass}`} />
          <div className={`h-3 w-1/4 rounded ${shimmerClass} opacity-60`} />
        </div>
      </div>
    </div>
  );
}
