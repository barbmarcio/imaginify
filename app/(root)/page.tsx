import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <p>Home</p>

      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default Home;
