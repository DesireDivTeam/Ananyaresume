import React from "react";
import Wrapper from "@/app/_components/Wrapper";
import { HandCoins, BookOpen, Users, Sparkles } from "lucide-react";

const ImpactSection = ({ icon: Icon, title, children }) => (
  <div className="space-y-4 border-l border-gray-700 pl-6">
    <div className="flex items-center gap-3 text-gray-300">
      <Icon className="w-5 h-5" />
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
    <div className="text-gray-400 leading-relaxed">{children}</div>
  </div>
);

export default function Page() {
  return (
    <Wrapper className="lg:border-2  lg:rounded-2xl lg:my-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <h1 className="font-light text-4xl md:text-5xl text-white/90">
            Society Work
          </h1>
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            &apos;&apos;Service before Self&apos;&apos; — I believe in giving
            back to society in whatever ways I can to the less fortunate. It
            breaks my heart that in my country, basic human rights, like the
            Right to Education, the Right to be free from Exploitation, etc,
            aren&apos;t given to underprivileged people. Coming from a secure
            and healthy place, I feel that I should be able to help these people
            especially women and children who are often left unnoticed.
          </p>
        </div>

        {/* Impact Sections */}
        <div className="space-y-12">
          <ImpactSection icon={HandCoins} title="Crowdfunding Success">
            I have been part of a crowdfunding campaign where the goal was to
            raise Rs 15000, for an underprivileged girl. I managed to raise Rs
            31000 for that girl and this money was able to cover her education
            expenses, her food and her uniform expenses. Nothing made me happier
            than seeing the look of joy in her eyes.
          </ImpactSection>

          <ImpactSection icon={BookOpen} title="Shiksha Kendra Program">
            In my school, a program called “Shiksha Kendra” used to run after
            school hours for underprivileged students. I volunteered to teach
            them basic maths and Science at least 2-3 times as well as donated
            some of my clothes and books to them.
          </ImpactSection>

          <ImpactSection icon={Users} title="Menstrual Health Awareness">
            In the 4th Semester of my college, I took an elective named
            “Extension and Outreach”, where I worked on raising awareness about
            menstrual hygiene among poor women and girls. I visited a few NGOs
            and talked about the importance of menstrual hygiene, made posters
            and conducted a few activities so that the women and girls could
            interact. I talked about the myths and taboos of menstruation, the
            importance of sanitary napkins, the importance of hygiene and many
            more.(Received O grade in this, highest)
          </ImpactSection>

          <ImpactSection icon={Sparkles} title="Girls Grow Program Mentor">
            Currently, I am also a mentor of a &apos;&apos;Girls Grow
            Program&apos;&apos;. In this program, our main focus is on secondary
            and senior school girls. Our main aim is to motivate these girls in
            the field of STEM. Girls are discouraged from pursuing STEM, or they
            don&apos;t have the right/adequate guidance to form the required
            decision. So we conduct sessions for these girls about various
            topics like what STEM is, what options they have in STEM, the
            resources for the STEM fields, women in STEM, colleges, Career
            options in STEM field and much more.I have been mentoring girls from
            a few schools and providing them with the necessary guidance. I have
            helped them with their questions related to the Science and
            Technology Field, always motivating them to study and research more
            before making a decision and have also provided them with the
            necessary materials and resources.
          </ImpactSection>
        </div>

        {/* Mission Statement */}
        <div className="text-gray-400 leading-relaxed">
          Through these initiatives, I strive to address the fundamental rights
          of underprivileged people, particularly in education and empowerment.
          Coming from a privileged position, I feel it&apos;s my responsibility
          to contribute to positive change in society.
        </div>
      </div>
    </Wrapper>
  );
}
