import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ProjectItem from "@/components/ui/ProjectItem";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import { Separator } from "@/components/ui/separator";
import ModeToggle from "@/components/ModeToggle";

export default function PortfolioHome() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-10 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Jai Bhullar</h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Front-End / Full-Stack Developer
        </p>
        <p className="mt-4 text-muted-foreground">
          Building modern web apps with Next.js, TypeScript & Tailwind.
        </p>

        {/* Latest project chip */}
        <div className="mt-3 flex justify-center">
          <Link
            href="https://gutendex-book-search-one.vercel.app/"
            className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground hover:bg-muted/50"
            aria-label="View latest project: Gutendex Book Search"
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
            Latest: Gutendex Book Search (Next.js 16 + React 19, Zod, Jest)
          </Link>
        </div>

        <div className="mt-6 flex justify-center items-center gap-4 flex-wrap">
          <Button asChild className="py-5">
            <Link href="#projects" className="md:text-[1rem]">
              View Projects
            </Link>
          </Button>
          <Button asChild variant="secondary" className="border py-5">
            <Link href="#contact" className="md:text-[1rem]">
              Contact me
            </Link>
          </Button>
          <Button asChild className="bg-blue text-white hover:bg-blue/90">
            <a href="/cv.pdf">Download My CV</a>
          </Button>
          <ModeToggle />
        </div>
      </section>

      <Separator />

      <section id="about">
        <Container className="mx-auto max-lg:max-w-md max-lg:text-center grid lg:grid-cols-[3fr_5fr] gap-8 lg:gap-16 lg:items-center">
          <div className="relative aspect-square w-full mx-auto max-lg:max-w-sm overflow-hidden">
            <Image
              src="/thumbnails/headshot.jpg"
              alt="Headshot"
              priority
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-semibold">About Me</h2>
            <p className="text-muted-foreground">
              I'm a self-taught developer focused on building user-friendly,
              high-performance web and mobile apps. I work with modern tooling
              and production patterns: type-safe forms with <strong>Zod</strong>{" "}
              + <strong>React Hook Form</strong>, server state with{" "}
              <strong>TanStack React Query</strong>, accessible UI with
              <strong> shadcn/ui</strong>, and component tests with{" "}
              <strong>Jest</strong> +<strong> React Testing Library</strong>.
              Recently shipped the Gutendex Book Search (Next.js&nbsp;16 +
              React&nbsp;19, Tailwind v4) with validation, pagination, theming,
              and tests.
            </p>

            <Button asChild className="bg-blue text-white hover:bg-blue/90">
              <a href="/cv.pdf">Download My CV</a>
            </Button>

            {/* Skill badges */}
            <div className="space-y-3">
              {/* Core languages */}
              <div className="space-x-2 space-y-2">
                <Badge className="dark:text-stone-800">HTML</Badge>
                <Badge className="dark:text-stone-800">CSS</Badge>
                <Badge className="dark:text-stone-800">JavaScript</Badge>
                <Badge className="dark:text-stone-800">TypeScript</Badge>
              </div>

              {/* Frontend frameworks & styling */}
              <div className="space-x-2 space-y-2">
                <Badge className="bg-blue text-white">React</Badge>
                <Badge className="bg-blue text-white">Next.js</Badge>
                <Badge className="bg-blue text-white">Tailwind CSS</Badge>
                <Badge className="bg-blue text-white">shadcn/ui</Badge>
                <Badge className="bg-blue text-white">next-themes</Badge>
              </div>

              {/* Forms & Validation */}
              <div className="space-x-2 space-y-2">
                <Badge className="bg-amber-700 text-white">
                  React Hook Form
                </Badge>
                <Badge className="bg-amber-700 text-white">Zod</Badge>
                <Badge className="bg-amber-700 text-white">Sonner</Badge>
              </div>

              {/* State & Data */}
              <div className="space-x-2 space-y-2">
                <Badge className="bg-blue text-white">
                  TanStack React Query
                </Badge>
                <Badge className="bg-blue text-white">Jotai</Badge>
              </div>

              {/* Mobile Dev */}
              <div className="space-x-2 space-y-2">
                <Badge className="bg-emerald-700 text-white">
                  React Native
                </Badge>
                <Badge className="bg-emerald-700 text-white">Expo</Badge>
                <Badge className="bg-emerald-700 text-white">NativeWind</Badge>
              </div>

              {/* Backend, Authentication & API */}
              <div className="space-x-2 space-y-2">
                <Badge className="bg-indigo-800 text-white">Prisma</Badge>
                <Badge className="bg-indigo-800 text-white">PostgreSQL</Badge>
                <Badge className="bg-indigo-800 text-white">tRPC</Badge>
                <Badge className="bg-indigo-800 text-white">NeonDB</Badge>
                {/* Trim platforms not actively showcasing */}
                {/* <Badge className="bg-indigo-800 text-white">Supabase</Badge> */}
                {/* <Badge className="bg-indigo-800 text-white">Appwrite</Badge> */}
              </div>

              {/* AI & Automation */}
              <div className="space-x-2 space-y-2">
                <Badge className="bg-purple-700 text-white">OpenAI API</Badge>
                <Badge className="bg-purple-700 text-white">Inngest</Badge>
                <Badge className="bg-purple-700 text-white">
                  E2B Sandboxes
                </Badge>
              </div>

              {/* Testing, tools & Deployment */}
              <div className="space-x-2 space-y-2">
                <Badge className="bg-stone-700 text-white">Jest</Badge>
                <Badge className="bg-stone-700 text-white">
                  React Testing Library
                </Badge>
                <Badge className="bg-stone-700 text-white">Git</Badge>
                <Badge className="bg-stone-700 text-white">Vercel</Badge>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Separator></Separator>

      <section id="projects" className="">
        <Container>
          <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:gap-y-10">
            <ProjectItem
              title="Gutendex Book Search"
              desc="Search and explore books from the Gutendex API with advanced filters, real-time validation, dark/light theme, and paginated results. Built with modern React tooling and tested components."
              tech="Next.js, React, TypeScript, Zod, React Hook Form, Tailwind, ShadCN UI, Jest, React Testing Library"
              demoHref="https://gutendex-book-search-one.vercel.app/"
              githubHref="https://github.com/JaiBh/gutendex-book-search"
              image="/thumbnails/gutendex_book_search_thumbnail.png"
            />
            <ProjectItem
              title="Footwear E-Commerce Store"
              desc="Modern storefront with product filters, saved items, cart, user and guest checkout and orders list. Server state handled with TanStack React Query."
              tech="Next.js, TypeScript, Tailwind, Prisma, TanStack React Query, Stripe, Convex Auth"
              demoHref="https://fusionfootwear-store.vercel.app/"
              githubHref="https://github.com/JaiBh/fusionfootwear-store"
              image={"/thumbnails/fusionfootwear_store_thumnail.png"}
            ></ProjectItem>
            <ProjectItem
              title="Footwear E-Commerce Admin"
              desc="Manage products, orders, and analytics for the footwear store in a clean, tested dashboard UI. Built with modern full-stack tools and includes automated testing for form validation and logic."
              tech="Next.js, ShadCN UI, Prisma, PostgreSQL, Jest"
              githubHref="https://github.com/JaiBh/fusionfootwear-admin"
              demoHref="https://www.fusionfootwear-admin.xyz/"
              image={"/thumbnails/fusionfootwear_admin_thumbnail.png"}
            ></ProjectItem>
            <ProjectItem
              title="Personal Finance App"
              desc="Track budgets, bills, savings pots and transactions with live charts and breakdowns."
              tech="Next.js, TypeScript, Tailwind, Prisma, Clerk, PostgreSQL"
              demoHref="https://www.jaibh-finance.xyz"
              githubHref="https://github.com/JaiBh/nextjs-personal-finance-app"
              image={"/thumbnails/personal_finance_thumbnail.png"}
            ></ProjectItem>
            <ProjectItem
              title="Promptly"
              desc="Promptly is a tool for generating simple, working Next.js websites from text prompts using AI. Great for prototyping and exploring ideas fast."
              tech="Next.Js, Typescript, Prisma, OpenAI API, Inngest, E2B, tRPC"
              demoHref="https://jaibh-promptly.vercel.app/"
              githubHref="https://github.com/JaiBh/promptly"
              image="/thumbnails/promptly.png"
            ></ProjectItem>
            <ProjectItem
              title="MovieFlix"
              desc="Mobile app to browse, save, and manage movies using the TMDB API. Built with React Native and Expo, featuring Clerk auth, a saved movies list, and a custom profile page."
              tech="React Native, Expo, TypeScript, Clerk, TMDB API, Jotai"
              githubHref="https://github.com/JaiBh/MovieFlix"
              demoHref="https://www.youtube.com/shorts/_XT4F4Dq1_c"
              image="/thumbnails/movieflix.jpg"
            />
          </div>
        </Container>
      </section>
      <Separator></Separator>

      <section id="contact" className="text-center max-w-xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <div className="space-y-2">
          <p className="text-muted-foreground">
            Get in touch if you'd like to work together or have any questions.
          </p>
          <p>
            Email:{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:jaibhullar.developer@outlook.com"
              className="text-blue-600 hover:underline"
            >
              jaibhullar.developer@outlook.com
            </Link>
          </p>
        </div>
        <div className=" flex justify-center gap-6">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JaiBh"
            className="text-primary hover:underline transition hover:opacity-70"
          >
            <FaGithub size={32} />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jai-bhullar-dev/"
            className="text-blue-500 hover:underline transition hover:opacity-70"
          >
            <FaLinkedin size={32} />
          </Link>
        </div>
        <ContactForm></ContactForm>
      </section>
    </main>
  );
}
