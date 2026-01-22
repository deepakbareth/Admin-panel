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

export const monitorsData: Monitor[] = [
    {
        id: 1,
        name: "Deepak Alpha",     //  map((item)=>( <div>{item.name} </div>))    
        url: "https://monitors.com",
        status: "Up",
        uptime: "99%",
        lastChecked: "2024-01-26 10:30 AM",
    },
    {
        id: 2,
        name: "Dharam Server",
        url: "https://beta.com",
        status: "Down",
        uptime: "92%",
        lastChecked: "2024-01-26 09:10 AM",
    },
    {
        id: 3,
        name: "Bharat sir API",
        url: "https://gamma.io",
        status: "Up",
        uptime: "98%",
        lastChecked: "2024-01-26 08:40 AM",
    },
    {
        id: 4,
        name: "vinish sir App",
        url: "https://delta.app",
        status: "Up",
        uptime: "96%",
        lastChecked: "2024-01-26 07:55 AM",
    },
    {
        id: 5,
        name: "Isha ma'am Service",
        url: "https://omega.dev",
        status: "Down",
        uptime: "90%",
        lastChecked: "2024-01-26 06:30 AM",
    },
     {
        id: 6,
        name: "Deepak Alpha",     //  map((item)=>( <div>{item.name} </div>))    
        url: "https://monitors.com",
        status: "Up",
        uptime: "99%",
        lastChecked: "2024-01-26 10:30 AM",
    },
    {
        id: 7,
        name: "Dharam Server",
        url: "https://beta.com",
        status: "Down",
        uptime: "92%",
        lastChecked: "2024-01-26 09:10 AM",
    },
    {
        id: 8,
        name: "Bharat sir API",
        url: "https://gamma.io",
        status: "Up",
        uptime: "98%",
        lastChecked: "2024-01-26 08:40 AM",
    },
    {
        id: 9,
        name: "vinish sir App",
        url: "https://delta.app",
        status: "Up",
        uptime: "96%",
        lastChecked: "2024-01-26 07:55 AM",
    },
    {
        id: 10,
        name: "Isha ma'am Service",
        url: "https://omega.dev",
        status: "Down",
        uptime: "90%",
        lastChecked: "2024-01-26 06:30 AM",
    },
];
