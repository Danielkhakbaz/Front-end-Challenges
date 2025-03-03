// import { useState } from "react";

// type TreesType = {
//   name: string;
//   type: "dir" | "file";
//   children?: TreesType[];
// };

// const trees: TreesType[] = [
//   {
//     name: "node_modules",
//     type: "dir",
//     children: [
//       {
//         name: "lodash",
//         type: "dir",
//         children: [{ name: "lodash.js", type: "file" }],
//       },
//     ],
//   },
//   {
//     name: "public",
//     type: "dir",
//     children: [{ name: "icon.svg", type: "file" }],
//   },
//   {
//     name: "src",
//     type: "dir",
//     children: [
//       { name: "App.tsx", type: "file" },
//       { name: "main.tsx", type: "file" },
//       {
//         name: "components",
//         type: "dir",
//         children: [
//           {
//             name: "common",
//             type: "dir",
//             children: [
//               {
//                 name: "sidebar",
//                 type: "dir",
//                 children: [{ name: "sidebar.tsx", type: "file" }],
//               },
//             ],
//           },
//           {
//             name: "features",
//             type: "dir",
//             children: [
//               {
//                 name: "cart",
//                 type: "dir",
//                 children: [
//                   {
//                     name: "icon",
//                     type: "dir",
//                     children: [
//                       {
//                         name: "icon.tsx",
//                         type: "file",
//                       },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   { name: ".gitignore", type: "file" },
//   { name: "package.json", type: "file" },
// ];

// const App = () => {
//   const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set());

//   const toggleExpand = (path: string) => {
//     setExpandedPaths((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(path)) newSet.delete(path);
//       else newSet.add(path);
//       return newSet;
//     });
//   };

//   return (
//     <div className="w-full h-screen flex flex-col justify-start items-start text-left p-4">
//       {trees.map((tree) => (
//         <Entry key={tree.name} tree={tree} depth={0} path={tree.name} expandedPaths={expandedPaths} toggleExpand={toggleExpand} />
//       ))}
//     </div>
//   );
// };

// const Entry = ({ tree, depth, path, expandedPaths, toggleExpand }: {
//   tree: TreesType;
//   depth: number;
//   path: string;
//   expandedPaths: Set<string>;
//   toggleExpand: (path: string) => void;
// }) => {
//   const isExpanded = expandedPaths.has(path);

//   return (
//     <div
//       className="text-sm"
//       style={{
//         paddingLeft: `${depth * 20}px`,
//         cursor: tree.children ? "pointer" : "default",
//       }}
//       onClick={tree.children ? () => toggleExpand(path) : undefined}
//     >
//       <span className={tree.children ? "font-bold text-blue-500" : "text-gray-700"}>
//         {tree.children && (isExpanded ? "📂 " : "📁 ")}
//         {!tree.children && "📄 "}
//         {tree.name}
//       </span>

//       {isExpanded && tree.children && (
//         <div className="flex flex-col">
//           {tree.children.map((item) => (
//             <Entry
//               key={item.name}
//               tree={item}
//               depth={depth + 1}
//               path={`${path}/${item.name}`}
//               expandedPaths={expandedPaths}
//               toggleExpand={toggleExpand}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

type TreesType = {
  name: string;
  type: string;
  children?: TreesType[];
};

const trees: TreesType[] = [
  {
    name: "node_modules",
    type: "dir",
    children: [
      {
        name: "lodash",
        type: "dir",
        children: [{ name: "lodash.js", type: "file" }],
      },
    ],
  },
  {
    name: "public",
    type: "dir",
    children: [{ name: "icon.svg", type: "file" }],
  },
  {
    name: "src",
    type: "dir",
    children: [
      { name: "App.tsx", type: "file" },
      { name: "main.tsx", type: "file" },
      {
        name: "components",
        type: "dir",
        children: [
          {
            name: "common",
            type: "dir",
            children: [
              {
                name: "sidebar",
                type: "dir",
                children: [{ name: "sidebar.tsx", type: "file" }],
              },
            ],
          },
          {
            name: "features",
            type: "dir",
            children: [
              {
                name: "cart",
                type: "dir",
                children: [
                  {
                    name: "icon",
                    type: "dir",
                    children: [
                      {
                        name: "icon.tsx",
                        type: "file",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { name: ".gitignore", type: "file" },
  { name: "package.json", type: "file" },
];

const App = () => {
  return <>
    {trees.map((tree) => (
      <div key={tree.name}>
        
      </div>
    ))}
  </>;
};

export default App;
