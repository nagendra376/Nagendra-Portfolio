import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site, type Book } from "@/config/site";
import {
  BookOpen,
  Sparkles,
  ExternalLink,
  X,
  Quote as QuoteIcon,
  CheckCircle2,
} from "lucide-react";

export function Books() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedBook(null);
      }
    };
    if (selectedBook) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedBook]);

  const books = site.books || [];

  return (
    <div id="books">
      <SectionHeader
        title="Books"
        aside={
          <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--soft)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-semibold text-[var(--muted)]">
              Adding books
            </span>
          </div>
        }
      />

      <Shell>
        {/* Subtle Section Subheader */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-dashed border-[var(--line)] px-6 py-3 sm:px-8 bg-[var(--chip)]/35 font-mono text-[11px] text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <BookOpen className="size-3.5 text-[var(--soft)] shrink-0" />
            <span>Adding books to my personal bookshelf & reading notes</span>
          </div>
          <span className="text-[var(--soft)] flex items-center gap-1.5">
            <Sparkles className="size-3 text-amber-500" />
            <span>Curated Reads</span>
          </span>
        </div>

        {/* Books Container */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-6">
            {books.map((book) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedBook(book)}
                className="group relative w-44 sm:w-52 aspect-[2/3] rounded-xl overflow-hidden border border-[var(--line)] bg-neutral-900 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover "Click to read" overlay */}
                <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 text-center gap-2">
                  <p className="font-serif text-white text-sm font-medium leading-tight">
                    {book.title}
                  </p>
                  <div className="flex items-center gap-1.5 rounded-full bg-white text-neutral-950 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide shadow-md transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
                    <BookOpen className="size-3.5" />
                    <span>Click to read</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Shell>

      {/* Reader Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBook(null)}
              className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-[var(--line)] bg-[var(--bg)] text-[var(--fg)] shadow-2xl z-10 onyx-scroll"
            >
              {/* Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-md px-6 py-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[var(--soft)]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--soft)]">
                    Book Summary &amp; Takeaways
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedBook(null)}
                  className="grid size-8 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Hero / Cover + Title */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <img
                    src={selectedBook.cover}
                    alt={selectedBook.title}
                    className="w-28 sm:w-36 aspect-[2/3] object-cover rounded-lg shadow-md border border-[var(--line)] shrink-0 mx-auto sm:mx-0"
                  />
                  <div className="space-y-2 flex-1">
                    {selectedBook.status && (
                      <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        {selectedBook.status}
                      </span>
                    )}
                    <h2 className="font-serif text-2xl sm:text-3xl text-[var(--fg)] font-semibold">
                      {selectedBook.title}
                    </h2>
                    <p className="font-mono text-xs text-[var(--soft)]">
                      Author:{" "}
                      <span className="text-[var(--fg)]">
                        {selectedBook.author}
                      </span>
                    </p>
                    {selectedBook.tagline && (
                      <p className="text-sm italic text-[var(--muted)] font-serif">
                        &ldquo;{selectedBook.tagline}&rdquo;
                      </p>
                    )}
                    <p className="text-[13.5px] leading-relaxed text-[var(--muted)] pt-1">
                      {selectedBook.description}
                    </p>
                  </div>
                </div>

                {/* Quote Box */}
                {selectedBook.quote && (
                  <div className="rounded-xl border border-[var(--line)] bg-[var(--chip)]/30 p-4 sm:p-5 flex gap-3.5 items-start">
                    <QuoteIcon className="size-5 text-[var(--soft)] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-serif text-[15px] sm:text-[16px] italic leading-snug text-[var(--fg)]">
                        &ldquo;{selectedBook.quote}&rdquo;
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--soft)] mt-2">
                        — {selectedBook.author}, {selectedBook.title}
                      </p>
                    </div>
                  </div>
                )}

                {/* Key Takeaways */}
                {selectedBook.keyTakeaways &&
                  selectedBook.keyTakeaways.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg)] font-semibold flex items-center gap-1.5">
                        <Sparkles className="size-3.5 text-amber-500" />
                        Core Lessons &amp; Takeaways
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedBook.keyTakeaways.map((takeaway, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 rounded-lg border border-[var(--line)]/50 bg-[var(--card)] p-3 text-[13px] leading-relaxed text-[var(--muted)]"
                          >
                            <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-dashed border-[var(--line)]">
                  <span className="font-mono text-[11px] text-[var(--soft)]">
                    Want to dive deeper into the full text?
                  </span>
                  <a
                    href={selectedBook.readUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--fg)] px-4 py-2.5 text-xs font-semibold text-[var(--bg)] transition-transform duration-200 hover:-translate-y-0.5 shadow-sm"
                  >
                    <span>Read Full Book</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Books;
