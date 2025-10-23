const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Head of Paid Social',
    speciality: 'Meta & TikTok Performance'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Google Ads Specialist',
    speciality: 'Search & Shopping Campaigns'
  },
  {
    name: 'Alex Kim',
    role: 'Performance Strategist',
    speciality: 'Full-Funnel Attribution'
  },
  {
    name: 'Jordan Smith',
    role: 'Creative Amplification Lead',
    speciality: 'Organic-to-Paid Scaling'
  }
];

export function MediaTeamSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the Team.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Yak Media, your ads are run by practitioners who live inside the platforms daily—not layers 
            of middle management. Our team stays current with every algorithm change, new feature, and 
            optimization opportunity.
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