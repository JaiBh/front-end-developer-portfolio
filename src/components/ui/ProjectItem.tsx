import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./card";

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
    <>
      <Card>
        <CardContent className="space-y-4 h-full grid grid-rows-[auto_1fr]">
          <div className="relative aspect-square bg-primary rounded-xl p-1">
            <div className="relative w-full h-full">
              <Link
                href={"https://www.jaibh-finance.xyz"}
                target="_BLANK"
                className="group"
                rel="noopener noreferrer"
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
          <div className="space-y-3  flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-xl font-bold capitalize">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
            <div className="space-y-2 ">
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
          </div>
        </CardContent>
      </Card>
    </>
  );
}
export default ProjectItem;
