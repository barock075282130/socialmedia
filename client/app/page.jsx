import HomePage from "@components/HomePage";

export default async function Home() {
  const res = await fetch("http://localhost:4000/post/getpost");
  const data = await res.json()
  return (
    <div>
      <HomePage data={data} />
    </div>
  )
}
