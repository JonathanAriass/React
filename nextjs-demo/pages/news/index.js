// domain.com/news
import Link from "next/link";
import React from "react";

function NewsPage() {
  return (
    <React.Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJS</Link>
        </li>
        <li>React</li>
      </ul>
    </React.Fragment>
  );
}

export default NewsPage;
