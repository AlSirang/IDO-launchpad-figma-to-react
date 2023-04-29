import { Container } from "@/components/ui";
import { StakingCard } from "@/components/staking-card";
import { useScrollToTop } from "@/src/hooks/useScroll";

export default function Staking() {
  useScrollToTop();
  return (
    <>
      <Container>
        <section className="mt-20 grid gap-3">
          <StakingCard defaultOpen />
          <StakingCard />
          <StakingCard />
          <StakingCard />
        </section>
      </Container>
    </>
  );
}
