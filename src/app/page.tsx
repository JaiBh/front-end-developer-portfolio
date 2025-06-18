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
      <section className=" text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Jai Bhullar</h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Front-End / Full-Stack Developer
        </p>
        <p className="mt-4 text-muted-foreground">
          Building modern web apps with Next.js, TypeScript & Tailwind.
        </p>
        <div className="mt-6 flex justify-center items-center gap-4 flex-wrap">
          <Button asChild className="py-5">
            <Link href={"#projects"} className="md:text-[1rem]">
              View Projects
            </Link>
          </Button>
          <Button asChild variant={"secondary"} className="border py-5">
            <Link href={"#contact"} className="md:text-[1rem]">
              Contact me
            </Link>
          </Button>
          <Button asChild className="bg-blue text-white hover:bg-blue/90">
            <Link href={"/JaiBhullar_CV_2025.pdf"} download>
              Download My CV
            </Link>
          </Button>
          <ModeToggle></ModeToggle>
        </div>
      </section>

      <Separator></Separator>

      <section id="about" className=" ">
        <Container className="mx-auto max-lg:max-w-md max-lg:text-center grid lg:grid-cols-[3fr_5fr] gap-8 lg:gap-16 lg:items-center">
          <div className="relative aspect-square w-full mx-auto max-lg:max-w-sm overflow-hidden ">
            <Image
              src={"/thumbnails/headshot.jpeg"}
              alt="Headshot"
              priority
              fill
              className="object-cover rounded-2xl"
            ></Image>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-semibold">About Me</h2>
            <p className="text-muted-foreground">
              I'm a self-taught web developer focused on building user-friendly,
              high-performance web applications.
              <br />
              My stack includes React, Next.js, TypeScript, Tailwind CSS,
              Prisma, and PostgreSQL (via NeonDB). I'm passionate about solving
              real-world problems through thoughtful design and clean code.
            </p>
            <Button asChild className="bg-blue text-white hover:bg-blue/90">
              <Link href={"/JaiBhullar_CV_2025.pdf"} download>
                Download My CV
              </Link>
            </Button>
            <div className="space-y-3">
              <div className="space-x-2 space-y-2">
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
              </div>

              <div className="space-x-2 space-y-2">
                <Badge className="bg-blue text-white">React</Badge>
                <Badge className="bg-blue text-white">Next.js</Badge>
                <Badge className="bg-blue text-white">Tailwind CSS</Badge>
                <Badge className="bg-blue text-white">Clerk</Badge>
              </div>
              <div className="space-x-2 space-y-2">
                <Badge className="bg-slate-800 dark:bg-white">ShadCN UI</Badge>
                <Badge className="bg-slate-800 dark:bg-white">Prisma</Badge>
                <Badge className="bg-slate-800 dark:bg-white">PostgreSQL</Badge>
                <Badge className="bg-slate-800 dark:bg-white">NeonDB</Badge>
                <Badge className="bg-slate-800 dark:bg-white">Git</Badge>
                <Badge className="bg-slate-800 dark:bg-white">Vercel</Badge>
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
              title="Footwear E-Commerce Store"
              desc="Modern storefront with product filters, saved items, cart, user and guest checkout and orders list."
              tech="Next.js, TypeScript, Tailwind, Prisma, Stripe"
              demoHref="https://fusionfootwear-store.vercel.app/"
              githubHref="https://github.com/JaiBh/fusionfootwear-store"
              image={"/thumbnails/fusionfootwear_store_thumnail.png"}
            ></ProjectItem>
            <ProjectItem
              title="Footwear E-Commerce Admin"
              desc="Manage products, orders, and analytics for the footwear store in a clean dashboard UI."
              tech="Next.js, ShadCN UI, Prisma, PostgreSQL"
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
