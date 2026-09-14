import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col items-center px-8 py-24 text-center">
      <h1>이페이지는 myapp/about/page.tsx입니다</h1>
      <Link
        href="/"
        className="text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
      >
        {" "}
        Home으로 이동하기{" "}
      </Link>
    </div>
  );
}
