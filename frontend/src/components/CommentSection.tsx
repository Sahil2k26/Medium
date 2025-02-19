// "use client"

// import { useState } from "react"
// import { Shield, X, MoreHorizontal, ChevronDown } from "lucide-react"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// export default function CommentsSection() {
//   const [thought, setThought] = useState("")

//   return (
//     <div className="w-full max-w-2xl mx-auto p-4 space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-xl font-semibold">Responses (15)</h2>
//         <div className="flex items-center gap-2">
//           <button className="p-2 hover:bg-gray-100 rounded-full">
//             <Shield className="w-5 h-5 text-gray-600" />
//           </button>
//           <button className="p-2 hover:bg-gray-100 rounded-full">
//             <X className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>
//       </div>

//       {/* Comment Input */}
//       <div className="space-y-4 border rounded-lg p-4">
//         <div className="flex gap-4">
//           <Avatar className="w-10 h-10">
//             <AvatarFallback className="bg-purple-500 text-white">S</AvatarFallback>
//           </Avatar>
//           <div className="flex-1">
//             <textarea
//               placeholder="What are your thoughts?"
//               className="w-full min-h-[100px] p-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-gray-200"
//               value={thought}
//               onChange={(e) => setThought(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="flex gap-2">
//             <button className="p-2 hover:bg-gray-100 rounded font-serif">B</button>
//             <button className="p-2 hover:bg-gray-100 rounded italic">i</button>
//           </div>
//           <div className="flex items-center gap-4">
//             <Button variant="ghost">Cancel</Button>
//             <Button className="bg-green-100 text-green-700 hover:bg-green-200">Respond</Button>
//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <Checkbox id="publish" />
//           <label htmlFor="publish" className="text-sm text-gray-600">
//             Also publish to my profile
//           </label>
//         </div>
//       </div>

//       {/* Filter */}
//       <DropdownMenu>
//         <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium">
//           MOST RELEVANT <ChevronDown className="w-4 h-4" />
//         </DropdownMenuTrigger>
//         <DropdownMenuContent>
//           <DropdownMenuItem>Most Relevant</DropdownMenuItem>
//           <DropdownMenuItem>Newest First</DropdownMenuItem>
//           <DropdownMenuItem>Oldest First</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       {/* Comments */}
//       <div className="space-y-6">
//         <div className="flex gap-4">
//           <Avatar className="w-10 h-10">
//             <AvatarFallback>IA</AvatarFallback>
//           </Avatar>
//           <div className="flex-1">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <span className="font-medium">Imran Ali</span>
//                 <span className="text-sm text-gray-500">Jan 19</span>
//               </div>
//               <Button variant="ghost" size="icon">
//                 <MoreHorizontal className="w-4 h-4" />
//               </Button>
//             </div>
//             <p className="mt-1">Great information</p>
//             <div className="flex items-center gap-4 mt-2">
//               <button className="flex items-center gap-2 text-sm text-gray-500">
//                 👏 <span>12</span>
//               </button>
//               <button className="text-sm font-medium">Reply</button>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <Avatar className="w-10 h-10">
//             <AvatarFallback>RA</AvatarFallback>
//           </Avatar>
//           <div className="flex-1">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <span className="font-medium">Rui Alves</span>
//                 <span className="text-sm text-gray-500">Jan 18</span>
//               </div>
//               <Button variant="ghost" size="icon">
//                 <MoreHorizontal className="w-4 h-4" />
//               </Button>
//             </div>
//             <p className="mt-1">
//               Hi James, thank you for sharing your fascinating experience and mesmerizing images with us at Engage and
//               Alchemy Publications.
//             </p>
//             <div className="flex items-center gap-4 mt-2">
//               <button className="flex items-center gap-2 text-sm text-gray-500">
//                 👏 <span>8</span>
//               </button>
//               <button className="text-sm font-medium">Reply</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

