
import { Button } from "@/components/ui/button";
import { Tree } from "@geist-ui/core";
import Link from "next/link";
import { SVGProps } from "react";

interface EditorProps {
    fileTree: React.ReactNode;
    code: string;
}

export default function Editor({fileTree, code}: EditorProps) {
  return (
    <div className="flex flex-col h-[cal(100vh-10px)] rounded-md">
      <div className="flex-1 flex">
        <div className="text-black w-80 p-4 overflow-y-auto">
          <div className="mb-4">
            <h3 className="font-medium mb-2">Files</h3>
            <div className="space-y-2 text-white">
                {fileTree}
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-gray-300 p-4 overflow-y-auto rounded-md">
          <pre className="whitespace-pre-wrap border-0">
            <code className="language-javascript text-white">
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
