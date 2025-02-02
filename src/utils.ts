import { Flashcard } from "./types";

export const flashcards: Flashcard[] = [
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI",
    question: "Qual è la definizione intuitiva di insieme secondo Cantor?",
    answer:
      "Un insieme è 'una raccolta, classe, aggregato, totalità di oggetti determinati ben distinti della nostra intuizione o del nostro pensiero' (Cantor)",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI",
    question: "Quali sono i principali metodi di definizione di un insieme?",
    answer:
      "Metodo estensionale (elencando gli elementi) e metodo intensionale (definendo una proprietà caratteristica).",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI",
    question: "Cosa significa che un insieme è finito o infinito?",
    answer:
      "Un insieme è finito se ha un numero finito di elementi, infinito altrimenti.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI",
    question: "Cos'è il sottoinsieme di un insieme A?",
    answer:
      "Un insieme B è sottoinsieme di A se tutti gli elementi di B appartengono anche ad A.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI",
    question: "Cosa si intende per insieme vuoto?",
    answer: "L'insieme che non contiene alcun elemento, indicato con ∅.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI",
    question: "Quando due insiemi sono uguali?",
    answer:
      "Due insiemi A e B sono uguali se contengono esattamente gli stessi elementi.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI",
    question: "Cosa rappresenta l'unione di due insiemi A e B?",
    answer:
      "L'insieme degli elementi che appartengono ad almeno uno tra A e B, indicato con A ∪ B.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI",
    question: "Cosa rappresenta l'intersezione di due insiemi A e B?",
    answer:
      "L'insieme degli elementi che appartengono sia ad A che a B, indicato con A ∩ B.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI",
    question: "Cosa si intende per insieme complementare?",
    answer:
      "L'insieme degli elementi che non appartengono a un dato insieme, rispetto a un insieme universo.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI",
    question: "Cos'è il prodotto cartesiano di due insiemi A e B?",
    answer:
      "L'insieme delle coppie ordinate (a, b) con a appartenente ad A e b appartenente a B, indicato con A × B.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI",
    question: "Cosa significa che un insieme è numerabile?",
    answer:
      "Un insieme è numerabile se i suoi elementi possono essere messi in corrispondenza biunivoca con l'insieme dei numeri naturali.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI NUMERICI",
    question: "Cos'è un insieme di numeri naturali?",
    answer:
      "L'insieme dei numeri naturali è un insieme infinito, strutturalmente il più semplice, costruito a partire dall'insieme vuoto e definito dagli assiomi di Peano.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI NUMERICI",
    question: "Cosa stabiliscono gli assiomi di Peano?",
    answer:
      "Gli assiomi di Peano stabiliscono le proprietà fondamentali dei numeri naturali, come l'esistenza del successore di ogni numero e il principio di induzione.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI NUMERICI",
    question: "Cos'è il 'successore' di un numero naturale?",
    answer:
      "Il successore di un numero naturale è il numero che segue immediatamente quel numero nell'insieme, ad esempio il successore di 0 è 1, e il successore di 1 è 2.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI NUMERICI",
    question: "Cos'è l'elemento neutro per la somma nei numeri naturali?",
    answer:
      "L'elemento neutro per la somma nei numeri naturali è 0, poiché sommare 0 a qualsiasi numero naturale non cambia il valore di quest'ultimo.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI NUMERICI",
    question: "Qual è la definizione di prodotto nei numeri naturali?",
    answer:
      "Il prodotto tra due numeri naturali è definito come la somma ripetuta di un numero naturale per un numero di volte pari all'altro numero.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI NUMERICI",
    question: "Cos'è il fattoriale di un numero naturale?",
    answer:
      "Il fattoriale di un numero naturale n (denotato come n!) è il prodotto di tutti i numeri naturali da 1 a n. Ad esempio, 5! = 5 × 4 × 3 × 2 × 1 = 120.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI NUMERICI",
    question: "Cos'è un numero intero relativo?",
    answer:
      "I numeri interi relativi includono i numeri naturali, i loro opposti (numeri negativi) e lo zero, e sono usati per rappresentare quantità sia positive che negative.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI NUMERICI",
    question: "Cos'è il valore assoluto di un numero intero?",
    answer:
      "Il valore assoluto di un numero intero n è il suo valore senza considerare il segno, denotato |n|. Ad esempio, |-5| = 5 e |5| = 5.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI NUMERICI",
    question: "Cos'è l'insieme dei numeri razionali?",
    answer:
      "L'insieme dei numeri razionali è costituito dai numeri che possono essere espressi come il rapporto di due numeri interi, con il denominatore diverso da zero.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI NUMERICI",
    question: "Cos'è l'opposto di un numero razionale?",
    answer:
      "L'opposto di un numero razionale a/b è -a/b, ovvero si cambia il segno del numeratore.",
  },
  {
    topic: "ELEMENTI DI TEORIA DEGLI INSIEMI NUMERICI",
    question: "Cos'è il reciproco di un numero razionale?",
    answer: "Il reciproco di un numero razionale a/b è b/a, purché a ≠ 0.",
  },
  {
    topic: "LE RELAZIONI TRA INSIEMI",
    question: "Cos'è una relazione tra due insiemi?",
    answer:
      "Una relazione tra due insiemi A e B è una legge che associa gli elementi di A con gli elementi di B, in modo tale che ad ogni elemento di A può essere associato uno o più elementi di B.",
  },
  {
    topic: "LE RELAZIONI TRA INSIEMI",
    question: "Come si scrive 'a è in relazione con b'?",
    answer: "Si scrive a R b, dove R rappresenta la relazione.",
  },
  {
    topic: "LE RELAZIONI TRA INSIEMI",
    question: "Cos'è il dominio di una relazione?",
    answer:
      "Il dominio di una relazione è l'insieme degli elementi di partenza che sono in relazione con almeno un elemento dell'insieme di arrivo.",
  },
  {
    topic: "LE RELAZIONI TRA INSIEMI",
    question: "Cos'è il codominio di una relazione?",
    answer:
      "Il codominio di una relazione è l'insieme degli elementi di arrivo che sono immagini di almeno un elemento dell'insieme di partenza.",
  },
  {
    topic: "LE RELAZIONI TRA INSIEMI",
    question: "Cos'è l'immagine di un elemento in una relazione?",
    answer:
      "L'immagine di un elemento a mediante una relazione R è l'elemento b tale che a R b.",
  },
  {
    topic: "LE RELAZIONI TRA INSIEMI",
    question: "Cos'è la controimmagine di un elemento in una relazione?",
    answer: "La controimmagine di un elemento b è l'elemento a tale che a R b.",
  },
  {
    topic: "LE RELAZIONI TRA INSIEMI",
    question: "Cos'è una relazione inversa?",
    answer:
      "La relazione inversa di una relazione R è una relazione che associa a b il suo controparte a, ed è scritta come b R⁻¹ a.",
  },
  {
    topic: "LE RELAZIONI TRA INSIEMI",
    question: "Cos'è una relazione vuota?",
    answer:
      "Una relazione vuota è una relazione che non associa nessun elemento dell'insieme di partenza con nessun elemento dell'insieme di arrivo.",
  },
  {
    topic: "LE RELAZIONI TRA INSIEMI",
    question: "Cos'è una relazione totale?",
    answer:
      "Una relazione totale è una relazione che associa ogni elemento dell'insieme di partenza con ogni elemento dell'insieme di arrivo.",
  },
  {
    topic: "LE RELAZIONI TRA INSIEMI",
    question: "Cos'è una relazione identica?",
    answer:
      "Una relazione identica è una relazione che associa ogni elemento dell'insieme con se stesso, ed è scritta come x = x per ogni x.",
  },
  {
    topic: "LE RELAZIONI TRA INSIEMI",
    question: "Cos'è una relazione riflessiva?",
    answer:
      "Una relazione è riflessiva se ogni elemento dell'insieme è in relazione con se stesso.",
  },
];
