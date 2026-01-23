// monitors/data.ts
// monitors/types.ts
export type Monitor = {
    id: number;
    name: string;
    url: string;
    status: "Up" | "Down";
    uptime: string;
    lastChecked: string;
};

export const monitorsData: Monitor[] =[
  { id: 1, name: "Aman Sharma", url: "https://aman-server.in", status: "Up", uptime: "99.5%", lastChecked: "2024-01-26 10:30 AM" },
  { id: 2, name: "Neha Verma", url: "https://neha-api.in", status: "Down", uptime: "92.1%", lastChecked: "2024-01-26 09:10 AM" },
  { id: 3, name: "Rohit Singh", url: "https://rohitapp.in", status: "Up", uptime: "98.4%", lastChecked: "2024-01-26 08:40 AM" },
  { id: 4, name: "Pooja Patel", url: "https://pooja-service.in", status: "Up", uptime: "96.7%", lastChecked: "2024-01-26 07:55 AM" },
  { id: 5, name: "Karan Mehta", url: "https://karan-portal.in", status: "Down", uptime: "90.3%", lastChecked: "2024-01-26 06:30 AM" },

  { id: 6, name: "Suresh Yadav", url: "https://suresh-dashboard.in", status: "Up", uptime: "97.9%", lastChecked: "2024-01-26 05:50 AM" },
  { id: 7, name: "Anjali Gupta", url: "https://anjali-site.in", status: "Down", uptime: "89.2%", lastChecked: "2024-01-26 04:40 AM" },
  { id: 8, name: "Vikas Kumar", url: "https://vikas-api.in", status: "Up", uptime: "99.0%", lastChecked: "2024-01-26 03:20 AM" },
  { id: 9, name: "Deepa Reddy", url: "https://deepa-app.in", status: "Up", uptime: "95.8%", lastChecked: "2024-01-26 02:10 AM" },
  { id: 10, name: "Manish Joshi", url: "https://manish-service.in", status: "Down", uptime: "91.6%", lastChecked: "2024-01-26 01:00 AM" },

  { id: 11, name: "Shivani Dixit", url: "https://shivani-site.in", status: "Up", uptime: "98.2%", lastChecked: "2024-01-26 12:30 AM" },
  { id: 12, name: "Aakash Jain", url: "https://aakash-api.in", status: "Up", uptime: "97.0%", lastChecked: "2024-01-25 11:20 PM" },
  { id: 13, name: "Ritu Sharma", url: "https://ritu-dashboard.in", status: "Down", uptime: "88.9%", lastChecked: "2024-01-25 10:10 PM" },
  { id: 14, name: "Sanjay Rao", url: "https://sanjay-app.in", status: "Up", uptime: "96.4%", lastChecked: "2024-01-25 09:05 PM" },
  { id: 15, name: "Neelam Kaur", url: "https://neelam-service.in", status: "Down", uptime: "90.0%", lastChecked: "2024-01-25 08:00 PM" },

  { id: 16, name: "Harsh Vardhan", url: "https://harsh-site.in", status: "Up", uptime: "99.2%", lastChecked: "2024-01-25 07:15 PM" },
  { id: 17, name: "Madhuri Nair", url: "https://madhuri-api.in", status: "Up", uptime: "97.8%", lastChecked: "2024-01-25 06:30 PM" },
  { id: 18, name: "Vivek Bhatia", url: "https://vivek-dashboard.in", status: "Down", uptime: "85.4%", lastChecked: "2024-01-25 05:45 PM" },
  { id: 19, name: "Rakesh Choudhary", url: "https://rakesh-app.in", status: "Up", uptime: "96.9%", lastChecked: "2024-01-25 04:55 PM" },
  { id: 20, name: "Aarti Sharma", url: "https://aarti-service.in", status: "Down", uptime: "89.7%", lastChecked: "2024-01-25 03:40 PM" },

  { id: 21, name: "Kavita Singh", url: "https://kavita-site.in", status: "Up", uptime: "98.6%", lastChecked: "2024-01-25 02:20 PM" },
  { id: 22, name: "Rohit Jain", url: "https://rohit-api.in", status: "Up", uptime: "97.5%", lastChecked: "2024-01-25 01:10 PM" },
  { id: 23, name: "Priya Desai", url: "https://priya-dashboard.in", status: "Down", uptime: "87.3%", lastChecked: "2024-01-25 12:05 PM" },
  { id: 24, name: "Sandeep Kumar", url: "https://sandeep-app.in", status: "Up", uptime: "95.6%", lastChecked: "2024-01-25 11:00 AM" },
  { id: 25, name: "Anita Reddy", url: "https://anita-service.in", status: "Down", uptime: "90.9%", lastChecked: "2024-01-25 10:00 AM" },

  { id: 26, name: "Amanpreet Kaur", url: "https://amanpreet-site.in", status: "Up", uptime: "99.1%", lastChecked: "2024-01-25 09:20 AM" },
  { id: 27, name: "Gaurav Mishra", url: "https://gaurav-api.in", status: "Up", uptime: "96.8%", lastChecked: "2024-01-25 08:10 AM" },
  { id: 28, name: "Sonia Kapoor", url: "https://sonia-dashboard.in", status: "Down", uptime: "88.1%", lastChecked: "2024-01-25 07:00 AM" },
  { id: 29, name: "Vijay Patil", url: "https://vijay-app.in", status: "Up", uptime: "97.3%", lastChecked: "2024-01-25 06:00 AM" },
  { id: 30, name: "Meena Iyer", url: "https://meena-service.in", status: "Down", uptime: "90.5%", lastChecked: "2024-01-25 05:10 AM" },
  
  { id: 31, name: "Deepak", url: "https://Deepak-site.in", status: "Up", uptime: "99.1%", lastChecked: "2024-01-25 09:20 AM" },
  { id: 32, name: "Dharam", url: "https://Dharam-api.in", status: "Up", uptime: "96.8%", lastChecked: "2024-01-25 08:10 AM" },
  { id: 33, name: "Bharat sir", url: "https://Bharat-dashboard.in", status: "Down", uptime: "88.1%", lastChecked: "2024-01-25 07:00 AM" },
  { id: 34, name: "Vinit sir", url: "https://Vinit-app.in", status: "Up", uptime: "97.3%", lastChecked: "2024-01-25 06:00 AM" },
  { id: 35, name: "Isha ma'am", url: "https://Isha-service.in", status: "Down", uptime: "90.5%", lastChecked: "2024-01-25 05:10 AM" }
];
