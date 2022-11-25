import type { ReactNode } from 'react';

type IProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  summary: string;
  description?: string;
  descriptionList?: ReactNode;
  link: string;
  category: ReactNode;
};

const Project = (props: IProjectProps) => (
  <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <div className="shrink-0">
      <a href={props.link}>
        <img
          className="h-36 w-36 rounded hover:translate-y-1"
          src={props.img.src}
          alt={props.img.alt}
          loading="lazy"
        />
      </a>
    </div>

    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <a className="hover:text-benhammondyellow" href={props.link}>
          <div className="text-xl font-semibold">{props.name}</div>
        </a>

        <div className="ml-3 flex flex-wrap gap-2">{props.category}</div>
      </div>
      <details>
        <summary className="cursor-pointer py-3 font-semibold hover:text-benhammondyellow">
          {props.summary}
        </summary>
        {props?.description && <p>{props.description}</p>}
        {props?.descriptionList}
      </details>
    </div>
  </div>
);

export { Project };
