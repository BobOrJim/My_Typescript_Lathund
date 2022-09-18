interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item), //Expanderar objektet med rank
  }));

  ranks.sort((a, b) => a.rank - b.rank); //Sorterar på rank

  return ranks.map((rank) => rank.item); //Tar bort en prop och returnerar den nu sorterade listan.
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 19,
  },
  {
    name: "Megaasaur",
    hp: 5,
  },
  {
    name: "Bob",
    hp: 6,
  },
  {
    name: "Jim",
    hp: 8,
  },
];

const ranksOrginal = ranker(pokemon, ({ hp }) => hp);
console.log(ranksOrginal);

const ranks = ranker(pokemon, ({ hp }) => {
  //Sortering som värderar jämna tal högre
  if (hp % 2 === 0) {
    return hp + 100;
  } else {
    return hp;
  }
});
console.log(ranks);
