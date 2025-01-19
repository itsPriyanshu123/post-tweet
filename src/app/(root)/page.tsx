import Navbar from "../../components/navbar";
import "../globals.css";
import SearchForm from "../../components/searchForm";
import StartupCard from "@/components/ui/StartupCard";

interface StartupCardType {
  _createdAt: Date;
  views: number;
  author: {
    id: number | string;
    name: string;
  };
  id: number | string;
  title: string;
  category?: string;
  image: string; 
  descreption: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const _posts: StartupCardType[] = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { id: 1, name: "John Doe" },
      id: 1,
      category: "Robots",
      title: "We Robots",
      image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      descreption: "A robotic company focusing on creating autonomous vehicles",
    },
  ];

  const resolvedSearchParams = await searchParams; // Await the searchParams
  const query = resolvedSearchParams.query || ""; // Get `query` from searchParams

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3l">
          Submit Ideas, vote on pitches, and get noticed in virtual competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section>
        {query ? `Showing results for "${query}"` : "All available results"}
      </section>

      <ul className="mt-7 card-grid">
        {_posts.length > 0 ? (
          _posts.map((post) => <StartupCard key={post.id} post={post} />)
        ) : (
          <p className="no-result">No Startup Found</p>
        )}
      </ul>
    </>
  );
}
