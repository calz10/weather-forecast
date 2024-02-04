import Link from "next/link";
import Button from "../common/button/Button";

type TopbarProps = {
  onLogout: () => void;
};

export const Topbar = ({ onLogout }: TopbarProps): JSX.Element => {
  return (
    <div className="relative h-[50px] justify-between flex items-center px-2 py-2 border-b border-b-light-accent2 dark:border-b-dark-accent2">
      <Link href="/home" legacyBehavior>
        <a className="text-white">Weather Forecast</a>
      </Link>
      <div className="space-x-4">
        <Button color="primary" size="large" variant="link" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
