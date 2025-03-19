import {
  BookOpen,
  Calendar,
  Database,
  GithubLogo,
  Hockey,
  LineVertical,
  Person,
  Shapes,
} from "@phosphor-icons/react";

export default function BottomBar() {
  const aCss =
    "cursor-pointer rounded-xl p-1 mx-2.5 transition-all hover:hue-rotate-180 hover:scale-125";

  return (
    <div className="static bottom-0 flex justify-center w-full">
      <div className="flex items-center justify-center px-8 pt-2 pb-2 transition-transform duration-200 bg-black rounded-full rounded-b-none w-fit hover:scale-125">
        <a
          className={aCss}
          href="https://graphics-playground.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Shapes weight="fill" size={44} color="var(--l-purple)" />
        </a>
        <a
          className={aCss}
          href="https://dump-n-chase.com"
          target="_blank"
          rel="noreferrer"
        >
          <Hockey weight="fill" size={44} color="var(--l-purple)" />
        </a>
        <a
          className={aCss}
          href="https://michael-beebe.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Person weight="fill" size={44} color="var(--l-purple)" />
        </a>
        <LineVertical weight="thin" size={44} color="var(--gray)" />
        <a
          className={aCss}
          href="https://calendar.google.com/calendar/u/0/r"
          target="_blank"
          rel="noreferrer"
        >
          <Calendar weight="fill" size={44} color="var(--l-yellow)" />
        </a>
        <LineVertical weight="thin" size={44} color="var(--gray)" />
        <a
          className={aCss}
          href="https://github.com/mpb9/movies"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo weight="fill" size={44} color="var(--l-blue)" />
        </a>
        <a
          className={aCss}
          href="https://cloud.mongodb.com/v2/67af8d507b9f9616ac46af4d#/metrics/replicaSet/67af8e4b0353e200e123e915/explorer/movies"
          target="_blank"
          rel="noreferrer"
        >
          <Database weight="fill" size={44} color="var(--l-blue)" />
        </a>
        <a
          className={aCss}
          href="https://github.com/mpb9/movies/blob/main/README.md"
          target="_blank"
          rel="noreferrer"
        >
          <BookOpen weight="fill" size={44} color="var(--l-blue)" />
        </a>
      </div>
    </div>
  );
}
