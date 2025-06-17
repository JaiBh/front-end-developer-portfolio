import Image from "next/image";
import headshot from "@/assets/headshot.jpeg";
import personal_finance_thumbnail from "@/assets/personal_finance_thumbnail.png";
import fusionfootwear_store_thumbnail from "@/assets/fusionfootwear_store_thumnail.png";
import fusionfootwear_admin_thumbnail from "@/assets/fusionfootwear_admin_thumnail.png";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ProjectItem from "@/components/ui/ProjectItem";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

export default function PortfolioHome() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 md:p-10">
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Jai Bhullar</h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Front-End / Full-Stack Developer
        </p>
        <p className="mt-4 text-gray-500">
          Building modern web apps with Next.js, TypeScript & Tailwind.
        </p>
        <div className="mt-6 flex justify-center gap-4">
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
        </div>
      </section>

      <section id="about" className="mb-16 ">
        <Container className="mx-auto max-lg:max-w-md max-lg:text-center grid lg:grid-cols-[3fr_5fr] gap-8 lg:gap-16 lg:items-center">
          <div className="relative aspect-square w-full mx-auto max-lg:max-w-sm overflow-hidden ">
            <Image
              src={headshot}
              alt="Headshot"
              priority
              fill
              className="object-cover rounded-2xl"
            ></Image>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-semibold">About Me</h2>
            <p className="text-gray-700">
              I'm a self-taught web developer focused on building user-friendly,
              high-performance web applications. My stack includes React,
              Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL (via
              NeonDB). I'm passionate about solving real-world problems through
              thoughtful design and clean code.
            </p>
            <div className="space-y-3">
              <div className="space-x-2 space-y-2">
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
              </div>

              <div className="space-x-2 space-y-2">
                <Badge className="bg-blue-600">React</Badge>
                <Badge className="bg-blue-600">Next.js</Badge>
                <Badge className="bg-blue-600">Tailwind CSS</Badge>
                <Badge className="bg-blue-600">Clerk</Badge>
              </div>
              <div className="space-x-2 space-y-2">
                <Badge className="bg-slate-800">ShadCN UI</Badge>
                <Badge className="bg-slate-800">Prisma</Badge>
                <Badge className="bg-slate-800">PostgreSQL</Badge>
                <Badge className="bg-slate-800">NeonDB</Badge>

                <Badge className="bg-slate-800">Git</Badge>
                <Badge className="bg-slate-800">Vercel</Badge>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="projects" className="mb-16">
        <Container>
          <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectItem
              title="Footwear E-Commerce Store"
              desc="Modern storefront with product filters, saved items, cart, user and guest checkout and orders list."
              tech="Next.js, TypeScript, Tailwind, Prisma, Stripe"
              demoHref="https://fusionfootwear-store.vercel.app/"
              githubHref="https://github.com/JaiBh/fusionfootwear-store"
              image={fusionfootwear_store_thumbnail}
            ></ProjectItem>
            <ProjectItem
              title="Footwear E-Commerce Admin Panel"
              desc="Manage products, orders, and analytics for the footwear store in a clean dashboard UI."
              tech="Next.js, ShadCN UI, Prisma, PostgreSQL"
              githubHref="https://github.com/JaiBh/fusionfootwear-admin"
              demoHref="https://www.fusionfootwear-admin.xyz/"
              image={fusionfootwear_admin_thumbnail}
            ></ProjectItem>
            <ProjectItem
              title="Personal Finance App"
              desc="Track budgets, bills, savings pots and transactions with live charts and breakdowns."
              tech="Next.js, TypeScript, Tailwind, Prisma, Clerk, PostgreSQL"
              demoHref="https://www.jaibh-finance.xyz"
              githubHref="https://github.com/JaiBh/nextjs-personal-finance-app"
              image={personal_finance_thumbnail}
            ></ProjectItem>
          </div>
        </Container>
      </section>

      <section id="contact" className="text-center max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-2 text-gray-600">
          Get in touch if you'd like to work together or have any questions.
        </p>
        <p className="text-gray-700">
          Email:{" "}
          <a
            href="mailto:jaibhullar.developer@outlook.com"
            className="text-blue-600 hover:underline"
          >
            jaibhullar.developer@outlook.com
          </a>
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://github.com/JaiBh"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jaibhullar"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
