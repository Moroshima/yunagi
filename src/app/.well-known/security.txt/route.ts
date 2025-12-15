import config from "@data/config.json";

const { security } = config;

export async function GET() {
  return new Response(
    `Contact: ${security.contact}\nExpires: ${security.expires}\n`,
    {
      headers: new Headers({ "Content-Type": "text/plain" }),
    },
  );
}

export const dynamic = "force-static";
