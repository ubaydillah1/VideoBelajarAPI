/* eslint-disable react/prop-types */
const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex list-none text-text-dark-secondary">
        {items.map((item, index) => {
          const href = item.href || "#";

          let content;
          if (items.length - 1 === index) {
            content = (
              <a
                href={href}
                className="text-black"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.label}
              </a>
            );
          } else {
            content = (
              <a
                href={href}
                className="hover:underline text-text-dark-secondary"
              >
                {item.label}
              </a>
            );
          }

          return (
            <li key={index} className="flex items-center">
              {index !== 0 && (
                <span className="mx-2 text-text-dark-secondary">/</span>
              )}
              {content}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
