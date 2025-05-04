import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell,
    BarChart, Bar,
    RadarChart, Radar, PolarGrid, PolarAngleAxis,
    AreaChart, Area
  } from 'recharts';
  
  const Overview = () => {
    // Mock Data
    const stats = {
      totalUsers: 1523,
      activeSessions: 348,
      feedbackScore: 4.6,
    };
  
    const data = [
      { name: 'Mon', users: 300, sessions: 200 },
      { name: 'Tue', users: 450, sessions: 240 },
      { name: 'Wed', users: 200, sessions: 280 },
      { name: 'Thu', users: 278, sessions: 290 },
      { name: 'Fri', users: 189, sessions: 250 },
    ];
  
    const pieData = [
      { name: 'Positive', value: 80 },
      { name: 'Neutral', value: 15 },
      { name: 'Negative', value: 5 },
    ];
  
    const COLORS = ['#4ade80', '#facc15', '#f87171'];
  
    return (
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Overview</h2>
  
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-gray-500">Total Users</p>
            <p className="text-2xl font-bold">{stats.totalUsers}</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-gray-500">Active Sessions</p>
            <p className="text-2xl font-bold">{stats.activeSessions}</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-gray-500">Feedback Score</p>
            <p className="text-2xl font-bold">{stats.feedbackScore} ⭐</p>
          </div>
        </div>
  
        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-lg font-semibold mb-2">User Growth</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid stroke="#eee" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-lg font-semibold mb-2">Feedback Sentiment</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-lg font-semibold mb-2">Active Sessions</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sessions" fill="#34d399" />
              </BarChart>
            </ResponsiveContainer>
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-lg font-semibold mb-2">User Engagement</h4>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart outerRadius={90} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <Radar dataKey="users" stroke="#818cf8" fill="#818cf8" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
  
          <div className="bg-white p-4 rounded shadow md:col-span-2">
            <h4 className="text-lg font-semibold mb-2">Sessions Overview</h4>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sessions" stroke="#60a5fa" fillOpacity={1} fill="url(#colorSessions)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };
  
  export default Overview;
  