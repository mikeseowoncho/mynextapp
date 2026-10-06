import Link from "next/link";
import { getNotices } from "@/lib/notices";

export const dynamic = "force-dynamic";

export default async function NoticesPage() {
  const notices = await getNotices();

  return (
    <div className="mx-auto max-w-2xl flex-1 px-8 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
          공지사항
        </h1>
        <Link
          href="/notices/new"
          className="text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
        >
          + 새 글 작성
        </Link>
      </div>
      <ul className="flex flex-col gap-4">
        {notices.map((n) => (
          <li
            key={n.id}
            className="flex items-center justify-between rounded-lg border border-black/[.08] px-5 py-4 transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/[.05]"
          >
            <Link href={`/notices/${n.id}`} className="flex-1">
              <p className="font-medium text-black dark:text-zinc-50">
                {n.title}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {n.author} · {n.createdAt}
              </p>
            </Link>
            <Link
              href={`/notices/${n.id}/edit`}
              className="ml-4 text-sm font-medium text-zinc-500 underline underline-offset-4 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              수정
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
