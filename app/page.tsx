import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-old-english text-6xl mt-24">
        Rate your GCU Lahore Professors
      </h1>

      <p className="text-lg mt-2 tagline tracking-tighter">
        Pressurize them to teach better
      </p>

      <Button className="mt-4 cursor-pointer">Start rating</Button>
    </div>
  );
}
