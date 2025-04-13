"use client";

import React from "react";
import Link from "next/link";
import {use} from "react";

// for server components use async and await
// for client components use the "use" hook

function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`} replace>English</Link>
        <Link href={`/articles/${articleId}?lang=es`} replace>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`} replace>French</Link>
      </div>
    </div>
  );
}

export default NewsArticle;
