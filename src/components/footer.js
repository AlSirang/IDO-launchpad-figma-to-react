import { SvgMediumIcon, SvgTelegramIcon, SvgTwitterIcon } from "@/icons";
import { Container } from "./ui";

export const Footer = () => {
  return (
    <footer className="pt-24 border-b-8 border-b-cpink-100">
      <div className="border-t border-t-cpink-100">
        <Container className="pt-10 pb-8">
          <div className="flex justify-between gap-5">
            <span className="font-bold text-3xl tracking-tight">LOGO</span>

            <div className="flex gap-5">
              <button>
                <SvgTelegramIcon />
              </button>

              <button>
                <SvgTwitterIcon />
              </button>

              <button>
                <SvgMediumIcon />
              </button>
            </div>
          </div>

          <div className="max-w-md m-auto mt-10">
            <div className="flex justify-between">
              <div className="grid gap-3">
                <p className="font-medium text-lg hover:underline hover:cursor-pointer transition-all">
                  Apply for IDO
                </p>
                <p className="font-medium text-lg hover:underline hover:cursor-pointer transition-all">
                  Apply for incubation
                </p>
                <p className="font-medium text-lg hover:underline hover:cursor-pointer transition-all">
                  Terms and Conditions
                </p>
              </div>
              <div className="grid gap-3">
                <p className="font-medium text-lg hover:underline hover:cursor-pointer transition-all">
                  Blog
                </p>
                <p className="font-medium text-lg hover:underline hover:cursor-pointer transition-all">
                  FAQ
                </p>
                <p className="font-medium text-lg hover:underline hover:cursor-pointer transition-all">
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm mt-10">
            &copy;&nbsp;Copyright {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};
