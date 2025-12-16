export interface Sender {
  id: string;
  name: string;
  email: string;
  summary: string;
  frequency: string;
  category: 'Promotion' | 'Newsletter' | 'Update';
  lastEmailDate: string;
}

export const MOCK_SENDERS: Sender[] = [
  {
    id: '1',
    name: 'Nike',
    email: 'news@nike.com',
    summary: 'Sends daily discount codes for shoes; last seen 2 days ago.',
    frequency: 'Daily',
    category: 'Promotion',
    lastEmailDate: '2 days ago',
  },
  {
    id: '2',
    name: 'TechCrunch',
    email: 'newsletters@techcrunch.com',
    summary: 'Daily top tech news stories and startup updates.',
    frequency: 'Daily',
    category: 'Newsletter',
    lastEmailDate: '5 hours ago',
  },
  {
    id: '3',
    name: 'Vercel',
    email: 'notifications@vercel.com',
    summary: 'Deployment success notifications and project usage alerts.',
    frequency: 'Sporadic',
    category: 'Update',
    lastEmailDate: '1 week ago',
  },
  {
    id: '4',
    name: 'J.Crew',
    email: 'hello@jcrew.com',
    summary: 'Seasonal sales announcements and "Final Sale" reminders.',
    frequency: 'Weekly',
    category: 'Promotion',
    lastEmailDate: 'Yesterday',
  },
  {
    id: '5',
    name: 'Morning Brew',
    email: 'crew@morningbrew.com',
    summary: 'Business news and market updates in a witty format.',
    frequency: 'Daily',
    category: 'Newsletter',
    lastEmailDate: 'Today',
  },
];

export const fetchSenders = async (): Promise<Sender[]> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_SENDERS);
    }, 1000);
  });
};
