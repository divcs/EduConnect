export const messagesData = [
  {
    id: 1,
    sender: "John Doe",
    lastMessage: "Hey, did you get the notes for today's class?",
    time: "10:30 AM",
    unread: true,
    avatar: "/images/avatar1.jpg"
  },
  {
    id: 2,
    sender: "Jane Smith",
    lastMessage: "Thanks for sharing those resources!",
    time: "Yesterday",
    unread: false,
    avatar: "/images/avatar2.jpg"
  },
  {
    id: 3,
    sender: "Study Group",
    lastMessage: "Meeting tomorrow at 2 PM",
    time: "2 days ago",
    unread: false,
    avatar: "/images/group-avatar.jpg"
  }
];

export const chatMessages = {
  1: [
    { id: 1, sender: "John Doe", message: "Hey, did you get the notes for today's class?", time: "10:30 AM" },
    { id: 2, sender: "You", message: "Yes, I have them. Do you need them?", time: "10:32 AM" },
    { id: 3, sender: "John Doe", message: "Yes please! Can you share them?", time: "10:33 AM" }
  ],
  2: [
    { id: 1, sender: "Jane Smith", message: "Thanks for sharing those resources!", time: "Yesterday" },
    { id: 2, sender: "You", message: "No problem! Let me know if you need anything else.", time: "Yesterday" }
  ],
  3: [
    { id: 1, sender: "Study Group", message: "Meeting tomorrow at 2 PM", time: "2 days ago" },
    { id: 2, sender: "You", message: "I'll be there!", time: "2 days ago" }
  ]
}; 