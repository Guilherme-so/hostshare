import { GetServerSideProps } from "next";
import Container from "./components/Container";
import ListCard from "./components/list/ListCard";

interface HomeProps {
  data: any;
}

const Home = ({ data }: HomeProps) => {
  return (
    <Container>
      <div
        className="
          pt-24
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {data
          ?.filter((it: any, index: number) => index < 20)
          .map((item: any) => (
            <ListCard key={item.id} data={item} />
          ))}
      </div>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const url =
  "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685392903052&signature=PZvFgkKIJ-uKtRBNFeoDMNWoDehT3KR08FXrCrK2lrc&downloadName=listings.json";
  const resp = await fetch(url);
  const data = await resp.json();

  return {
    props: {
      data: data.data,
    },
  };
};

export default Home;
