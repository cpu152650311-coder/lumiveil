interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

interface TeamGridProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export default function TeamGrid({ title, subtitle, members }: TeamGridProps) {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-site mx-auto">
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">{title}</h2>
        <p className="text-text-muted text-lg text-center mt-2 mb-12">{subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, i) => (
            <div key={i} className="bg-bg-main rounded-card border border-border-light shadow-card p-6 text-center hover:shadow-card-hover transition-shadow group">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-accent-light group-hover:border-accent transition-colors"
              />
              <h3 className="font-outfit text-lg font-bold text-text-primary">{member.name}</h3>
              <p className="text-sm text-accent font-semibold mb-2">{member.title}</p>
              <p className="text-sm text-text-muted leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
