import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard 
          id="123"
          name="Companion 1"
          topic="Topic 1"
          subject="Subject 1"
          duration={30}
          color="#ffda6e"

        />
        <CompanionCard 
          id="456"
          name="Companion 2"
          topic="Topic 2"
          subject="Subject 2"
          duration={45}
          color="#e5d0ff"

        />
        <CompanionCard 
          id="789"
          name="Companion 3"
          topic="Topic 3"
          subject="Subject 3"
          duration={25}
          color="#BDE7FF"

        />
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently completed session"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
