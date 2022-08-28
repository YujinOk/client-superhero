import { HeroList } from "../heroList/HeroList";
export const SavedHero = () => {
  return (
    <div>
      <strong className="text-primary">Click </strong>to view image and
      powerstats!
      <HeroList />
    </div>
  );
};
