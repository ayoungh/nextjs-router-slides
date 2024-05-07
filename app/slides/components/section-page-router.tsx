"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { GeistProvider, CssBaseline, Tree } from "@geist-ui/core";
import Editor from "@/components/Editor";

export function SectionPageRouter() {
  return (
    <GeistProvider>
      <CssBaseline />
      <div className="min-h-screen relative w-screen">
        <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
          <span className="font-bold">Pages Router</span>
          <span className="text-[#878787]">
            <Link href="/">Home</Link>
          </span>
        </div>
        <div className="flex flex-col min-h-screen justify-center container">
          <Editor
            fileTree={
              <Tree>
                <Tree.File name="package.json" />
                <Tree.Folder name="pages">
                  <Tree.Folder name="dashboard">
                    <Tree.File name="index.tsx" />
                  </Tree.Folder>

                  <Tree.Folder name="project">
                    <Tree.File name="index.tsx" />
                    <Tree.Folder name="[project_id]">
                      <Tree.Folder name="search">
                        <Tree.File name="index.tsx" />
                      </Tree.Folder>
                      <Tree.Folder name="settings">
                        <Tree.File name="index.tsx" />
                      </Tree.Folder>
                    </Tree.Folder>
                  </Tree.Folder>

                  <Tree.File name="index.tsx" />
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
            code={`
          
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  return <h1>My Page</h1>
}
          
                      `}
          />
        </div>
      </div>
    </GeistProvider>
  );
}
