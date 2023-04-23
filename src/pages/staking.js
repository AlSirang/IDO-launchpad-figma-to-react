import { Container } from "@/components/container";
import { StakingCard } from "@/components/staking-card";

export default function Staking() {
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
