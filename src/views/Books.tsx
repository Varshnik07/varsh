import SectionHeading from "../components/SectionHeading";
import { books } from "../data/books";

export default function Books() {
  return (
    <section id="books" className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading index="05" title="Books" />
      <ul className="space-y-3">
        {books.map((book) => (
          <li
            key={book.title}
            className="flex items-baseline justify-between"
          >
            <span className="text-white/80">
              {book.title} <span className="text-white/40">— {book.author}</span>
            </span>
            <span className="text-xs text-white/40">{book.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
