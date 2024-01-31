import { Hono } from "hono";
import { db } from "@/lib/db";

export const router = new Hono();
router.get("/", (c) =>
  c.json([
    {
      id: "1",
      icon: "https://pbs.twimg.com/profile_images/1645815519369629696/3EZECjMo_400x400.jpg",
      name: "imgnai",
    },
    {
      id: "2",
      icon: "https://enouvo.com/wp-content/uploads/2022/07/cropped-logo-vien-trang-file-in-01.png",
      name: "enouvo",
    },
  ])
);
router.get("/orgs1", async (c) => {
  const orgs = await db.org.findMany({});
  return c.json(orgs);
});
router.get("/:orgId/channels", (c) =>
  c.json([
    {
      id: "1",
      name: "Class 1",
      category: {
        id: 1,
        name: "class",
      },
    },
    {
      id: "2",
      name: "Class 2",
      category: {
        id: 1,
        name: "class",
      },
    },
    {
      id: "3",
      name: "Class 1",
      category: {
        id: 2,
        name: "class Audio",
      },
    },
    {
      id: "4",
      name: "Class 2",
      category: {
        id: 2,
        name: "class Audio",
      },
    },
  ])
);
router.get("/:orgId/channels/:channelId/messages", (c) =>
  c.json([
    {
      id: 1,
      sender: {
        id: 2,
        name: "TinNguyen",
        avatar: "https://bom.so/Tkos14",
      },
      createdAt: "09/11/2023 19:44",
      message: "Hey,How are you?",
    },
    {
      id: 2,
      sender: {
        id: 2,
        name: "VyHuynh",
        avatar: "https://bom.so/Tkos14",
      },
      createdAt: "09/11/2023 19:44",
      message: "I fine",
    },
    {
      id: 3,
      sender: {
        id: 3,
        name: "Tin so 2",
        avatar: "https://bom.so/Tkos14",
      },
      createdAt: "09/11/2023 19:44",
      message: "Hey hey hey",
    },
  ])
);
router.get("/:orgId/channels/:channelId/members", (c) =>
  c.json([
    {
      id: 1,
      name: "john_doe",
      avatar: "https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg",
      backgroundColor: "#d40000",
      roles: ["Admin", "f0"],
      category: {
        id: 1,
        name: "Đà Nẵng",
      },
    },
    {
      id: 2,
      name: "john_doe",
      avatar: "https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg",
      backgroundColor: "#d40000",
      roles: ["Học viên"],
      category: {
        id: 2,
        name: "Online",
      },
    },
    {
      id: 3,
      name: "john_doe",
      avatar: "https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg",
      backgroundColor: "#d40000",
      roles: ["Admin", "f0"],
      category: {
        id: 3,
        name: "Đà Nẵng",
      },
    },
  ])
);
