import { useState } from "react";
import Card from "../card/Card";

export default function Showcase() {
  const [cards] = useState(["abc", "cde"]);
  return <div>{cards.map((card) => Card(card))}</div>;
}
