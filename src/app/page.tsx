import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-xl">Articles Sites for guys to read</h1>
        <Button variant='default'>Test Btn</Button>
    </main>
  );
}
