import { FC, useState, useEffect, MouseEvent } from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { flashcards } from "./utils";
import { Flashcard } from "./types";

const topics: string[] = [
  "Analisi Matematica",
  "Algoritmi e Strutture Dati",
  "Calcolo delle Probabilità e Statistica",
];

const App: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hideAnswer, setHideAnswer] = useState<boolean>(true);
  const [filteredFlashCards, setFilteredFlashCards] = useState<Flashcard[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [openedMenu, setOpenedMenu] = useState<boolean>(false);

  useEffect(() => {
    setFilteredFlashCards(
      flashcards.filter((flashcard) => flashcard.topic === filter)
    );
  }, [filter]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredFlashCards.length);
    setHideAnswer(true);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + filteredFlashCards.length) % filteredFlashCards.length
    );
    setHideAnswer(true);
  };

  const handleClick = (e: MouseEvent<HTMLUListElement>) => {
    const targetElement = e.target as HTMLElement;
    if (targetElement.tagName === "LI") {
      const text = targetElement.textContent;
      setFilter(text);
      setOpenedMenu(false);
      setCurrentIndex(0);
    }
  };

  return (
    <>
      <aside
        className={`fixed bg-gray-900 z-10 h-screen w-64 ${
          openedMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 py-6">
          <ul className="divide-y-2 *:cursor-pointer" onClick={handleClick}>
            {topics.map((topic) => (
              <li className="px-2 py-3">{topic}</li>
            ))}
          </ul>
        </div>
      </aside>
      <section className="relative bg-gray-950 h-screen flex justify-center items-center">
        <div className="px-4 py-6">
          <h1 className="mb-4 text-4xl font-extrabold text-center">
            Flash Cards
          </h1>
          <p className="text-center mb-12">{filter}</p>
          <div className="flex items-center mx-auto gap-4">
            <button
              type="button"
              title="prev"
              className="cursor-pointer"
              onClick={prevCard}
            >
              <ChevronLeft />
            </button>
            <div
              className="bg-gray-900 px-4 py-6 rounded-lg cursor-pointer h-96 md:w-xl md:h-60"
              onClick={() => setHideAnswer(!hideAnswer)}
            >
              <div className="mb-8 text-center">
                <h2 className="font-bold text-2xl mb-2">Domanda</h2>
                <p className="font-medium tracking-wide max-w-prose mx-auto">
                  {filteredFlashCards.length > 0 &&
                    filteredFlashCards[currentIndex].question}
                </p>
              </div>
              <div className={`mt-8 text-center ${hideAnswer && "invisible"}`}>
                <h2 className="font-bold text-2xl mb-2">Risposta</h2>
                <p className="font-light tracking-wide max-w-prose mx-auto">
                  {filteredFlashCards.length > 0 &&
                    filteredFlashCards[currentIndex].answer}
                </p>
              </div>
            </div>
            <button
              type="button"
              title="next"
              className="cursor-pointer"
              onClick={nextCard}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setOpenedMenu(!openedMenu)}
        >
          <Menu />
        </div>
      </section>
    </>
  );
};

export default App;
