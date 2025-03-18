import { FC, useState, useEffect, MouseEvent } from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { flashcards } from "./utils";
import { Flashcard } from "./types";

const topics: string[] = [
  "analisi matematica",
  "algoritmi e strutture dati",
  "calcolo delle probabilità e statistica",
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
      {openedMenu && (
        <div
          className="absolute inset-0 h-screen bg-black/50 z-10"
          onClick={() => setOpenedMenu(!openedMenu)}
        />
      )}
      <aside
        className={`fixed bg-gray-800 z-20 h-screen w-64 ${
          openedMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 py-6">
          <ul className="divide-y-2 *:cursor-pointer" onClick={handleClick}>
            {topics.map((topic, index) => (
              <li key={index} className="px-2 py-3">
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <section className="relative bg-gray-950 h-screen flex items-center justify-center">
        <div>
          <h2 className="text-2xl text-center mb-8">{filter}</h2>
          <div className="flex items-center mx-auto justify-center">
            <button
              type="button"
              title="prev"
              className="cursor-pointer"
              onClick={prevCard}
            >
              <ChevronLeft />
            </button>
            <div
              className="bg-gray-900 px-4 py-6 rounded-lg cursor-pointer aspect-[9/16] w-3xs md:aspect-video md:w-xl flex flex-col justify-around"
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
          className="absolute top-4 right-4 cursor-pointer z-20"
          onClick={() => setOpenedMenu(!openedMenu)}
        >
          <Menu />
        </div>
      </section>
    </>
  );
};

export default App;
