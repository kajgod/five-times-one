import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import content from "../../data/diary.json";

const step = 5;

const getArticles = (from: number, to: number) => content.items.slice(from, to);

const Pagination = () => {
  const pages = [...(new Array(Math.ceil(content.items.length / step)).fill(null))];
  return (
    <nav className="Pagination">
      {pages.map((_, p) => (
        <Link href={`?p=${p}`} key={p}>
          <a>{p+1}</a>
        </Link>
      ))}
    </nav>
  );
};

const Diary: NextPage = () => {
  const router = useRouter();
  const { p } = router.query;
  const from = Number(p ?? 0) * step;
  const to = from + step;
  const articles = getArticles(from, to);

  return (
    <main>
      <header>
        <h2>My Study Diary</h2>
      </header>
      {articles.map((v) => (
        <article key={v.created}>
          <h1>{v.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: v.description }}></div>
        </article>
      ))}
      <Pagination />
    </main>
  );
};

export default Diary;
