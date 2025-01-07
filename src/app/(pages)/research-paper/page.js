import Wrapper from "@/app/_components/Wrapper";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Wrapper>
        <h1 className="font-semibold md:text-5xl text-4xl mb-4">
          Research Paper
        </h1>
        <div className="text-justify font-extralight space-y-4">
          <p>
            Regarding this, I have also written a research paper about - the
            “Role of Technology in finding Planned Defaulters” published in
            International Journal of Advance Research, Ideas and Innovations in
            Technology (Volume 10, Issue 1 - V10I1-1192) Available online at:{" "}
            <Link href="https://www.ijariit.com" className="text-blue-400">
              https://www.ijariit.com
            </Link>
          </p>
          <p>
            In this research paper, I have explored the concept of defaulters,
            how to identify them, the various techniques that were used by banks
            to identify them and how when the old techniques, integrated with
            new advanced technologies, help in finding these defaulters more
            quickly.
          </p>
          <p>
            For my study of the above, I have done a survey and interviewed
            various street vendors regarding the mode of payment used by them
            and the customers and cumulated all my research in a documentary as
            well. I made a documentary so that more awareness can be generated
            towards this and the audience know how this system works and become
            self-aware so that they don&apos;t become a victim of fraud.
          </p>
        </div>
      </Wrapper>
    </>
  );
}
