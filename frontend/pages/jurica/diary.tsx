import type { NextPage } from "next";
import content from "../../data/diary.json";

const Diary: NextPage = () => (
  <main>
    <header>
      <h2>My Study Diary</h2>
    </header>
    {content.items.map((v) => (
      <article key={v.created}>
        <h1>{v.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: v.description }}></div>
      </article>
    ))}
  </main>
);

export default Diary;
