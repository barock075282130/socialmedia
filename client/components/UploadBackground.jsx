// Currently Fixing

// "use client";

// import { useContext, useState } from "react";
// import { userData } from "./context/userContext";

// const UploadImage = ({ photo, setPhoto }) => {
//   const serverUrl = "http://localhost:4000";
//   const { user } = useContext(userData);
//   const [open, setOpen] = useState(false);
//   const upload = async (e) => {
//     e.preventDefault();
//     const formdata = new FormData();
//     formdata.append("profile", photo.profile);
//     formdata.append("background", photo.background);
//     try {
//       const img = await fetch(`${serverUrl}/profile/upload/${user?.userId}`, {
//         method: "POST",
//         headers: {
//           "x-access-token": "Bearer " + localStorage.getItem("x-access-token"),
//         },
//         body: formdata,
//       });
//     } catch (error) {
//       throw error;
//     }
//   };
//   return (
//     <>
//       <div>
//         <button onClick={() => setOpen(true)} className=" blue_btn">
//           Edit Photo
//         </button>
//       </div>
//       {open && (
//         <div className="absolute flex justify-center z-50 p-6 bg-white">
//           <form onSubmit={upload} encType="multipart/form-data">
//             <span>Profile</span>
//             <input
//               type="file"
//               accept="image/*"
//               filename="profile"
//               onChange={(e) =>
//                 setPhoto({ ...photo, profile: e.target.files[0] })
//               }
//             />
//             <span>Background</span>
//             <input
//               type="file"
//               filename="background"
//               onChange={(e) =>
//                 setPhoto({ ...photo, background: e.target.files[0] })
//               }
//             />
//             <div className="flex justify-between">
//               <button className="blue_btn">Upload</button>
//               <span
//                 onClick={() => setOpen(false)}
//                 className="gray_btn cursor-pointer"
//               >
//                 Cancle
//               </span>
//             </div>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default UploadImage;
