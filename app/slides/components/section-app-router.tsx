"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { GeistProvider, CssBaseline, Tree } from "@geist-ui/core";
import Editor from "@/components/Editor";
import { useState } from "react";

export function SectionAppRouter() {
  const [codePage, setCodePage] = useState(0);

  const codeSnippets = [
    `
"use client";

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return <h1>My Dashboard Page</h1>
}
                      `,
    `
"use client";

export default function Layout() {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>);
}
                      `,
  ];


  return (
    <GeistProvider>
      <CssBaseline />
      <div className="min-h-screen relative w-screen">
        <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
          <span className="font-bold">App Router</span>
          <span className="text-[#878787]">
            <Link href="/">Home</Link>
          </span>
        </div>
        <div className="flex flex-col min-h-screen justify-center container">
          <Editor
            fileTree={
              <Tree>
                <Tree.File name="package.json" />
                <Tree.Folder name="app">
                  <Tree.Folder name="dashboard">
                    <Tree.File
                      name="layout.tsx"
                      onClick={() => {
                        setCodePage(1);
                      }}
                    />
                    <Tree.File
                      name="page.tsx"
                      onClick={() => {
                        setCodePage(0);
                      }}
                    />
                  </Tree.Folder>

                  <Tree.Folder name="project">
                    <Tree.Folder name="components">
                      <Tree.Folder name="Sidebar">
                        <Tree.File name="index.tsx" />
                      </Tree.Folder>
                      <Tree.Folder name="Card">
                        <Tree.File name="index.tsx" />
                      </Tree.Folder>
                    </Tree.Folder>
                    <Tree.File name="layout.tsx" />
                    <Tree.File name="page.tsx" />
                    <Tree.Folder name="[project_id]">
                      <Tree.Folder name="search">
                        <Tree.File name="page.tsx" />
                      </Tree.Folder>
                      <Tree.Folder name="settings">
                        <Tree.File name="page.tsx" />
                      </Tree.Folder>
                    </Tree.Folder>
                  </Tree.Folder>
                  <Tree.File name="page.tsx" />
                </Tree.Folder>
                <Tree.Folder name="components">
                  {/* <Tree.File name="layout.tsx" /> */}
                  <Tree.Folder name="Header">
                    <Tree.File name="index.tsx" />
                    <Tree.File name="index.test.tsx" />
                  </Tree.Folder>
                  <Tree.Folder name="Footer">
                    <Tree.File name="index.tsx" />
                    <Tree.File name="index.test.tsx" />
                  </Tree.Folder>
                </Tree.Folder>
                <Tree.File name="readme.md" />
              </Tree>
            }
            code={codeSnippets[codePage]}
          />
        </div>
      </div>
    </GeistProvider>
  );
}
