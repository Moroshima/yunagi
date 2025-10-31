import shortcuts from "@data/shortcuts.json";

export default function Shortcuts() {
  return (
    <div>
      <h1>捷径</h1>
      {shortcuts.map((categorySection, categorySectionIndex) => {
        return (
          <div key={`shortcut-category-${categorySectionIndex}`}>
            <h2 key={`shortcut-category-title-${categorySectionIndex}`}>
              {categorySection.category}
            </h2>
            {categorySection.websites.map((website, websiteIndex) => (
              <div key={`shortcut-website-${websiteIndex}`}>
                <a href={website.url} target="_blank" rel="noopener noreferrer">
                  {website.name}
                </a>
                <p>{website.description}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
