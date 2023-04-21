import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import backgroundFrom from "@/assets/images/background-loop.svg";

export const SuspenseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative">
        <div className="w-[238px] md:w-[338px] h-[238px] md:h-[338px] -z-[1] absolute -top-[53px] left-0 bg-cpink-100 filter blur-[180px]" />

        <div className="absolute m-auto w-full -z-[1] -top-[80px] h-[100vh]">
          <img
            src={backgroundFrom}
            alt="background-loop"
            className="m-auto w-full object-cover h-full"
          />
        </div>

        <div className="w-[131px] md:w-[231px] h-[131px] md:h-[231px] -z-[1] absolute top-[554px] right-0 bg-cpink-100 filter blur-[180px]" />

        <Suspense fallback={<PreLoad />}>{children}</Suspense>
      </main>

      <Footer />
    </>
  );
};

const PreLoad = () => {
  return (
    <div id="preloader" className="mt-20">
      <div className="loader3">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
