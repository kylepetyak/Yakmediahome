const teamMembers = [
  {
    name: 'Maya Patel',
    role: 'Head of Strategy',
    speciality: 'Culture & Consumer Insights'
  },
  {
    name: 'David Chen',
    role: 'Platform Strategist',
    speciality: 'Real-Time Social Intelligence'
  },
  {
    name: 'Sofia Rodriguez',
    role: 'Audience Researcher',
    speciality: 'Behavioral Analytics'
  },
  {
    name: 'Alex Taylor',
    role: 'Cultural Analyst',
    speciality: 'Trend Identification & Activation'
  }
];

export function StrategyTeamSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the Team.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Yak Media's strategy team doesn't just advise from a distance—we're embedded in the platforms, 
            testing every day. Our strategists are practitioners first, ensuring every plan is actionable 
            and designed to convert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Profile Photo Placeholder */}
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              
              <p className="text-blue-500 font-medium mb-2">
                {member.role}
              </p>
              
              <p className="text-gray-600 text-sm">
                {member.speciality}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}