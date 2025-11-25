import React, { createContext, ReactNode, useContext, useState } from 'react';

type ScoreMap = { [name: string]: number };

type UsedPromptsMap = {
  [playerName: string]: {
    truth: string[];
    dare: string[];
  };
};

type PlayerContextType = {
  players: string[];
  order: string[];
  currentIndex: number;
  currentPlayer: string;
  shouldShuffle: boolean;
  setShouldShuffle: (value: boolean) => void;
  addPlayer: (name: string) => void;
  removePlayer: (index: number) => void;
  startGame: () => void;
  nextPlayer: () => void;
  resetGame: () => void;
  resetPlayers: () => void;
  difficulty: string;
  setDifficulty: (level: string) => void;
  scores: ScoreMap;
  addPoints: (player: string, points: number) => void;
  getPrompt: (player: string, type: 'truth' | 'dare', sourceList: string[]) => string;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [players, setPlayers] = useState<string[]>([]);
  const [order, setOrder] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldShuffle, setShouldShuffle] = useState(false);
  const [difficulty, setDifficulty] = useState('safe');
  const [scores, setScores] = useState<ScoreMap>({});
  const [usedPrompts, setUsedPrompts] = useState<UsedPromptsMap>({});

  const addPlayer = (name: string) => {
    setPlayers(prev => [...prev, name]);
  };

  const removePlayer = (index: number) => {
    setPlayers(prev => prev.filter((_, i) => i !== index));
  };

  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startGame = () => {
    const finalOrder = shouldShuffle ? shuffleArray(players) : [...players];
    setOrder(finalOrder);
    setCurrentIndex(0);

    const initialScores: ScoreMap = {};
    const initialUsedPrompts: UsedPromptsMap = {};

    finalOrder.forEach(player => {
      initialScores[player] = 0;
      initialUsedPrompts[player] = { truth: [], dare: [] };
    });

    setScores(initialScores);
    setUsedPrompts(initialUsedPrompts);
  };

  const nextPlayer = () => {
    setCurrentIndex(prev => (prev + 1) % order.length);
  };

  const resetGame = () => {
    setOrder([]);
    setCurrentIndex(0);
    setScores({});
    setUsedPrompts({});
  };

  const resetPlayers = () => {
    setPlayers([]);
    resetGame();
    setDifficulty('safe');
  };

  const addPoints = (player: string, points: number) => {
    setScores(prev => ({
      ...prev,
      [player]: (prev[player] || 0) + points,
    }));
  };

  const getPrompt = (
    player: string,
    type: 'truth' | 'dare',
    sourceList: string[]
  ): string => {
    const playerUsed = usedPrompts[player]?.[type] || [];
    const available = sourceList.filter(item => !playerUsed.includes(item));

    let selected;

    if (available.length === 0) {
      // Se esgotou, reseta pra esse jogador nesse tipo
      selected = sourceList[Math.floor(Math.random() * sourceList.length)];
      setUsedPrompts(prev => ({
        ...prev,
        [player]: {
          ...prev[player],
          [type]: [selected],
        },
      }));
    } else {
      selected = available[Math.floor(Math.random() * available.length)];
      setUsedPrompts(prev => ({
        ...prev,
        [player]: {
          ...prev[player],
          [type]: [...(prev[player]?.[type] || []), selected],
        },
      }));
    }

    return selected;
  };

  const currentPlayer = order[currentIndex] || '';

  return (
    <PlayerContext.Provider
      value={{
        players,
        order,
        currentIndex,
        currentPlayer,
        shouldShuffle,
        setShouldShuffle,
        addPlayer,
        removePlayer,
        startGame,
        nextPlayer,
        resetGame,
        resetPlayers,
        difficulty,
        setDifficulty,
        scores,
        addPoints,
        getPrompt,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayers() {
  const context = useContext(PlayerContext);
  if (!context) throw new Error('usePlayers must be used within PlayerProvider');
  return context;
}
