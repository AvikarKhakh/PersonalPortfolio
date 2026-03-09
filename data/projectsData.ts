interface Project {
  title: string;
  description: string;
  href?: string;
  imgSrc?: string;
}

const projectsData: Project[] = [
  {
    title: "XRP Robotics",
    description: `Led the design and deployment of autonomous robotic systems using Python, implementing sensor-driven navigation and obstacle detection. Improved accuracy by 30% through iterative testing and tuning.`,
    href: "https://github.com/AvikarKhakh/vision_control_xrp_functions",
  },
  {
    title: "NHL Team Points Prediction",
    description: `Built an end-to-end machine learning pipeline using Python and Random Forest regression to forecast NHL team point totals, translating advanced performance data into actionable insights.`,
    href: "https://github.com/AvikarKhakh/nhl-standings-ML-model-dashboard",
  },
  {
    title: "Investment Strategy Simulator",
    description: `Developed a backtesting simulator that lets users compare portfolio strategies over historical market data with configurable assumptions and clear performance narratives.`,
    href: "https://github.com/AvikarKhakh/portfolio-stategy-simulator",
  },
  {
    title: "NBA Statistical Query Engine",
    description: `Built a natural language-to-SQL web app using React, FastAPI, and Llama 3.3 70B that lets users query 9 seasons of NBA data through plain English, returning interactive tables and auto-generated visualizations.`,
    href: "https://github.com/AvikarKhakh/nba-SQL-engine",
  },
];

export default projectsData;
