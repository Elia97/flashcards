import { Flashcard } from "./types";

export const flashcards: Flashcard[] = [
  {
    topic: "analisi matematica",
    question: "Qual è la definizione di limite di una funzione?",
    answer:
      "Il limite di f(x) per x → a è L se, per ogni ε > 0, esiste δ > 0 tale che 0 < |x - a| < δ implica |f(x) - L| < ε.",
  },
  {
    topic: "analisi matematica",
    question:
      "Quali sono le condizioni di continuità di una funzione in un punto?",
    answer:
      "Una funzione è continua in x = a se: 1) lim(x → a) f(x) esiste, 2) f(a) esiste, 3) lim(x → a) f(x) = f(a).",
  },
  {
    topic: "analisi matematica",
    question: "Come si definisce la derivata di una funzione?",
    answer:
      "f'(x) = lim(h → 0) (f(x + h) - f(x)) / h, se il limite esiste finito.",
  },
  {
    topic: "analisi matematica",
    question: "Cosa rappresenta geometricamente la derivata?",
    answer:
      "La pendenza della retta tangente al grafico della funzione nel punto considerato.",
  },
  {
    topic: "analisi matematica",
    question: "Qual è la regola di derivazione del prodotto?",
    answer: "(f · g)' = f' · g + f · g'.",
  },
  {
    topic: "analisi matematica",
    question: "Qual è la regola di derivazione del quoziente?",
    answer: "(f/g)' = (f' · g - f · g') / g², con g(x) ≠ 0.",
  },
  {
    topic: "analisi matematica",
    question: "Qual è la formula dell'integrale per parti?",
    answer: "∫ u dv = uv - ∫ v du.",
  },
  {
    topic: "analisi matematica",
    question: "Come si calcola un integrale definito?",
    answer:
      "Si calcola trovando una primitiva F(x) di f(x) e valutando F(b) - F(a).",
  },
  {
    topic: "analisi matematica",
    question: "Qual è la definizione di serie numerica?",
    answer:
      "Una serie è la somma infinita di termini di una successione: ∑ a_n.",
  },
  {
    topic: "analisi matematica",
    question:
      "Qual è la condizione necessaria per la convergenza di una serie?",
    answer:
      "Se ∑ a_n converge, allora lim(n → ∞) a_n = 0, ma il viceversa non è necessariamente vero.",
  },
  {
    topic: "algoritmi e strutture dati",
    question: "Cos'è un algoritmo?",
    answer:
      "È una sequenza finita di istruzioni ben definite per risolvere un problema.",
  },
  {
    topic: "algoritmi e strutture dati",
    question: "Quali sono le caratteristiche di un buon algoritmo?",
    answer: "Correttezza, efficienza, chiarezza e generalità.",
  },
  {
    topic: "algoritmi e strutture dati",
    question: "Cos'è la complessità computazionale?",
    answer:
      "Misura le risorse (tempo e spazio) necessarie per eseguire un algoritmo in funzione dell'input.",
  },
  {
    topic: "algoritmi e strutture dati",
    question: "Qual è la notazione Big-O di un algoritmo?",
    answer:
      "Descrive il limite superiore del tempo di esecuzione nel caso peggiore.",
  },
  {
    topic: "algoritmi e strutture dati",
    question: "Qual è la differenza tra ricerca lineare e ricerca binaria?",
    answer:
      "La ricerca lineare scansiona tutti gli elementi (O(n)), la ricerca binaria divide l'array ordinato a metà (O(log n)).",
  },
  {
    topic: "algoritmi e strutture dati",
    question: "Cos'è una struttura dati?",
    answer:
      "Un'organizzazione dei dati che permette operazioni efficienti di accesso e modifica.",
  },
  {
    topic: "algoritmi e strutture dati",
    question: "Qual è la differenza tra stack e queue?",
    answer:
      "Lo stack segue LIFO (Last In, First Out), la queue segue FIFO (First In, First Out).",
  },
  {
    topic: "algoritmi e strutture dati",
    question: "Cos'è una lista collegata?",
    answer:
      "Una struttura dati in cui ogni nodo contiene un valore e un riferimento al nodo successivo.",
  },
  {
    topic: "algoritmi e strutture dati",
    question: "Cos'è un albero binario?",
    answer:
      "Una struttura in cui ogni nodo ha al massimo due figli (sinistro e destro).",
  },
  {
    topic: "algoritmi e strutture dati",
    question: "Cos'è un heap?",
    answer:
      "Un albero binario completo in cui ogni nodo genitore è maggiore (max heap) o minore (min heap) dei figli.",
  },
  {
    topic: "calcolo delle probabilità e statistica",
    question: "Cos'è un evento in probabilità?",
    answer:
      "Un sottoinsieme dello spazio campionario, che rappresenta un possibile risultato di un esperimento.",
  },
  {
    topic: "calcolo delle probabilità e statistica",
    question: "Qual è la definizione classica di probabilità?",
    answer:
      "È il rapporto tra il numero di casi favorevoli e il numero totale di casi possibili, se tutti sono equiprobabili.",
  },
  {
    topic: "calcolo delle probabilità e statistica",
    question: "Cos'è la probabilità condizionata?",
    answer:
      "È la probabilità di un evento A dato che un altro evento B è già avvenuto, calcolata come P(A|B) = P(A ∩ B) / P(B).",
  },
  {
    topic: "calcolo delle probabilità e statistica",
    question: "Qual è la formula di Bayes?",
    answer:
      "P(A|B) = [P(B|A) * P(A)] / P(B), usata per aggiornare le probabilità alla luce di nuove informazioni.",
  },
  {
    topic: "calcolo delle probabilità e statistica",
    question: "Cos'è una variabile aleatoria?",
    answer:
      "È una funzione che associa a ogni esito di un esperimento un valore numerico.",
  },
  {
    topic: "calcolo delle probabilità e statistica",
    question:
      "Qual è la differenza tra variabile aleatoria discreta e continua?",
    answer:
      "Una variabile discreta assume un numero finito o numerabile di valori, mentre una continua può assumere infiniti valori in un intervallo.",
  },
  {
    topic: "calcolo delle probabilità e statistica",
    question: "Cosa rappresenta la media di una distribuzione?",
    answer:
      "È il valore atteso, ovvero la somma dei valori possibili ponderati con le rispettive probabilità.",
  },
  {
    topic: "calcolo delle probabilità e statistica",
    question: "Cos'è la deviazione standard?",
    answer:
      "È la radice quadrata della varianza e misura la dispersione dei dati rispetto alla media.",
  },
  {
    topic: "calcolo delle probabilità e statistica",
    question: "Qual è la legge dei grandi numeri?",
    answer:
      "Afferma che, aumentando il numero di prove, la media dei risultati osservati si avvicina alla probabilità teorica.",
  },
  {
    topic: "calcolo delle probabilità e statistica",
    question: "Cos'è il teorema del limite centrale?",
    answer:
      "Afferma che la somma di molte variabili aleatorie indipendenti tende a una distribuzione normale, indipendentemente dalla distribuzione originale.",
  },
];
