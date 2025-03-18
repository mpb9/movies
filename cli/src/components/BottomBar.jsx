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
    "btn cursor-pointer rounded-xl bg-[var(--d-gray)] p-1 mx-1 hover:scale-105 transition-transform duration-300";

  return (
    <div className="bottom-1 w-full fixed flex items-center justify-center">
      <a
        className={aCss}
        href="https://graphics-playground.com/"
        target="_blank"
        rel="noreferrer"
      >
        <Shapes weight="duotone" size={36} color="var(--l-purple)" />
      </a>
      <a
        className={aCss}
        href="https://dump-n-chase.com"
        target="_blank"
        rel="noreferrer"
      >
        <Hockey weight="duotone" size={36} color="var(--l-purple)" />
      </a>
      <a
        className={aCss}
        href="https://michael-beebe.com/"
        target="_blank"
        rel="noreferrer"
      >
        <Person weight="duotone" size={36} color="var(--l-purple)" />
      </a>

      <LineVertical weight="thin" size={36} color="var(--gray)" />

      <a
        className={aCss}
        href="https://calendar.google.com/calendar/u/0/r"
        target="_blank"
        rel="noreferrer"
      >
        <Calendar weight="duotone" size={36} color="var(--l-yellow)" />
      </a>

      <LineVertical weight="thin" size={36} color="var(--gray)" />

      <a
        className={aCss}
        href="https://github.com/mpb9/movies"
        target="_blank"
        rel="noreferrer"
      >
        <GithubLogo weight="duotone" size={36} color="var(--l-blue)" />
      </a>
      <a
        className={aCss}
        href="https://cloud.mongodb.com/v2/67af8d507b9f9616ac46af4d#/metrics/replicaSet/67af8e4b0353e200e123e915/explorer/movies"
        target="_blank"
        rel="noreferrer"
      >
        <Database weight="duotone" size={36} color="var(--l-blue)" />
      </a>
      <a
        className={aCss}
        href="https://github.com/mpb9/movies/blob/main/README.md"
        target="_blank"
        rel="noreferrer"
      >
        <BookOpen weight="duotone" size={36} color="var(--l-blue)" />
      </a>
    </div>
  );
}
