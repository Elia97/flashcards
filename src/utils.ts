import { Flashcard } from "./types";

export const flashcards: Flashcard[] = [
  {
    topic: "Analisi Matematica",
    question: "Qual è la definizione di limite di una funzione?",
    answer:
      "Il limite di una funzione f(x) per x che tende a un valore c è il valore L che f(x) si avvicina arbitrariamente quando x si avvicina a c.",
  },
  {
    topic: "Analisi Matematica",
    question: "Qual è la definizione di derivata di una funzione?",
    answer:
      "La derivata di una funzione f(x) in un punto x0 è il limite del rapporto incrementale quando l'incremento tende a zero, ovvero f'(x0) = lim (h -> 0) [f(x0 + h) - f(x0)] / h.",
  },
  {
    topic: "Analisi Matematica",
    question: "Cosa rappresenta l'integrale definito di una funzione?",
    answer:
      "L'integrale definito di una funzione f(x) tra a e b rappresenta l'area sottesa dalla curva della funzione nell'intervallo [a, b].",
  },
  {
    topic: "Algoritmi e Strutture Dati",
    question: "Cos'è un algoritmo e quali sono le sue proprietà fondamentali?",
    answer:
      "Un algoritmo è una sequenza finita di istruzioni ben definite per risolvere un problema. Le sue proprietà fondamentali sono correttezza, efficienza, finitezza, chiarezza e generalità.",
  },
  {
    topic: "Algoritmi e Strutture Dati",
    question:
      "Qual è la differenza tra complessità temporale e spaziale di un algoritmo?",
    answer:
      "La complessità temporale misura il tempo di esecuzione di un algoritmo in funzione della dimensione dell'input, mentre la complessità spaziale misura la quantità di memoria utilizzata.",
  },
  {
    topic: "Algoritmi e Strutture Dati",
    question:
      "Quali sono le principali operazioni su una struttura dati stack (pila)?",
    answer:
      "Le operazioni principali su una pila sono push (inserimento di un elemento), pop (rimozione dell'ultimo elemento inserito) e top/peek (visualizzazione dell'ultimo elemento senza rimuoverlo).",
  },
  {
    topic: "Calcolo delle Probabilità e Statistica",
    question:
      "Qual è la definizione di probabilità secondo la teoria classica?",
    answer:
      "La probabilità di un evento è definita come il rapporto tra il numero di casi favorevoli e il numero totale di casi possibili, supponendo che siano tutti equiprobabili.",
  },
  {
    topic: "Calcolo delle Probabilità e Statistica",
    question: "Cosa rappresenta la distribuzione normale?",
    answer:
      "La distribuzione normale è una distribuzione di probabilità continua con una caratteristica forma a campana, centrata sulla media e con deviazione standard che ne determina la dispersione.",
  },
  {
    topic: "Calcolo delle Probabilità e Statistica",
    question: "Cos'è la varianza di una distribuzione statistica?",
    answer:
      "La varianza misura la dispersione dei valori di una distribuzione rispetto alla loro media. È calcolata come la media dei quadrati delle differenze tra ogni valore e la media della distribuzione.",
  },
];
