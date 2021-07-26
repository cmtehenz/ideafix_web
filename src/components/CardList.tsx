import { SimpleGrid } from '@chakra-ui/react';
import { Card } from './Card';

interface Card {
  title: string;
  description: string;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards?.map(card => (
          <Card key={card.id} data={card} />
        ))}
      </SimpleGrid>
    </>
  );
}
