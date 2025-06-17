import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  demoHref: string;
  githubHref: string;
  title: string;
  desc: string;
  tech: string;
  image: StaticImageData;
}

function ProjectItem({
  title,
  desc,
  tech,
  image,
  demoHref,
  githubHref,
}: ProjectItemProps) {
  return (
    <div className="border rounded-xl p-4 shadow-sm space-y-3">
      <div className="relative aspect-square bg-primary rounded-xl p-1">
        <div className="relative w-full h-full">
          <Link
            href={"https://www.jaibh-finance.xyz"}
            target="_BLANK"
            className="group"
          >
            <Image
              src={image}
              alt={`${title} thumbnail`}
              fill
              priority
              className="object-contain  rounded-xl transition group-hover:opacity-90"
            ></Image>
          </Link>
        </div>
      </div>
      <h3 className="text-xl font-bold capitalize">{title}</h3>
      <p className="text-gray-700">{desc}</p>
      <p className="text-sm text-gray-500 capitalize">Tech: {tech}</p>
      <div className="flex gap-3">
        <a href={demoHref} className="text-blue-600 hover:underline">
          Live Demo
        </a>
        <a href={githubHref} className="text-blue-600 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
}
export default ProjectItem;
