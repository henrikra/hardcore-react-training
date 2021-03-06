import { v4 as uuid } from "uuid";
import { List } from "immutable";
import { servicify } from "../util";

const customers = List.of(
  "Fraktio",
  "Nestle",
  "Monsanto",
  "Philip Morris",
  "Dr. Kobros Foundation",
  "Volkswagen",
  "Shell",
  "Talvivaara",
  "Church of Scientology"
).map((name) => {
  return {
    name,
    id: uuid(),
  };
});

export default servicify(customers);
