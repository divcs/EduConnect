export const userProfile = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/images/avatar1.jpg",
  course: "CAP756",
  semester: "2nd",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "Python"
  ],
  bio: "Passionate about web development and creating user-friendly applications. Currently learning React and looking to collaborate on interesting projects.",
  stats: {
    notesShared: 15,
    teamsJoined: 3,
    messagesSent: 45
  },
  recentActivity: [
    {
      id: 1,
      type: "note",
      title: "React Components Guide",
      date: "2024-04-15",
      action: "shared"
    },
    {
      id: 2,
      type: "team",
      title: "Web Warriors",
      date: "2024-04-14",
      action: "joined"
    },
    {
      id: 3,
      type: "message",
      title: "Group Discussion",
      date: "2024-04-13",
      action: "participated"
    }
  ]
}; 