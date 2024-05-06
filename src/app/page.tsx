import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moroshima's Blog",
  description:
    "Everything faded into mist. The past was erased, the erasure was forgotten, the lie became truth.",
};

export default function Home() {
  return (
    <>
      <main>
        <div>
          <p>Everything faded into mist.</p>
          <p>
            The past was erased, the erasure was forgotten, the lie became
            truth.
          </p>
          <p>
            <span
            >
              George Orwell.
            </span>{" "}
            <em>Nineteen Eighty-Four</em>.
          </p>
        </div>
      </main>
    </>
  );
}
