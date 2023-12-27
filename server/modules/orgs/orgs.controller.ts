import { Hono } from "hono";

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
router.get("/:orgId/channels", (c) =>
  c.json([
    {
      id: 1,
      name: "Class",
      channels: [
        {
          id: "1",
          name: "Group A",
        },
        {
          id: "2",
          name: "Group B",
        },
      ],
    },
    {
      id: 2,
      name: "Class 2",
      channels: [
        {
          id: "3",
          name: "Group A2",
        },
        {
          id: "4",
          name: "Group B2",
        },
      ],
    },
    {
      id: 3,
      name: "Class 2",
      channels: [
        {
          id: "5",
          name: "Group a2",
        },
        {
          id: "6",
          name: "Group b2",
        },
      ],
    },
    {
      id: 4,
      name: "Class 3",
      groups: [
        {
          id: "7",
          name: "Group a2",
        },
        {
          id: "8",
          name: "Group b2",
        },
      ],
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
