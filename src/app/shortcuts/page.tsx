import Link from "next/link";
import config from "@data/config.json";
import shortcuts from "@data/shortcuts.json";

const { navigation } = config;

export default function Shortcuts() {
  return (
    <main>
      <h1>捷径</h1>
      <p>
        {navigation.primary.find(({ key }) => key === "shortcuts")?.subtitle}
      </p>
      {shortcuts.map((categorySection, categorySectionIndex) => {
        return (
          <div key={`shortcut-category-${categorySectionIndex}`}>
            <h2 key={`shortcut-category-title-${categorySectionIndex}`}>
              {categorySection.category}
            </h2>
            {categorySection.websites.map((website, websiteIndex) => (
              <div key={`shortcut-website-${websiteIndex}`}>
                <Link
                  href={website.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {website.name}
                </Link>
                <p>{website.description}</p>
              </div>
            ))}
          </div>
        );
      })}
    </main>
  );
}
