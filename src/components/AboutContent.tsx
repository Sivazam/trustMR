export default function AboutContent() {
  return (
    <section id="about-content" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-blue-900 mb-6 text-center">
          About Malladi Ramarao Trust
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Introduction */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-blue-900 mb-4">
              About the Trust
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Malladi Ramarao Trust</strong> is a registered charitable and social service organization established in 2015 with the sole objective of serving society selflessly. Since its registration in 2015, the Trust has been continuously working for the upliftment of underprivileged communities and overall development of society.
            </p>
            <div className="bg-amber-500/10 p-4 rounded-xl border-l-4 border-amber-500">
              <p className="text-sm font-medium text-blue-900">
                Registered Trust – Reg. No: 29/2015 | Serving since 2015
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-blue-900 mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Trust operates with transparency, accountability, and a humanitarian approach, ensuring that services reach those who truly need them. We believe that true development is possible only when health, education, and social harmony go hand in hand.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-blue-900/5 p-6 rounded-2xl border-l-4 border-blue-900">
          <h3 className="font-serif text-2xl font-semibold text-blue-900 mb-4">
            Our Vision
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            To create a society where:
          </p>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
              <span>Healthcare and education are accessible to all</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
              <span>Women and girls are empowered and confident</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
              <span>People of all religions live with mutual respect and harmony</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
              <span>Social service becomes a shared responsibility</span>
            </li>
          </ul>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-blue-900 mb-4">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-green-800/10 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">Humanity Above All</h4>
              <p className="text-sm text-muted-foreground">Putting people and their well-being first in everything we do</p>
            </div>
            <div className="bg-green-800/10 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">Equality & Inclusiveness</h4>
              <p className="text-sm text-muted-foreground">Treating everyone with equal respect and dignity regardless of background</p>
            </div>
            <div className="bg-green-800/10 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">Respect for All Religions</h4>
              <p className="text-sm text-muted-foreground">Embracing diversity and fostering interfaith harmony</p>
            </div>
            <div className="bg-green-800/10 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">Service with Integrity</h4>
              <p className="text-sm text-muted-foreground">Maintaining transparency and accountability in all operations</p>
            </div>
            <div className="bg-green-800/10 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">Long-term Impact</h4>
              <p className="text-sm text-muted-foreground">Focusing on sustainable solutions that create lasting change</p>
            </div>
          </div>
        </div>

        {/* Detailed Impact */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-amber-50/10 p-8 rounded-2xl">
          <h3 className="font-serif text-2xl font-semibold text-blue-900 mb-6">
            Impact Over the Last 10 Years
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold font-serif text-blue-900 mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Years of Service</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-serif text-blue-900 mb-2">Hundreds</div>
              <p className="text-sm text-muted-foreground">Girl Students Empowered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-serif text-blue-900 mb-2">Thousands</div>
              <p className="text-sm text-muted-foreground">Beneficiaries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-serif text-blue-900 mb-2">Multiple</div>
              <p className="text-sm text-muted-foreground">Religious Institutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-serif text-blue-900 mb-2">Continuous</div>
              <p className="text-sm text-muted-foreground">Healthcare Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
