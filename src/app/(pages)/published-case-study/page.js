import Wrapper from "@/app/_components/Wrapper";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Wrapper>
        <h1 className="font-semibold md:text-5xl text-4xl mb-4">
          Case study on Sustainable Fashion : H&M{" "}
        </h1>
        <div className="md:text-justify font-extralight space-y-4">
          <p>
            This case study studies trends in Sustainable fashion and H&M
            approach towards it and future trends for industry.
          </p>
          <p>
            Sustainable fashion is not just a trend, but a way of life. As
            consumers continue to prioritize sustainability in their fashion
            choices, sustainable fashion will become the norm. By embracing
            sustainable fashion, we can create a better future for ourselves,
            the fashion industry, and the planet.
          </p>
          <p>
            By choosing sustainable fashion, we can reduce our carbon footprint,
            support ethical and fair labor practices, and promote a healthier
            planet.
          </p>
          <p>
            As more consumers and fashion brands prioritize sustainability, we
            can create a more responsible and sustainable fashion industry that
            benefits us all. So let&apos;s embrace sustainable fashion and make
            a positive impact on the world around us.
          </p>
          <p>
            Link:{" "}
            <Link
              className="text-blue-400"
              href="https://medium.com/@ananyabh09/case-study-d740e01a73de"
            >
              https://medium.com/@ananyabh09/case-study-d740e01a73de
            </Link>
          </p>

          <h1 className="font-semibold md:text-5xl text-4xl mt-8 mb-4">
            Projects
          </h1>
          <div>
            <h1>
              1. Project Snakes & Ladder- |{" "}
              <Link
                className="text-blue-400"
                href="https://github.com/AnanyaBhatnagar09/Snakes-and-Ladder.git"
              >
                https://github.com/AnanyaBhatnagar09/Snakes-and-Ladder.git
              </Link>{" "}
              | Advanced Data Structures, C implementation
            </h1>
            <p>
              •Developed a two-player Snakes and Ladders game in C, featuring
              dice rolls, seamless gameplay, and an algorithm that calculates
              the shortest path to the destination.Used data structures like
              Graphs, 2D Arrays(Matrices) ,1D Arrays(Lists) and Queues.
            </p>
          </div>
          <div>
            <h1>
              2. Project Web Scraper for Movie Titles- |{" "}
              <Link
                className="text-blue-400"
                href="https://github.com/AnanyaBhatnagar09/Top-100-movies- towatch.git"
              >
                https://github.com/AnanyaBhatnagar09/Top-100-movies- towatch.git
              </Link>{" "}
              | Advanced Data Structures, C implementation
            </h1>
            <p>
              •Utilized the requests library to fetch HTML content from an
              archived webpage, used BeautifulSoup to parse and locate movie
              titles, reversed the list order to maintain ranking, and
              implemented file handling in Python to write the titles to a text
              file for data persistence.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
