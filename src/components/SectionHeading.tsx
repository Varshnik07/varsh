interface Props {
  index: string;
  title: string;
}

export default function SectionHeading({ index, title }: Props) {
  return (
    <h2 className="mb-8 font-pixel text-2xl text-white">
      <span className="mr-2 text-emerald-400">{index}.</span>
      {title}
    </h2>
  );
}
