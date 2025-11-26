import React from "react";

const teamMembers = [
  {
    name: "Mr. Rishabh Tripathi",
    role: "Founder",
    image: "/team/rishabh.jpg", 
  },
  {
    name: "Mr. Preshit Desai",
    role: "Mentor",
    image: "/team/preshit.jpg",
  },
  {
    name: "Ms. Anushka Shukla",
    role: "Mentor",
    image: "/team/anushka.jpg",
  },
  {
    name: "Ms. Sanskrati Agrawal",
    role: "UI/UX Designer",
    image: "/team/sanskrati.jpg",
  },
  {
    name: "Mr. Om Lakshkar",
    role: "AI Engineer",
    image: "/team/om.jpg",
  },
  {
    name: "Mr. Aryan Tiwari",
    role: "Full Stack Developer",
    image: "/team/aryan.jpg",
  },
];

const Team = () => {
  // Separate mentors from the rest, with explicit ordering for mentors
  const mentorNamesOrder = ["Mr. Preshit Desai", "Ms. Anushka Shukla"];
  const mentors = teamMembers
    .filter((m) => m.role === "Mentor")
    .sort((a, b) => mentorNamesOrder.indexOf(a.name) - mentorNamesOrder.indexOf(b.name));

  const others = teamMembers.filter((m) => m.role !== "Mentor");

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Meet the <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Passionate minds behind Codora AI's innovation.
        </p>
      </div>

      {/* Mentors partition */}
      <div className="max-w-6xl mx-auto mb-10">
        <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Mentors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {mentors.map((member, idx) => (
            <div
              key={`mentor-${idx}`}
              className="rounded-xl bg-card border border-border p-6 text-center transition-transform hover:-translate-y-2 hover:shadow-lg group"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-secondary">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-foreground">{member.name}</h4>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Remaining team members */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {others.map((member, index) => (
            <div
              key={index}
              className="rounded-xl bg-card border border-border p-6 text-center transition-transform hover:-translate-y-2 hover:shadow-lg group"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-secondary">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
