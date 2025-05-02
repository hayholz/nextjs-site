import { Home } from "@/features/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lennars Home Page",
  description: "Lennars home page, sign up!",
};

export default function HomePage() {
  return <Home />;
}
