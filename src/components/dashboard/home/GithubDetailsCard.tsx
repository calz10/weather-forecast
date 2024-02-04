import { RootState } from "@/lib";

type GithubProfileCardProps = {
  user: RootState["user"]["user"];
};

const GithubProfileCard = ({ user }: GithubProfileCardProps) => {
  return (
    <div className={`flex flex-col text-center pt-5`}>
      <div>{user?.name}</div>
      <div className="pt-5">{user?.githubProfile}</div>
    </div>
  );
};

export default GithubProfileCard;
